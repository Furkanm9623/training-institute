export const submitContactUs = async (formData) => {
    try {
        const response = await fetch("https://training-course-backend.onrender.com/api/v1/contact/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        return await response.json();
    } catch (error) {
        console.error("Error submitting contact us form:", error);
        return { success: false, message: "Failed to submit form" };
    }
};
