import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function EmployeeProfile() {
  const [activeNav, setActiveNav] = useState('Employee Management')
  const [adminNotes, setAdminNotes] = useState('')
  const [accessPermissions, setAccessPermissions] = useState({
    'Access 1 Name': true,
    'Lara@gmail.com': false,
    'Lara@gmail.com 2': false
  })

  const handleToggleAccess = (key) => {
    setAccessPermissions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleAddNote = (e) => {
    e.preventDefault()
    // Handle note submission
    console.log('Note added:', adminNotes)
    setAdminNotes('')
  }

  const recentActivityData = [
    { timestamp: '2025-10-10 10:30 pm', action: 'Logged In', module: 'System', description: 'Limited (Class-level' },
    { timestamp: '2025-10-10 10:30 pm', action: 'Logged In', module: 'Parents', description: 'Full' },
    { timestamp: '2025-10-10 10:30 pm', action: 'Logged In', module: 'Students', description: 'Full' },
    { timestamp: '2025-10-10 10:30 pm', action: 'Logged In', module: 'Students', description: 'Full' },
    { timestamp: '2025-10-10 10:30 pm', action: 'Logged In', module: 'Admin', description: 'Partial (Parent Queries)' }
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
            {/* Breadcrumbs */}
            <div className="mb-4">
              <span className="text-sm text-gray-600">Parents / Employee Profile</span>
            </div>

            {/* Profile Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Lara Williams</h1>
                <div className="flex items-center gap-3">
                  <span 
                    className="inline-flex px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: '#08A0AF', color: '#fff' }}
                  >
                    Active
                  </span>
                  <span className="text-sm text-gray-600">emma.carter@example.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Edit Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-[#173570] rounded-lg hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-sm font-medium">Edit</span>
                </button>
                {/* Suspend Account Button */}
                <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="text-sm font-medium">Suspend Account</span>
                </button>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Profile Information Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0" style={{ backgroundColor: '#FFAB91' }}>
                      EC
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Name</div>
                        <div className="text-sm font-semibold text-gray-900">Emma Carter</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <div className="text-sm font-semibold text-gray-900">Lara@gmail.com</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Designation</div>
                        <div className="text-sm font-semibold text-gray-900">Admin</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Last Login</div>
                        <div className="text-sm font-semibold text-gray-900">2024-07-11</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Access Level</div>
                        <div className="text-sm font-semibold text-gray-900">Full Access</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Admin notes Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-black mb-4" style={{padding: '8px 12px', borderRadius: '4px', display: 'inline-block' }}>Add Admin notes</h2>
                  <form onSubmit={handleAddNote} className="mt-4">
                    <textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add Notes here.."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent text-sm resize-none mb-4"
                      rows="4"
                    />
                    <button
                      type="submit"
                      className="w-[150px] px-4 py-2 bg-[#173570] text-white rounded-lg hover:bg-[#1a3d7a] transition-colors font-medium text-sm"
                    >
                      Add Note
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Access Permission Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Access Permission</h2>
                  <div className="space-y-4">
                    {Object.entries(accessPermissions).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">{key}</span>
                        <button
                          onClick={() => handleToggleAccess(key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-[#173570]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: '#B1EFE3' }}>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Timestamp</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Module</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentActivityData.map((activity, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm text-gray-900">{activity.timestamp}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{activity.action}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{activity.module}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{activity.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default EmployeeProfile

