import { ChangeEvent, FormEvent, useState } from "react";

interface FormInterface {
    name: string;
    email: string;
}

const ContactForm = () => {

    const inputClass: string = 'w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'

    const [formData, setFormData] = useState<FormInterface>({
        name: "",
        email: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        setFormData({
            name: '',
            email: '',
        })
    };

    return (
        <div className="w-full flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;