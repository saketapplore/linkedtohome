import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function EmployeeManagement() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('Employee Management')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [roleFilter, setRoleFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    employeeName: 'Emma Carter',
    email: 'example@gmail.com',
    contactNumber: '9999999999',
    role: '',
    accessRole: 'Isla Carter',
    yearGroup: 'Year 8'
  })
  const dropdownRefs = useRef({})

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null) {
        const ref = dropdownRefs.current[openDropdown]
        if (ref && !ref.contains(event.target)) {
          setOpenDropdown(null)
        }
      }
    }

    if (openDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleAddEmployee = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsModalOpen(false)
  }

  const employeesData = [
    { id: 1, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Admin', accessLevel: 'Limited (Class-level)', status: 'Lorem' },
    { id: 2, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Admin', accessLevel: 'Full', status: 'Lorem' },
    { id: 3, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Admin', accessLevel: 'Full', status: 'Lorem' },
    { id: 4, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Admin', accessLevel: 'Partial (Parent Queries)', status: 'Lorem' },
    { id: 5, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Counsellor', accessLevel: 'Partial (Parent Queries)', status: 'Lorem' },
    { id: 6, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Counsellor', accessLevel: 'Full', status: 'Lorem' },
    { id: 7, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Counsellor', accessLevel: 'Full', status: 'Lorem' },
    { id: 8, name: 'Emma Carter', email: 'emma.carter@example.com', role: 'Counsellor', accessLevel: 'Full', status: 'Lorem' }
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content - Scrollable if needed */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {/* Title and Description */}
            <section className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Management</h1>
              <p className="text-sm text-gray-600">
                View and manage parent accounts, connections, and activity.
              </p>
            </section>

            {/* Controls Bar */}
            <section className="mb-6 flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                />
              </div>

              {/* Role Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['role'] = el}>
                <button
                  onClick={() => toggleDropdown('role')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#173570] text-sm"
                >
                  <span className="text-sm text-gray-700">Role</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'role' && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        setRoleFilter('All')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setRoleFilter('Admin')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => {
                        setRoleFilter('Counsellor')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Counsellor
                    </button>
                  </div>
                )}
              </div>

              {/* Status Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['status'] = el}>
                <button
                  onClick={() => toggleDropdown('status')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#173570] text-sm"
                >
                  <span className="text-sm text-gray-700">Status</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'status' && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        setStatusFilter('All')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('Active')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Active
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('Inactive')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Inactive
                    </button>
                  </div>
                )}
              </div>

              {/* Add New Employee Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors flex items-center gap-2 font-medium text-sm whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Employee
              </button>
            </section>

            {/* Employees Table */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#B1EFE3' }}>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">S.no.</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Employee Name</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Access Level</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeesData.map((employee, index) => (
                      <tr key={employee.id} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm text-gray-600">{index + 1}.</td>
                        <td 
                          className="py-3 px-4 text-sm text-gray-900 cursor-pointer hover:text-[#173570]"
                          onClick={() => navigate('/employee-profile')}
                        >
                          {employee.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{employee.email}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{employee.role}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{employee.accessLevel}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{employee.status}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="relative" ref={el => dropdownRefs.current[`action-${employee.id}`] = el}>
                            <button
                              onClick={() => toggleDropdown(`action-${employee.id}`)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                            {openDropdown === `action-${employee.id}` && (
                              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                <button
                                  onClick={() => {
                                    setOpenDropdown(null)
                                    // Handle delete account
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Delete Account
                                </button>
                                <button
                                  onClick={() => {
                                    setOpenDropdown(null)
                                    navigate('/employee-profile')
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  View Profile
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-4 py-4 border-t border-gray-200 flex items-center justify-between">
                <button className="text-sm text-gray-600 hover:text-[#173570] font-medium">
                  ← Previous
                </button>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-sm bg-[#173570] text-white rounded font-medium">1</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-[#173570] font-medium">2</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-[#173570] font-medium">3</button>
                  <span className="px-2 text-sm text-gray-600">...</span>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-[#173570] font-medium">8</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-[#173570] font-medium">9</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-[#173570] font-medium">10</button>
                </div>
                <button className="text-sm text-gray-600 hover:text-[#173570] font-medium">
                  Next →
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Add New Employee Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleModalClose}
          ></div>
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="bg-white shadow-xl w-full max-w-md h-full overflow-y-auto relative">
              {/* Close Button - Outside form container */}
              <button
                onClick={handleModalClose}
                className="absolute -left-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className=" p-6">
                <div className="w-8"></div> {/* Spacer for centering */}
                <h2 className="text-xl font-bold text-[#003049]">Add New Employee</h2>
                <div className="w-8"></div> {/* Spacer for centering */}
              </div>

              {/* Modal Body */}
              <form onSubmit={handleAddEmployee} className="p-6 space-y-4">
                {/* Employee Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
                  <input
                    type="text"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                  />
                </div>

                {/* Role/ Designation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role/ Designation</label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option>Admin</option>
                      <option>Counsellor</option>
                      <option>Teacher</option>
                      <option>Staff</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Access Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Access Role</label>
                  <input
                    type="text"
                    name="accessRole"
                    value={formData.accessRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                  />
                </div>

                {/* Year Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year Group</label>
                  <div className="relative">
                    <select
                      name="yearGroup"
                      value={formData.yearGroup}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm bg-white"
                    >
                      <option>Year 7</option>
                      <option>Year 8</option>
                      <option>Year 9</option>
                      <option>Year 10</option>
                      <option>Year 11</option>
                      <option>Year 12</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Add Child Link */}
                <div>
                  <button
                    type="button"
                    className="text-[#173570] ml-72 hover:text-[#1a3d7a] font-medium text-sm"
                  >
                    +Add Child
                  </button>
                </div>

                {/* Add Parent Button */}
                <button
                  type="submit"
                  className="w-[180px] mt-12 px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm"
                >
                  Add Parent
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EmployeeManagement

