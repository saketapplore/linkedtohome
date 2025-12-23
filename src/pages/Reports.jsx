import React, {useState} from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Reports() {
    const [activeNav, setActiveNav] = useState('Reports')
    const [timeRange, setTimeRange] = useState('Last 30 days')
    const [graphTimeRange, setGraphTimeRange] = useState('This week')
    const [showReportForm, setShowReportForm] = useState(false)
    const [reportForm, setReportForm] = useState({
        title: '',
        range: 'Last 30 days',
        includeSections: {
            engagement: true,
            safeguarding: true,
            staff: true
        }
    })

    // Sample data for Engagement Over Time graph
    const engagementData = [
        {
            date: 'Mon',
            value: 45
        },
        {
            date: 'Tue',
            value: 52
        },
        {
            date: 'Wed',
            value: 48
        },
        {
            date: 'Thu',
            value: 60
        }, {
            date: 'Fri',
            value: 55
        }, {
            date: 'Sat',
            value: 50
        }, {
            date: 'Sun',
            value: 47
        }
    ]

    return (
        <div className="h-screen flex overflow-hidden bg-gray-50">
            <Sidebar activeNav={activeNav}
                setActiveNav={setActiveNav}/> {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header/> {/* Main Content - Scrollable if needed */}
                <section className="flex-1 overflow-y-auto bg-white">
                    <section className="p-6">
                        {/* Header Section */}
                        <div className="mb-6 flex items-start justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
                                <p className="text-sm text-gray-600">
                                    View insights on parental engagement, safeguarding trends, and wellbeing data.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Time Range Dropdown */}
                                <div className="relative">
                                    <select value={timeRange}
                                        onChange={
                                            (e) => setTimeRange(e.target.value)
                                        }
                                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent">
                                        <option value="Last 7 days">Last 7 days</option>
                                        <option value="Last 30 days">Last 30 days</option>
                                        <option value="Last 90 days">Last 90 days</option>
                                        <option value="Last year">Last year</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </div>
                                {/* Generate Report Button */}
                                <button
                                    onClick={() => setShowReportForm(true)}
                                    className="px-4 py-2 bg-[#173570] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d7a] transition-colors">
                                    Generate Report
                                </button>
                            </div>
                        </div>

                        {/* Metric Cards */}
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {/* Card 1 - Login Rate */}
                            <div className="bg-[#E0F2F1] rounded-lg p-6 shadow-sm">
                                <div className="flex items-start mb-4">
                                    <img src="/images/greenlogo.png" alt="Login Rate" className="w-12 h-12 object-contain"/>
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-[#00796B] mb-1">150</div>
                                    <div className="text-sm text-[#5C5C5C]">Login Rate</div>
                                </div>
                            </div>

                            {/* Card 2 - Avg. Content Viewed */}
                            <div className="bg-[#FFECDC] rounded-lg p-6 shadow-sm">
                                <div className="flex items-start mb-4">
                                    <img src="/images/orangelogo.png" alt="Content Viewed" className="w-12 h-12 object-contain"/>
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-[#333333] mb-1">45</div>
                                    <div className="text-sm text-[#5C5C5C]">Avg. Content Viewed</div>
                                </div>
                            </div>

                            {/* Card 3 - Engagement Growth */}
                            <div className="bg-[#E0F2F1] rounded-lg p-6 shadow-sm">
                                <div className="flex items-start mb-4">
                                    <img src="/images/greenlogo.png" alt="Engagement Growth" className="w-12 h-12 object-contain"/>
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-[#00796B] mb-1">10%</div>
                                    <div className="text-sm text-[#5C5C5C]">Engagement Growth</div>
                                </div>
                            </div>

                            {/* Card 4 - Active Year Groups */}
                            <div className="bg-[#FFECDC] rounded-lg p-6 shadow-sm">
                                <div className="flex items-start mb-4">
                                    <img src="/images/orangelogo.png" alt="Active Year Groups" className="w-12 h-12 object-contain"/>
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-[#333333] mb-1">150</div>
                                    <div className="text-sm text-[#5C5C5C]">Active Year Groups</div>
                                </div>
                            </div>
                        </section>

                        {/* Engagement Over Time Graph */}
                        <section className="bg-white rounded-lg p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Engagement Over Time</h2>
                                {/* Graph Time Range Dropdown */}
                                <div className="relative">
                                    <select value={graphTimeRange}
                                        onChange={
                                            (e) => setGraphTimeRange(e.target.value)
                                        }
                                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent">
                                        <option value="This week">This week</option>
                                        <option value="This month">This month</option>
                                        <option value="This year">This year</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={engagementData}
                                        margin={
                                            {
                                                top: 10,
                                                right: 10,
                                                left: 0,
                                                bottom: 0
                                            }
                                    }>
                                        <defs>
                                            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#B1EFE3"
                                                    stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#B1EFE3"
                                                    stopOpacity={0.1}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                                        <XAxis dataKey="date" stroke="#6B7280"
                                            tick={
                                                {fontSize: 12}
                                            }/>
                                        <YAxis stroke="#6B7280"
                                            tick={
                                                {fontSize: 12}
                                            }
                                            domain={
                                                [0, 100]
                                            }
                                            ticks={
                                                [
                                                    0,
                                                    25,
                                                    50,
                                                    75,
                                                    100
                                                ]
                                            }/>
                                        <Tooltip contentStyle={
                                                {
                                                    backgroundColor: 'white',
                                                    border: '1px solid #E5E7EB',
                                                    borderRadius: '8px',
                                                    padding: '8px'
                                                }
                                            }
                                            formatter={
                                                (value) => [`${value}%`, 'Engagement']
                                            }/>
                                        <Area type="monotone" dataKey="value" stroke="#08A0AF"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorEngagement)"/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        {/* Alerts Insights Section */}
                        <section className="mt-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Alerts Insights</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
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
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#08A0AF'
                                                    }
                                            }></div>
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
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#B1EFE3'
                                                    }
                                            }></div>
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
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#FFAB91'
                                                    }
                                            }></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Top Contextual Alerts */}
                            <div className="bg-white rounded-lg p-6 shadow-xl">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Top Contextual Alerts</h2>
                                <div className="space-y-10">
                                    {/* Alert Item 1 */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                                            <div className="text-right">
                                                <div className="text-xs text-gray-600">Date: August 25 2022</div>
                                                <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#08A0AF'
                                                    }
                                            }></div>
                                        </div>
                                    </div>

                                    {/* Alert Item 2 */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                                            <div className="text-right">
                                                <div className="text-xs text-gray-600">Date: August 25 2022</div>
                                                <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#B1EFE3'
                                                    }
                                            }></div>
                                        </div>
                                    </div>

                                    {/* Alert Item 3 */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium mb-6 text-gray-900">Bullying Incident</span>
                                            <div className="text-right">
                                                <div className="text-xs text-gray-600">Date: August 25 2022</div>
                                                <div className="text-sm font-semibold mt-4 text-gray-900">48%</div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="h-2 rounded-full"
                                                style={
                                                    {
                                                        width: '48%',
                                                        backgroundColor: '#FFAB91'
                                                    }
                                            }></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </section>

                        {/* Most Active Parent Demographic Section */}
                        <section className="mt-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Active Parent Demographic</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                            {/* Left: Most Engaged Year Groups */}
                            <div className="bg-white rounded-lg p-6 shadow-xl">
                                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Most Engaged Year Groups</h2>
                                <div className="space-y-4">
                                    {/* Year 9 - 80% */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 9</span>
                                        <div className="flex-1 bg-gray-200 rounded h-12 relative">
                                            <div className="h-12 rounded flex items-center justify-end pr-2"
                                                style={
                                                    {
                                                        width: '80%',
                                                        backgroundColor: '#08A0AF'
                                                    }
                                            }>
                                                <span className="text-xs font-semibold text-white">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Year 9 - 60% */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 9</span>
                                        <div className="flex-1 bg-gray-200 rounded h-12 relative">
                                            <div className="h-12 rounded flex items-center justify-end pr-2"
                                                style={
                                                    {
                                                        width: '60%',
                                                        backgroundColor: '#B1EFE3'
                                                    }
                                            }>
                                                <span className="text-xs font-semibold text-gray-900">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Year 9 - 40% */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 9</span>
                                        <div className="flex-1 bg-gray-200 rounded h-12 relative">
                                            <div className="h-12 rounded flex items-center justify-end pr-2"
                                                style={
                                                    {
                                                        width: '40%',
                                                        backgroundColor: '#FFAB91'
                                                    }
                                            }>
                                                <span className="text-xs font-semibold text-white">40%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Year 9 - 20% */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-900 flex-shrink-0">Year 9</span>
                                        <div className="flex-1 bg-gray-200 rounded h-12 relative">
                                            <div className="h-12 rounded flex items-center justify-end pr-2"
                                                style={
                                                    {
                                                        width: '20%',
                                                        backgroundColor: '#FFCCBC'
                                                    }
                                            }>
                                                <span className="text-xs font-semibold text-gray-900">20%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Top 5 Active Parents */}
                            <div className="bg-white rounded-lg p-6 shadow-xl">
                                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-4 mb-4">Top 5 Active Parents</h2>
                                <div className="space-y-4">
                                    {/* Parent Entry 1 */}
                                    <div className="pb-3">
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

                                    {/* Parent Entry 4 */}
                                    <div className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">Nicole James</div>
                                                <div className="text-xs text-[#173570] mt-1">Child: Sara James</div>
                                            </div>
                                            <div className="text-xs text-gray-600">Age 4 yrs</div>
                                        </div>
                                    </div>

                                    {/* Parent Entry 5 */}
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
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>S.no.</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Employee Name</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Email</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Role</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Access Level</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Status</th>
                                                <th className="text-left py-3 px-2" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Action</th>
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
                                                    <span className="px-2 text-sm text-gray-600">...</span>
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
                                                    <span className="px-2 text-sm text-gray-600">...</span>
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
                                                    <span className="px-2 text-sm text-gray-600">...</span>
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
                                                    <span className="px-2 text-sm text-gray-600">...</span>
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
                                                    <span className="px-2 text-sm text-gray-600">...</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </section>


                </section>

                {/* Generate Report Form Modal */}
                {showReportForm && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
                        <div className="w-full max-w-xl rounded-xl bg-white shadow-2xl">
                            <div className="flex items-center justify-between border-b px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">Generate Report</h3>
                                <button
                                    onClick={() => setShowReportForm(false)}
                                    className="text-gray-500 hover:text-gray-700">
                                    ✕
                                </button>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    setShowReportForm(false)
                                }}
                                className="space-y-4 px-6 py-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Report title</label>
                                    <input
                                        required
                                        value={reportForm.title}
                                        onChange={(e) => setReportForm((prev) => ({...prev, title: e.target.value}))}
                                        placeholder="e.g. Engagement overview"
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#173570] focus:outline-none focus:ring-2 focus:ring-[#173570]/30"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Date range</label>
                                    <select
                                        value={reportForm.range}
                                        onChange={(e) => setReportForm((prev) => ({...prev, range: e.target.value}))}
                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-900 focus:border-[#173570] focus:outline-none focus:ring-2 focus:ring-[#173570]/30">
                                        <option value="Last 7 days">Last 7 days</option>
                                        <option value="Last 30 days">Last 30 days</option>
                                        <option value="Last 90 days">Last 90 days</option>
                                        <option value="Last year">Last year</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p className="text-sm font-medium text-gray-700">Include sections</p>
                                    {[
                                        {key: 'engagement', label: 'Engagement Overview'},
                                        {key: 'safeguarding', label: 'Safeguarding Insights'},
                                        {key: 'staff', label: 'Staff Activity'}
                                    ].map((item) => (
                                        <label key={item.key} className="flex items-center gap-3 text-sm text-gray-800">
                                            <input
                                                type="checkbox"
                                                checked={reportForm.includeSections[item.key]}
                                                onChange={(e) =>
                                                    setReportForm((prev) => ({
                                                        ...prev,
                                                        includeSections: {
                                                            ...prev.includeSections,
                                                            [item.key]: e.target.checked
                                                        }
                                                    }))
                                                }
                                                className="h-4 w-4 rounded border-gray-300 text-[#173570] focus:ring-[#173570]"/>
                                            {item.label}
                                        </label>
                                    ))}
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowReportForm(false)}
                                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-lg bg-[#173570] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a3d7a]">
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Reports
