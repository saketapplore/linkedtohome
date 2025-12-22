import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function ParentProfile() {
  const [activeNav, setActiveNav] = useState('Parents')
  const [activeChildTab, setActiveChildTab] = useState('Liam Carter')

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content - Scrollable if needed */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-4 flex items-center space-x-2 text-sm">
              <button onClick={() => navigate('/parents')} className="text-gray-500 hover:text-[#173570]">
                Parents
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium">Parent Profile</span>
            </div>

            {/* Profile Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Emma Carter</h1>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#B1EFE3] text-[#00796B] text-xs font-medium rounded-full">
                    Active
                  </span>
                  <p className="text-sm text-gray-600">emma.carter@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2 text-sm font-medium text-[#173570]">
                  <svg className="w-4 h-4 text-[#173570]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-50 border border-red-300 rounded-lg hover:bg-red-100 flex items-center gap-2 text-sm font-medium text-red-600">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Suspend Account
                </button>
                <button className="px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] flex items-center gap-2 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Generate Report
                </button>
              </div>
            </div>

            {/* Parent Overview and Engagement Summary Section */}
            <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-6">
              {/* Parent Overview Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Parent Overview</h2>
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-start">
                      <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mb-2">
                        <span className="text-lg font-bold text-pink-600">EC</span>
                      </div>
                      {/* Left Column - Under Avatar */}
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Relationship</div>
                          <div className="text-sm font-semibold text-gray-900">Mother</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Joined On</div>
                          <div className="text-sm font-semibold text-gray-900">2024-04-21</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2">
                      {/* Parents Section */}
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Parents</div>
                        <div className="text-sm font-semibold text-gray-900">Emma Carter</div>
                      </div>
                      {/* Right Column */}
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Contact Number</div>
                          <div className="text-sm font-semibold text-gray-900">+1-555-123-4567</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Address</div>
                          <div className="text-sm font-semibold text-gray-900">123, XYZ Street, Anytown, USA</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Last Login</div>
                          <div className="text-sm font-semibold text-gray-900">2024-07-11</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Summary Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Engagement Summary</h2>
                  <div className="space-y-1 mb-3">
                    <div className="bg-red-50 p-1 flex items-center justify-between rounded-lg">
                      <span className="text-xs text-gray-600 mb-0.5">Alerts Viewed</span>
                      <span className="text-xl font-bold text-gray-900">112</span>
                    </div>
                    <div className="bg-red-50 p-1 flex items-center justify-between rounded-lg">
                      <div className="text-xs text-gray-600 mb-0.5">Resources Accessed</div>
                      <div className="text-xl font-bold text-gray-900">5</div>
                    </div>
                    <div className="bg-red-50 p-1 flex items-center justify-between rounded-lg">
                      <div className="text-xs text-gray-600 mb-0.5">Webinars Joined</div>
                      <div className="text-xl font-bold text-gray-900">112</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-gray-600">Overall Engagement</span>
                      <span className="text-xs font-medium text-gray-900">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#08A0AF] h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
            </section>

            {/* Two Column Layout for Remaining Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Linked Children Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Linked Children</h2>
                  <div className="flex border-b border-gray-200 mb-4">
                    <button
                      onClick={() => setActiveChildTab('Liam Carter')}
                      className={`px-4 py-2 text-sm font-medium relative ${
                        activeChildTab === 'Liam Carter'
                          ? 'text-[#08A0AF]'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Liam Carter
                      {activeChildTab === 'Liam Carter' && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08A0AF]"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveChildTab('Olivia Carter')}
                      className={`px-4 py-2 text-sm font-medium relative ${
                        activeChildTab === 'Olivia Carter'
                          ? 'text-[#08A0AF]'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Olivia Carter
                      {activeChildTab === 'Olivia Carter' && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08A0AF]"></div>
                      )}
                    </button>
                  </div>
                  {activeChildTab === 'Liam Carter' && (
                    <div className="flex flex-row items-center">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Student ID</div>
                        <div className="text-sm font-semibold text-gray-900">STU12345</div>
                      </div>
                      <div className="ml-14">
                        <div className="text-xs text-gray-500 mb-1">Year Group</div>
                        <div className="text-sm font-semibold text-gray-900">Year 7</div>
                      </div>
                    </div>
                  )}
                  {activeChildTab === 'Olivia Carter' && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Student ID</div>
                        <div className="text-sm font-semibold text-gray-900">STU12346</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Year Group</div>
                        <div className="text-sm font-semibold text-gray-900">Year 8</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Activity & Intervention Timeline Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity & Intervention Timeline</h2>
                  <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 border-l-2 border-dashed" style={{ borderColor: '#B1EFE3' }}></div>
                    
                    {/* Timeline Items */}
                    <div className="space-y-6">
                      {[
                        { date: '2024-06-22', activity: 'Alert Viewed' },
                        { date: '2024-06-22', activity: 'Intervention Sent' },
                        { date: '2024-06-22', activity: 'School Follow-up' },
                        { date: '2024-06-22', activity: 'Alert Viewed' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 relative">
                          {/* Timeline Node with Icon */}
                          <div className="relative z-10 w-8 h-8 rounded-full bg-[#B1EFE3] flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#08A0AF]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div className="flex-1 pt-1">
                            <div className="text-sm font-bold text-gray-700 mb-1">{item.activity}</div>
                            <div className="text-xs text-gray-500">{item.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">

                {/* Queries Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Queries</h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900 mb-2">I have a question about something in school</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">2024-06-22</span>
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          Open
                        </button>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900 mb-2">I have a question about something in school</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">2024-06-22</span>
                        <button className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded">
                          Closed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Send Interventions Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Send Interventions</h2>
                  <div className="space-y-4">
                    <textarea
                      placeholder="Add Notes here.."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none"
                      rows="4"
                    ></textarea>
                    <button className="w-full bg-[#173570] text-white py-2 px-4 rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm">
                      Add Note
                    </button>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-900 mb-2">Intervention by Mr. Davis</div>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile

