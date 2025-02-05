import { useState } from 'react'

const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value.trim()) error = 'Name is required'
                else if (value.length < 3) error = 'Name must be at least 3 characters'
                break;
            case 'email':
                if (!value) error = 'Email is required'
                else if (!value.includes('@')) error = 'Email must contain "@" symbol'
                else if (!value.split('@')[1]?.includes('.')) error = 'Email must contain a domain name after "@"'
                break;
            case 'password':
                if (!value) error = 'Password is required'
                else if (value.length < 6) error = 'Password must be at least 6 characters'
                break;
            case 'confirmPassword':
                if (!value) error = 'Please confirm your password';
                else if (value !== formData.password) error = 'Passwords do not match'
                break;
            default:
                break;
        }
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) validateField(name, value)
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        validateField(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                    />
                    {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                    />
                    {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        aria-invalid={!!errors.password}
                        aria-describedby="password-error"
                    />
                    {errors.password && (
                        <p id="password-error" className="mt-1 text-sm text-red-600">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                            }`}
                        aria-invalid={!!errors.confirmPassword}
                        aria-describedby="confirm-password-error"
                    />
                    {errors.confirmPassword && (
                        <p id="confirm-password-error" className="mt-1 text-sm text-red-600">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Sign Up
                </button>
            </div>
        </form>
    )
}

export default FormValidation