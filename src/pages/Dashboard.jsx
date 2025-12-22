import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview')

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content - Scrollable if needed */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {/* Greeting Section */}
            <section className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Good Morning, Oakwood High School 👋</h1>
              <p className="text-sm text-gray-600">
                Here's a snapshot of your school's engagement and safeguarding updates.
              </p>
            </section>

            {/* Cards Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Card 1 - Total Parents */}
            <div className="bg-[#E0F2F1] rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <img 
                  src="/images/greenlogo.png" 
                  alt="Total Parents" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-[#00796B] mb-1">150</div>
                <div className="text-sm text-[#5C5C5C]">Total Parents</div>
              </div>
            </div>

            {/* Card 2 - Alerts Sent */}
            <div className="bg-[#FFECDC] rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <img 
                  src="/images/orangelogo.png" 
                  alt="Alerts Sent" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-[#333333] mb-1">45</div>
                <div className="text-sm text-[#5C5C5C]">Alerts Sent</div>
              </div>
            </div>

            {/* Card 3 - Active Employees */}
            <div className="bg-[#E0F2F1] rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <img 
                  src="/images/greenlogo.png" 
                  alt="Active Employees" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-[#00796B] mb-1">230</div>
                <div className="text-sm text-[#5C5C5C]">Active Employees</div>
              </div>
            </div>

            {/* Card 4 - Parent Engagement */}
            <div className="bg-[#FFECDC] rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <img 
                  src="/images/orangelogo.png" 
                  alt="Parent Engagement" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-[#333333] mb-1">150</div>
                <div className="text-sm text-[#5C5C5C]">Parent Engagement</div>
              </div>
            </div>
          </section>

            {/* Parent Engagement Trends and Recently Sent Alerts Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Left: Parent Engagement Trends */}
               <div className="bg-[#ffffff] rounded-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Parent Engagement Trends</h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { date: 'Apr 10', value: 55 },
                    { date: 'Apr 11', value: 28 },
                    { date: 'Apr 12', value: 60 },
                    { date: 'Apr 13', value: 70 },
                    { date: 'Apr 14', value: 65 },
                    { date: 'Apr 15', value: 90 },
                    { date: 'Apr 16', value: 70 }
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbf3d1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#fbf3d1" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '8px'
                    }}
                    formatter={(value) => [`${value}%`, 'Engagement']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#fcf5db" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorYellow)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
                </div>

                 {/* Right: Recently Sent Alerts */}
                <div className="bg-[#ffffff] rounded-lg p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recently Sent Alerts</h2>
              <button 
                className="px-4 py-2 bg-[#173570] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d7a] transition-colors flex items-center space-x-2"
                style={{ borderRadius: '6px' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add New Alert</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">S.no.</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Title</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Audience</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Views</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-600">1.</td>
                    <td className="py-3 px-2 text-sm text-gray-900">Cyberbullying Awareness</td>
                    <td className="py-3 px-2 text-sm text-gray-600">All Parents</td>
                    <td className="py-3 px-2 text-sm text-gray-600">250</td>
                    <td className="py-3 px-2 text-sm text-[#4FC3F7]">Active</td>
                    <td className="py-3 px-2 text-sm">
                      <button className="text-[#173570] hover:underline font-medium">View</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-600">2.</td>
                    <td className="py-3 px-2 text-sm text-gray-900">Cyberbullying Awareness</td>
                    <td className="py-3 px-2 text-sm text-gray-600">Year 9 Parents</td>
                    <td className="py-3 px-2 text-sm text-gray-600">20</td>
                    <td className="py-3 px-2 text-sm text-[#FF9800]">Scheduled</td>
                    <td className="py-3 px-2 text-sm">
                      <button className="text-[#173570] hover:underline font-medium">View</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-600">3.</td>
                    <td className="py-3 px-2 text-sm text-gray-900">Cyberbullying Awareness</td>
                    <td className="py-3 px-2 text-sm text-gray-600">All Parents</td>
                    <td className="py-3 px-2 text-sm text-gray-600">180</td>
                    <td className="py-3 px-2 text-sm text-red-500">Paused</td>
                    <td className="py-3 px-2 text-sm">
                      <button className="text-[#173570] hover:underline font-medium">View</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-600">4.</td>
                    <td className="py-3 px-2 text-sm text-gray-900">Cyberbullying Awareness</td>
                    <td className="py-3 px-2 text-sm text-gray-600">All Parents</td>
                    <td className="py-3 px-2 text-sm text-gray-600">180</td>
                    <td className="py-3 px-2 text-sm text-red-500">Paused</td>
                    <td className="py-3 px-2 text-sm">
                      <button className="text-[#173570] hover:underline font-medium">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
                </div>
          </section>

          {/* Top Safeguarding Trends and Most Engaged Year Groups Section */}
          <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-6">
            {/* Left: Top Safeguarding Trends */}
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Top Safeguarding Trends</h2>
              <div className="space-y-10">
                {/* Trend Item 1 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Date: August 25 2022</div>
                      <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: '48%', backgroundColor: '#08A0AF' }}
                    ></div>
                  </div>
                </div>

                {/* Trend Item 2 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Date: August 25 2022</div>
                      <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: '48%', backgroundColor: '#B1EFE3' }}
                    ></div>
                  </div>
                </div>

                {/* Trend Item 3 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Date: August 25 2022</div>
                      <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: '48%', backgroundColor: '#FFAB91' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Most Engaged Year Groups */}
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Most Engaged Year Groups</h2>
              <div className="space-y-4">
                {/* Year 7 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 7</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-12 relative">
                    <div 
                      className="h-12 rounded flex items-center justify-end pr-2" 
                      style={{ width: '100%', backgroundColor: '#08A0AF' }}
                    >
                      <span className="text-xs font-semibold text-white">80%</span>
                    </div>
                  </div>
                </div>
                {/* Year 8 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 8</span>
                  <div className="flex-1 rounded-full h-12 relative">
                    <div 
                      className="h-12 rounded flex items-center justify-end pr-2" 
                      style={{ width: '80%', backgroundColor: '#B1EFE3' }}
                    >
                      <span className="text-xs font-semibold text-white">80%</span>
                    </div>
                  </div>
                </div>
                {/* Year 9 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 9</span>
                  <div className="flex-1 rounded-full h-12 relative">
                    <div 
                      className="h-12 rounded flex items-center justify-end pr-2" 
                      style={{ width: '60%', backgroundColor: '#FFAB91' }}
                    >
                      <span className="text-xs font-semibold text-white">80%</span>
                    </div>
                  </div>
                </div>
                {/* Year 10 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 10</span>
                  <div className="flex-1 rounded-full h-12 relative">
                    <div 
                      className="h-12 rounded flex items-center justify-end pr-2" 
                      style={{ width: '40%', backgroundColor: '#FFCCBC' }}
                    >
                      <span className="text-xs font-semibold text-white">80%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Recently Parents Added and Top 5 Active Parents Section */}
          <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-6">
            {/* Left: Recently Parents Added */}
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recently Parents Added</h2>
                <a href="#" className="text-sm text-[#173570] hover:underline font-medium">View All</a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">S.no.</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Parent Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Year Group</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">1.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Sophie James</td>
                      <td className="py-3 px-2 text-sm text-gray-600">abc@gmail.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Year 7</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">2.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Sophie James</td>
                      <td className="py-3 px-2 text-sm text-gray-600">abc@gmail.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Year 7</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">3.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Sophie James</td>
                      <td className="py-3 px-2 text-sm text-gray-600">abc@gmail.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Year 7</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">4.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Sophie James</td>
                      <td className="py-3 px-2 text-sm text-gray-600">abc@gmail.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Year 7</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Top 5 Active Parents */}
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-4 mb-4">Top 5 Active Parents</h2>
              <div className="space-y-4">
                {/* Parent Entry 1 */}
                <div className=" pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Nicole James</div>
                      <div className="text-xs text-[#173570] mt-1">Child: Sara James</div>
                    </div>
                    <div className="text-xs text-gray-600">Age 4 yrs</div>
                  </div>
                </div>

                {/* Parent Entry 2 */}
                <div className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Nicole James</div>
                      <div className="text-xs text-[#173570] mt-1">Child: Sara James</div>
                    </div>
                    <div className="text-xs text-gray-600">Age 4 yrs</div>
                  </div>
                </div>

                {/* Parent Entry 3 */}
                <div className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Nicole James</div>
                      <div className="text-xs text-[#173570] mt-1">Child: Sara James</div>
                    </div>
                    <div className="text-xs text-gray-600">Age 4 yrs</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Staff Activity Overview Section */}
          <section className="mt-6">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Staff Activity Overview</h2>
                <a href="#" className="text-sm text-[#173570] hover:underline font-medium">View All</a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#B1EFE3' }}>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">S.no.</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Employee Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Role</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Access Level</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">1.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Emma Carter</td>
                      <td className="py-3 px-2 text-sm text-gray-600">emma.carter@example.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Admin</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Limited (Class-level)</td>
                      <td className="py-3 px-2 text-sm text-gray-600">2 days ago</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">2.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Emma Carter</td>
                      <td className="py-3 px-2 text-sm text-gray-600">emma.carter@example.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Admin</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Full</td>
                      <td className="py-3 px-2 text-sm text-gray-600">2 days ago</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">3.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Emma Carter</td>
                      <td className="py-3 px-2 text-sm text-gray-600">emma.carter@example.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Admin</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Full</td>
                      <td className="py-3 px-2 text-sm text-gray-600">2 days ago</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">4.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Emma Carter</td>
                      <td className="py-3 px-2 text-sm text-gray-600">emma.carter@example.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Counsellor</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Full</td>
                      <td className="py-3 px-2 text-sm text-gray-600">2 days ago</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-600">4.</td>
                      <td className="py-3 px-2 text-sm text-gray-900">Emma Carter</td>
                      <td className="py-3 px-2 text-sm text-gray-600">emma.carter@example.com</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Counsellor</td>
                      <td className="py-3 px-2 text-sm text-gray-600">Full</td>
                      <td className="py-3 px-2 text-sm text-gray-600">2 days ago</td>
                      <td className="py-3 px-2 text-sm">
                        <button className="text-[#173570] hover:underline font-medium">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

