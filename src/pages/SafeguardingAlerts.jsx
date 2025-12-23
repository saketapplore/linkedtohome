import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function SafeguardingAlerts() {
  const [activeNav, setActiveNav] = useState('Safeguarding Alerts')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [yearGroupFilter, setYearGroupFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertFormData, setAlertFormData] = useState({
    alertTitle: '',
    applicableYearGroups: '',
    selectParent: '',
    whatWereSeeing: '',
    whatWereDoing: '',
    howYouCanHelp: '',
    helpfulResources: null
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

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleAlertInputChange = (e) => {
    const { name, value } = e.target
    setAlertFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAlertFormData(prev => ({
        ...prev,
        helpfulResources: file
      }))
    }
  }

  const handleCreateAlert = (e) => {
    e.preventDefault()
    // Handle alert creation
    console.log('Alert created:', alertFormData)
    setIsModalOpen(false)
    // Reset form
    setAlertFormData({
      alertTitle: '',
      applicableYearGroups: '',
      selectParent: '',
      whatWereSeeing: '',
      whatWereDoing: '',
      howYouCanHelp: '',
      helpfulResources: null
    })
  }

  const alertsData = [
    { id: 1, title: 'Bullying Incident', yearGroup: 'Year 8', dateSent: '2025-09-23', viewedPercent: 70, status: 'Sent' },
    { id: 2, title: 'Bullying Incident', yearGroup: 'Year 8', dateSent: '2025-09-23', viewedPercent: 70, status: 'Sent' },
    { id: 3, title: 'Bullying Incident', yearGroup: 'Year 8', dateSent: '2025-09-23', viewedPercent: 70, status: 'Sent' }
  ]

  const contextualAlertsData = [
    { id: 1, title: 'Bullying Incident', yearGroup: 'Year 8', scheduledDate: '2025-09-23' },
    { id: 2, title: 'Bullying Incident', yearGroup: 'Year 8', scheduledDate: '2025-09-23' },
    { id: 3, title: 'Bullying Incident', yearGroup: 'Year 8', scheduledDate: '2025-09-23' }
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content - Scrollable if needed */}
        <section className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {/* Title and Description */}
                <section className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Safeguarding Alerts</h1>
              <p className="text-sm text-gray-600">
                View and manage parent accounts, connections, and activity.
              </p>
                </section>

                 {/* School Alerts Section */}
                <section className="mb-6">
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">School Alerts <span className="text-gray-500 font-normal">(Recent Alert Sent)</span></h3>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex items-center gap-4 mb-6">
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
                  className="w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Year Group Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['yearGroup'] = el}>
                <button
                  onClick={() => toggleDropdown('yearGroup')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-sm text-gray-700">Year Group</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'yearGroup' && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        setYearGroupFilter('All')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setYearGroupFilter('Year 7')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Year 7
                    </button>
                    <button
                      onClick={() => {
                        setYearGroupFilter('Year 8')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Year 8
                    </button>
                  </div>
                )}
              </div>

              {/* Status Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['status'] = el}>
                <button
                  onClick={() => toggleDropdown('status')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        setStatusFilter('Sent')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sent
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('Draft')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Draft
                    </button>
                  </div>
                )}
              </div>

              {/* Create New Alert Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Create New Alert</span>
              </button>
            </div>

            {/* Alerts Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr style={{ backgroundColor: '#B1EFE3' }}>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alert Title</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Year Group</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date Sent</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Viewed %</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {alertsData.map((alert) => (
                    <tr key={alert.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">{alert.title}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{alert.yearGroup}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{alert.dateSent}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                            <div 
                              className="h-2 rounded-full"
                              style={{ 
                                width: `${alert.viewedPercent}%`,
                                backgroundColor: '#FFAB91'
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-700">{alert.viewedPercent}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span 
                          className="inline-flex px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: '#FFAB91',
                            color: '#000'
                          }}
                        >
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => toggleDropdown(`action-${alert.id}`)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM12 10a2 2 0 110-4 2 2 0 010 4zM18 10a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View More Link */}
            <div className="p-6 pt-4 text-center">
              <button className="text-[#173570] hover:text-[#1a3d7a] font-medium text-sm">
                View More
              </button>
            </div>
            </div>
                </section>

               {/* Contextual Alerts Section */}
               <section className="mt-6">
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Contextual Alerts</h3>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex items-center gap-4 mb-6">
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
                  className="w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Year Group Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['contextualYearGroup'] = el}>
                <button
                  onClick={() => toggleDropdown('contextualYearGroup')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-sm text-gray-700">Year Group</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'contextualYearGroup' && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Year 7
                    </button>
                    <button
                      onClick={() => {
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Year 8
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contextual Alerts Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr style={{ backgroundColor: '#B1EFE3' }}>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alert Title</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Year Group</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Scheduled Date</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {contextualAlertsData.map((alert) => (
                    <tr key={alert.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">{alert.title}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">{alert.yearGroup}</td>
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">{alert.scheduledDate}</td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {/* Preview Button */}
                          <button className="flex items-center gap-1 text-[#173570] hover:text-[#1a3d7a] font-medium text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Preview
                          </button>
                          {/* Opt-Out Button */}
                          <button className="flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Opt-Out
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View More Link */}
            <div className="p-6 pt-4 text-center">
              <button className="text-[#173570] hover:text-[#1a3d7a] font-medium text-sm">
                View More
              </button>
            </div>
            </div>
               </section>
          </div>
        </section>
      </div>

      {/* Create Alert Modal */}
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
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6">
                <button
                  onClick={handleModalClose}
                  className="absolute -left-10 w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-xl font-bold text-[#003049] flex-1 ">Create Alerts</h2>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleCreateAlert} className="p-6 space-y-4">
                {/* Alert Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alert Title</label>
                  <input
                    type="text"
                    name="alertTitle"
                    value={alertFormData.alertTitle}
                    onChange={handleAlertInputChange}
                    placeholder="Enter here."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm"
                  />
                </div>

                {/* Applicable Year Group(s) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applicable Year Group(s)*</label>
                  <div className="relative">
                    <select
                      name="applicableYearGroups"
                      value={alertFormData.applicableYearGroups}
                      onChange={handleAlertInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent appearance-none bg-white text-sm"
                    >
                      <option value="">Select Year Group</option>
                      <option value="Year 7">Year 7</option>
                      <option value="Year 8">Year 8</option>
                      <option value="Year 9">Year 9</option>
                      <option value="Year 10">Year 10</option>
                      <option value="All Years">All Years</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Select parent */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select parent</label>
                  <div className="relative">
                    <select
                      name="selectParent"
                      value={alertFormData.selectParent}
                      onChange={handleAlertInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent appearance-none bg-white text-sm"
                    >
                      <option value="">Select.</option>
                      <option value="All Parents">All Parents</option>
                      <option value="Year 7 Parents">Year 7 Parents</option>
                      <option value="Year 8 Parents">Year 8 Parents</option>
                      <option value="Year 9 Parents">Year 9 Parents</option>
                      <option value="Year 10 Parents">Year 10 Parents</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* What We're Seeing in School */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What We're Seeing in School</label>
                  <textarea
                    name="whatWereSeeing"
                    value={alertFormData.whatWereSeeing}
                    onChange={handleAlertInputChange}
                    rows="4"
                    placeholder="Add Notes here.."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* What We're Doing in School */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What We're Doing in School</label>
                  <textarea
                    name="whatWereDoing"
                    value={alertFormData.whatWereDoing}
                    onChange={handleAlertInputChange}
                    rows="4"
                    placeholder="Add Notes here.."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* How You Can Help at Home */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How You Can Help at Home</label>
                  <textarea
                    name="howYouCanHelp"
                    value={alertFormData.howYouCanHelp}
                    onChange={handleAlertInputChange}
                    rows="4"
                    placeholder="Add Notes here.."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* Add Helpful Resources */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add Helpful Resources</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#173570] transition-colors cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      multiple
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm text-gray-600 mt-2">
                        {alertFormData.helpfulResources 
                          ? alertFormData.helpfulResources.name 
                          : "Drop files here or click to upload"}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-[180px] px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm mt-6"
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

export default SafeguardingAlerts

