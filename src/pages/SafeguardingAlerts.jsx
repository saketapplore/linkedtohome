import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function SafeguardingAlerts() {
  const [activeNav, setActiveNav] = useState('Safeguarding Alerts')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [yearGroupFilter, setYearGroupFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
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
                <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="flex items-center gap-2 px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Create New Alert</span>
              </button>
            </div>

            {/* Alerts Table */}
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
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View More Link */}
            <div className="mt-6 text-center">
              <button className="text-[#173570] hover:text-[#1a3d7a] font-medium text-sm">
                View More
              </button>
            </div>
                </section>

               {/* Contextual Alerts Section */}
               <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div className="mt-6 text-center">
              <button className="text-[#173570] hover:text-[#1a3d7a] font-medium text-sm">
                View More
              </button>
            </div>
               </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SafeguardingAlerts

