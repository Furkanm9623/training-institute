const sendMail = require("../services/mailService");

const submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 📩 Send Email to Admin from User's Email
    const adminEmailResponse = await sendMail(
      `"Bimbees Pvt Ltd" <${process.env.ADMIN_EMAIL}>`, // Send to Admin
      email, // From User's Email
      "New Contact Us Submission",
      `Dear Admin,
    
    You have received a new inquiry through the contact form.
    
    📌 **Inquiry Details:**  
    ------------------------------------------------------------  
    🔹 **Name:** ${name}  
    🔹 **Email:** ${email}  
    🔹 **Phone:** ${phone}  
    
    📩 **User's Message:**  
    ------------------------------------------------------------  
    ${message}  
    ------------------------------------------------------------  
    
    📢 **Action Required:**  
    Please review the inquiry and respond as soon as possible.
    
    Best regards,  
    **Bimbees Pvt Ltd System Notification**  7
    📧 https://furkanm9623.github.io/training-institute/  
    📞 ${phone}  
    `
    );

    // 📩 Send Confirmation Email to User from Admin Email
    const userEmailResponse = await sendMail(
      email, // Send to User
      `"Bimbees Pvt Ltd" <${process.env.ADMIN_EMAIL}>`, // From Admin Email with Label
      "Thank You for Contacting Bimbees Pvt Ltd!",
      `Dear ${name},
    
    Thank you for reaching out to **Bimbees Pvt Ltd**. We appreciate your interest and value your time.
    
    We have successfully received your message, and our team will get back to you as soon as possible. Below is a summary of your inquiry:
    
    📌 **Name:** ${name}  
    📌 **Email:** ${email}  
    📌 **Phone:** ${phone}  
    
    📩 **Your Message:**  
    ------------------------------------------------------------  
    ${message}  
    ------------------------------------------------------------  
    
    If your inquiry is urgent, please do not hesitate to contact us directly at **${process.env.ADMIN_EMAIL}**.  
    
    We look forward to assisting you and providing the best support possible.
    
    Best regards,  
    **Bimbees Pvt Ltd Team**  
    📧 https://furkanm9623.github.io/training-institute/  
    📞 +91 8584009623  
    `
    );

    if (adminEmailResponse.success && userEmailResponse.success) {
      res
        .status(200)
        .json({ success: true, message: "Emails sent successfully!" });
    } else {
      res.status(500).json({
        success: false,
        message: "Error sending emails",
        errors: {
          admin: adminEmailResponse.message,
          user: userEmailResponse.message,
        },
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error sending message", error });
  }
};

module.exports = { submitContactForm };
