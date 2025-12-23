import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    schoolName: '',
    email: '',
    password: '',
    confirmPassword: '',
    keepLoggedIn: false
  })

  const HARDCODED_PASSWORD = 'password123'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if password matches hardcoded password
    if (formData.password === HARDCODED_PASSWORD && formData.confirmPassword === HARDCODED_PASSWORD) {
      // Redirect to dashboard
      navigate('/dashboard')
    } else {
      alert('Password does not match. Please use: password123')
    }
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-3/6 relative bg-gray-50  h-full">
        <img 
          src="/images/linkedsignup.png" 
          alt="Family using laptop" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* Right Section - Sign Up Form */}
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
              Sign Up Your School
            </h1>
            <p 
              className="text-center mx-auto"
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
              Create your school account to start managing safeguarding alerts, parent engagement, and reports - all in one secure platform.
            </p>
          </div>
        </div>

        {/* Form Card - Centered with max-width */}
        <div className="flex-1 flex justify-center px-6 sm:px-8 md:px-12 lg:px-16 pb-4">
          <div className="w-full max-w-md">
            {/* Form Card */}
            <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#fffdf9' }}>
            <form onSubmit={handleSubmit} className="space-y-3">
            {/* School Name */}
            <div>
              <label 
                htmlFor="schoolName" 
                className="block mb-1"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              >
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Value"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              />
            </div>

            {/* Official School Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block mb-1"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              >
                Official School Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{
                    color: 'var(--sds-color-text-default-default)',
                    fontFamily: 'var(--sds-typography-body-font-family)',
                    fontSize: 'var(--sds-typography-body-size-medium)',
                    fontStyle: 'normal',
                    fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                    lineHeight: '140%'
                  }}
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

            {/* Create Password */}
            <div>
              <label 
                htmlFor="password" 
                className="block mb-1"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="************"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label 
                htmlFor="confirmPassword" 
                className="block mb-1"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="************"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  color: 'var(--sds-color-text-default-default)',
                  fontFamily: 'var(--sds-typography-body-font-family)',
                  fontSize: 'var(--sds-typography-body-size-medium)',
                  fontStyle: 'normal',
                  fontWeight: 'var(--sds-typography-body-font-weight-regular)',
                  lineHeight: '140%'
                }}
              />
            </div>

            {/* Keep me logged in checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepLoggedIn"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="keepLoggedIn" className="ml-2 text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full text-white font-semibold py-2 px-4 transition-colors duration-200"
              style={{
                borderRadius: '6px',
                backgroundColor: '#173570'
              }}
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center mt-2">
              <p className="text-sm text-[#173570]">
                Already have an account?{' '}
                <a href="#" className="text-[#173570] hover:text-blue-700 font-bold">
                  Log In
                </a>
              </p>
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

