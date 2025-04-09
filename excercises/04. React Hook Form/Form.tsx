import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  // Initialize the form methods from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  // State to control success message popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    // Reset the form and show the success message
    reset();
    setPopupVisible(true);

    // Hide the success message after 3 seconds
    setTimeout(() => setPopupVisible(false), 3000);
  };

  return (
    <div>
      {/* Form wrapper with conditional blur effect */}
      <div className={`transition-all duration-500 ease-in-out ${isPopupVisible ? "blur-md" : ""}`}>
        <h2 className="text-2xl font-bold text-center mb-4">Signup Form</h2>

        {/* Form with noValidate to prevent browser default validation popups */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-md w-96" noValidate>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div
          aria-live="polite"
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white p-4 rounded-md shadow-lg transition-opacity duration-500 ease-in-out ${isPopupVisible ? "opacity-100" : "opacity-0 hidden"
            }`}
        >
          Form Submitted Successfully!
        </div>
      )}
    </div>
  );
};

export default SignupForm;
