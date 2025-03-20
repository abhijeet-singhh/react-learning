import React from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const toastConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progressClassName: "!bg-amber-500",
};

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: FieldError;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 ${
            theme === "light"
              ? "bg-gray-100 text-gray-900 border border-gray-300 focus:ring-amber-500"
              : "bg-gray-800 text-amber-400 focus:ring-amber-500"
          }`}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }
);

type TextAreaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  error?: FieldError;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, error, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 ${
            theme === "light"
              ? "bg-gray-100 text-gray-900 border border-gray-300 focus:ring-amber-500"
              : "bg-gray-800 text-amber-400 focus:ring-amber-500"
          }`}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }
);

const Contact = () => {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Message sent successfully!", {
        ...toastConfig,
        icon: <FaCheckCircle className="text-amber-500" />,
      });
      reset();
    } catch (error) {
      console.log(error)
      toast.error("Failed to send message. Please try again.", {
        ...toastConfig,
        icon: <FaTimesCircle className="text-red-600" />,
      });
    }
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-lg max-w-lg mx-auto ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-amber-400"
      }`}
    >
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-400">
          We'd love to hear from you! Fill out the form below and we'll respond promptly.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          id="name"
          error={errors.name}
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          error={errors.email}
          placeholder="your.email@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
        />

        <TextArea
          label="Message"
          id="message"
          error={errors.message}
          rows={5}
          placeholder="Your message here..."
          {...register("message", { required: "Message is required" })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-semibold transition-colors
            bg-amber-500 hover:bg-amber-600 text-gray-900
            disabled:bg-amber-500/50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <FaSpinner className="animate-spin mr-2" aria-hidden="true" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <ToastContainer
        {...toastConfig}
        toastClassName="!bg-gray-900 !text-amber-400 !rounded-lg !border !border-amber-500/30"
      />
    </div>
  );
};

export default Contact;