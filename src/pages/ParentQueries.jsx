import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function ParentQueries() {
  const [activeNav, setActiveNav] = useState('Parent Queries')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [queryTypeFilter, setQueryTypeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [schoolResponse, setSchoolResponse] = useState('')
  const [markAsResolved, setMarkAsResolved] = useState(false)
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

  const queriesData = [
    { 
      id: 1, 
      parentName: 'Sophia Carter', 
      queryType: 'Question', 
      dateSubmitted: '2025-09-23', 
      status: 'New',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'EC',
      displayDate: '2025-05-24'
    },
    { 
      id: 2, 
      parentName: 'Noah Foster', 
      queryType: 'Concern', 
      dateSubmitted: '2025-09-23', 
      status: 'In progress',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'NF',
      displayDate: '2025-05-24'
    },
    { 
      id: 3, 
      parentName: 'Kate Williams', 
      queryType: 'Information', 
      dateSubmitted: '2025-09-23', 
      status: 'Resolved',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'KW',
      displayDate: '2025-05-24'
    },
    { 
      id: 4, 
      parentName: 'Kate Williams', 
      queryType: 'Support', 
      dateSubmitted: '2025-09-23', 
      status: 'Sent',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'KW',
      displayDate: '2025-05-24'
    },
    { 
      id: 5, 
      parentName: 'Kate Williams', 
      queryType: 'Support', 
      dateSubmitted: '2025-09-23', 
      status: 'Sent',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'KW',
      displayDate: '2025-05-24'
    },
    { 
      id: 6, 
      parentName: 'Kate Williams', 
      queryType: 'Support', 
      dateSubmitted: '2025-09-23', 
      status: 'Sent',
      queryText: 'I have a concern I\'d like to share',
      childLinked: 'Jason Carter',
      yearGroup: '7 years',
      parentInitials: 'KW',
      displayDate: '2025-05-24'
    }
  ]

  const handleQueryClick = (query) => {
    setSelectedQuery(query)
    setSchoolResponse('')
    setMarkAsResolved(false)
  }

  const handleDone = () => {
    setSelectedQuery(null)
    setSchoolResponse('')
    setMarkAsResolved(false)
  }

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'New':
        return { backgroundColor: '#4FC3F7', color: '#fff' }
      case 'In progress':
        return { backgroundColor: '#FFAB91', color: '#000' }
      case 'Resolved':
        return { backgroundColor: '#54c3c6', color: '#fff' }
      case 'Sent':
        return { backgroundColor: '#FFAB91', color: '#000' }
      default:
        return { backgroundColor: '#E0E0E0', color: '#000' }
    }
  }

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Parent Queries</h1>
              <p className="text-sm text-gray-600">
                View and manage parent accounts, connections, and activity.
              </p>
            </section>

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

              {/* Query Type Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['queryType'] = el}>
                <button
                  onClick={() => toggleDropdown('queryType')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-sm text-gray-700">Query Type</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'queryType' && (
                  <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={() => {
                        setQueryTypeFilter('All')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setQueryTypeFilter('Question')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Question
                    </button>
                    <button
                      onClick={() => {
                        setQueryTypeFilter('Concern')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Concern
                    </button>
                    <button
                      onClick={() => {
                        setQueryTypeFilter('Information')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Information
                    </button>
                    <button
                      onClick={() => {
                        setQueryTypeFilter('Support')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Support
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
                        setStatusFilter('New')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      New
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('In progress')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      In progress
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('Resolved')
                        setOpenDropdown(null)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Resolved
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
                  </div>
                )}
              </div>
            </div>

            {/* Queries Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead>
                    <tr style={{ backgroundColor: '#B1EFE3' }}>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Parent Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Query Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date Submitted</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {queriesData.map((query) => (
                      <tr 
                        key={query.id} 
                        className={`hover:bg-gray-50 ${selectedQuery?.id === query.id ? 'bg-blue-50' : ''}`}
                      >
                        <td 
                          className="px-4 py-4 text-sm text-gray-900 font-medium cursor-pointer"
                          onClick={() => handleQueryClick(query)}
                        >
                          {query.parentName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{query.queryType}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{query.dateSubmitted}</td>
                        <td className="px-4 py-4">
                          <span 
                            className="inline-flex px-3 py-1 text-xs font-medium rounded-full"
                            style={getStatusBadgeStyle(query.status)}
                          >
                            {query.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleQueryClick(query)
                            }}
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
            </div>
          </div>
        </section>
      </div>

      {/* Query Detail Modal */}
      {selectedQuery && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleDone}
          ></div>
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="bg-white shadow-xl w-full max-w-md h-full overflow-y-auto relative">
              {/* Close Button - Outside form container */}
              <button
                onClick={handleDone}
                className="absolute -left-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#FFB6C1' }}>
                    {selectedQuery.parentInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{selectedQuery.parentName}</div>
                    <div className="text-sm text-gray-600">{selectedQuery.displayDate}</div>
                  </div>
                </div>
                <span 
                  className="inline-flex px-3 py-1 text-xs font-medium rounded-full"
                  style={getStatusBadgeStyle(selectedQuery.status)}
                >
                  {selectedQuery.status}
                </span>
              </div>

              {/* Modal Body */}
              <form className="p-6 space-y-4">
                {/* Query Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Query Type</label>
                  <input
                    type="text"
                    value={selectedQuery.queryText}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm bg-gray-50"
                  />
                </div>

                {/* Child Linked */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Child Linked</label>
                  <input
                    type="text"
                    value={selectedQuery.childLinked}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm bg-gray-50"
                  />
                </div>

                {/* Year Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year Group</label>
                  <input
                    type="text"
                    value={selectedQuery.yearGroup}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm bg-gray-50"
                  />
                </div>

                {/* School Response */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Response</label>
                  <textarea
                    value={schoolResponse}
                    onChange={(e) => setSchoolResponse(e.target.value)}
                    placeholder="Type your response here...."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none"
                    rows="4"
                  />
                </div>

                {/* Send Reply Button */}
                <button
                  type="button"
                  className="w-[150px] ml-60 px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm"
                >
                  Send Reply
                </button>

                {/* Mark as resolved Checkbox */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={markAsResolved}
                      onChange={(e) => setMarkAsResolved(e.target.checked)}
                      className="w-4 h-4 text-[#173570] border-gray-300 rounded focus:ring-[#173570]"
                    />
                    <span className="text-sm text-gray-700">Mark as resolved</span>
                  </label>
                </div>

                {/* Done Button */}
                <button
                  type="button"
                  onClick={handleDone}
                  className="w-full px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm"
                >
                  Done
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ParentQueries

