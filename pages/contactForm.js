import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Set the status message to an empty string at the start of the form submission
        setStatusMessage('');

        // Set up template params for EmailJS
        const templateParams = {
            from_name: senderEmail,
            message: message,
        };

        emailjs.send('service_ul35wcu', 'template_t2t020e', templateParams, '7_qJiOxa4onvxlmXy')
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Optionally reset form
                setSenderEmail('');
                setMessage('');
                // Display success message
                setStatusMessage('Email sent successfully!');
            })
            .catch((err) => {
                console.log('Error sending email:', err);
                // Display error message
                setStatusMessage('Error sending email. Please try again.');
            });
    };

    return (
        <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" style={{ opacity: 1 }}>
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">GET IN TOUCH</h2>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                For direct contact, kindly reach out to me via email at <a className="underline" href="mailto:krishnaveni.nagarapu@gmail.com">krishnaveni.nagarapu@gmail.com</a> or by using the provided form below. Your prompt response is greatly appreciated.
            </p>
            <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
                <input 
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Your email"
                    name="senderEmail"
                />
                <textarea 
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength="5000"
                ></textarea>
                <button 
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                >
                    Submit 
                    <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        strokeWidth="0" 
                        viewBox="0 0 512 512" 
                        className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
                        height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                    </svg>
                </button>
            </form>

            {/* Display success or error message */}
            {statusMessage && (
                <div className={`mt-4 text-lg ${statusMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                    {statusMessage}
                </div>
            )}
        </section>
    );
}

export default ContactForm;
