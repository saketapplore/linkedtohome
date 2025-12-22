import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset
    console.log('Password reset requested for:', formData.email)
    alert('Password reset instructions have been sent to your email.')
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-3/6 relative bg-gray-50 h-full">
        <img 
          src="/images/linkedsignup.png" 
          alt="Family using laptop" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="w-full lg:w-3/6 flex flex-col bg-gray-50 overflow-hidden">
        {/* Header - Full Width */}
        <div className="w-full text-center mt-10 relative py-16" style={{ backgroundColor: '#f5f5f5' }}>
          <div 
            className="absolute inset-0"
            style={{
              borderRadius: '442px',
              background: 'linear-gradient(190deg, #FFCCBC 12.34%, #B1EFE3 80.1%, #B1EFE3 90%)',
              filter: 'blur(150px)',
              zIndex: 0,
              overflow: 'hidden'
            }}
          />
          <div className="relative z-10 px-6">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/linked.png" 
                alt="LinkED Logo" 
                className="h-32 w-72 object-fill"
              />
            </div>
            
          </div>
        </div>

        {/* Form Card - Centered with max-width */}
        <div className="flex-1 flex justify-center px-6 sm:px-8 md:px-12 lg:px-16 pb-4">
          <div className="w-full max-w-md">
          <h1 
              className="mb-2"
              style={{
                color: '#000',
                fontFamily: 'Lato',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '30px'
              }}
            >
              Forgot your password?
            </h1>
            <p 
              className=""
              style={{
                color: '#5C5C5C',
                fontFamily: 'Lato',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                width: '400px'
              }}
            >
              Please enter the email address you'd like your password reset information sent to
            </p>
            {/* Form Card */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#fefefe' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full text-white font-semibold py-2 px-4 transition-colors duration-200"
              style={{
                borderRadius: '6px',
                backgroundColor: '#173570'
              }}
            >
              Reset Password
            </button>

            {/* Back to Login Link */}
            <div className="text-center mt-4">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/login') }} 
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Back to Login
              </a>
            </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

