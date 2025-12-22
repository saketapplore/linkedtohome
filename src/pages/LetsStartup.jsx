import React, { useState } from 'react'

function LetsStartup() {
  const [formData, setFormData] = useState({
    schoolName: 'Greenfield High School',
    email: 'info@greenfieldhigh.org',
    phoneNumber: '',
    address: '',
    cityCountry: 'Value',
    schoolType: 'Primary / Secondary / K-12',
    logo: null
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleFileDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        logo: files[0]
      }))
    }
  }

  const handleFileClick = () => {
    document.getElementById('logoUpload').click()
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

      {/* Right Section - Form */}
      <div className="w-full lg:w-3/6 flex flex-col bg-gray-50 overflow-hidden">
        {/* Header - Full Width */}
        <div className="w-full text-center mt-4 relative py-8" style={{ backgroundColor: '#f5f5f5' }}>
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
              Let's set up your school
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
              Tell us a few details to personalize your portal.
            </p>
          </div>
        </div>

        {/* Form Card - Centered with max-width */}
        <div className="flex-1 flex justify-center px-6 sm:px-8 md:px-12 lg:px-16 pb-4 overflow-y-auto">
          <div className="w-full max-w-md">
            {/* Form Card */}
            <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: '#fefefe' }}>
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* School Name */}
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Official School Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Official School Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* City / Country */}
              <div>
                <label htmlFor="cityCountry" className="block text-sm font-medium text-gray-700 mb-0.5">
                  City / Country
                </label>
                <div className="relative">
                  <select
                    id="cityCountry"
                    name="cityCountry"
                    value={formData.cityCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="Value">Value</option>
                    <option value="London, UK">London, UK</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="Toronto, Canada">Toronto, Canada</option>
                  </select>
                  <svg 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* School Type */}
              <div>
                <label htmlFor="schoolType" className="block text-sm font-medium text-gray-700 mb-0.5">
                  School Type
                </label>
                <div className="relative">
                  <select
                    id="schoolType"
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="Primary / Secondary / K-12">Primary / Secondary / K-12</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="K-12">K-12</option>
                  </select>
                  <svg 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Upload Logo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-0.5">
                  Upload Logo
                </label>
                <div
                  onClick={handleFileClick}
                  onDrop={handleFileDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
                >
                  <input
                    type="file"
                    id="logoUpload"
                    name="logo"
                    onChange={handleChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <svg 
                    className="mx-auto h-12 w-12 text-gray-400 mb-2"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <p className="text-sm text-gray-600">
                    Drop files here or click to upload
                  </p>
                  {formData.logo && (
                    <p className="text-xs text-gray-500 mt-2">{formData.logo.name}</p>
                  )}
                </div>
              </div>

              {/* Save & Continue Button */}
              <button
                type="submit"
                className="w-full text-white font-semibold py-2 px-4 transition-colors duration-200"
                style={{
                  borderRadius: '6px',
                  backgroundColor: '#173570'
                }}
              >
                Save & Continue
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsStartup


