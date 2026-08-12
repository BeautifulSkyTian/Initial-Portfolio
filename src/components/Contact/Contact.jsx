import { use, useState } from "react";
import "./Contact.css"; 

function Contact(){
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        message: ""
    }); 

    const [errors, setErrors] = useState({
        name: "", 
        email: "", 
        message: "" 
    }); 

    const [isSubmitted, setIsSubmitted] = useState(false); 
    
    function handleSubmit(event){
        event.preventDefault(); 
        
        const newErrors = validateForm(); 

        setErrors(newErrors); 
        setIsSubmitted(false); 

        const hasErrors = Object.values(newErrors).some(
            error => error !== ""
        ); 

        if (hasErrors){
            return; 
        }

        console.log("Valid form data:", formData);

        setFormData({
            name: "",
            email: "",
            message: ""
        });

        setErrors({
            name: "", 
            email: "", 
            message: ""
        }); 

        setIsSubmitted(true); 
    }

    function handleChange(event){
        const {name, value} = event.target; 
        setFormData(currentData => ({
            ...currentData, 
            [name]: value
        })); 

        setErrors(currentErrors => ({
            ...currentErrors, 
            [name]: ""
        })); 

        setIsSubmitted(false); 
    }

    function validateForm() {
        const newErrors = {
            name: "",
            email: "",
            message: ""
        };

        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();

        if (trimmedName === "") {
            newErrors.name = "Name is required.";
        } else if (trimmedName.length < 2) {
            newErrors.name = "Name must contain at least 2 characters.";
        }

        if (trimmedEmail === "") {
            newErrors.email = "Email is required.";
        } else if (
            !trimmedEmail.includes("@") ||
            !trimmedEmail.includes(".")
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (trimmedMessage === "") {
            newErrors.message = "Message is required.";
        } else if (trimmedMessage.length < 10) {
            newErrors.message =
                "Message must contain at least 10 characters.";
        }

        return newErrors;
    }

    return(
        <section id="contact" className="contact"> 
            <h2>Contact Me!</h2>
            
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    className={errors.name ? "formInput inputError" : "formInput"}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                        errors.name ? "name-error" : undefined
                    }
                />          

                {errors.name && (
                    <p
                        id="name-error"
                        className="formError"
                    >
                        {errors.name}
                    </p>
                )}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    className={errors.email ? "formInput inputError" : "formInput"}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                        errors.email ? "email-error" : undefined
                    }
                />

                {errors.email && (
                    <p
                        id="email-error"
                        className="formError"
                    >
                        {errors.email}
                    </p>
                )}

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className={errors.message ? "formInput inputError" : "formInput"}
                    name="message"
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                        errors.message ? "message-error" : undefined
                    }
                />
                
                {errors.message && (
                    <p
                        id="message-error"
                        className="formError"
                    >
                        {errors.message}
                    </p>
                )}

                <p className="contact__characterCount">
                    {formData.message.length} / 1000
                </p>

                <button type="submit">
                    Send Message
                </button>   

                {isSubmitted && (
                    <p className="formSuccess">
                        Form data passed validation.
                    </p>
                )}   
            </form>

            <p className="contact__alternative">
                You can also reach me directly at{" "}
                <a href="mailto:pantianqi666@gmail.com">
                    pantianqi666@gmail.com
                </a>
            </p>
        </section>
    ); 
}

export default Contact; 