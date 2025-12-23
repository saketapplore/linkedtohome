import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function AccountSettings() {
    const [activeNav, setActiveNav] = useState('')
    const [activeTab, setActiveTab] = useState('Account Info')
    const [formData, setFormData] = useState({
        schoolName: 'Greenfield High School',
        email: 'info@greenfieldhigh.org',
        phone: 'Greenfield High School',
        addressLine1: 'Value',
        city: 'London',
        country: 'United Kingdom',
        schoolType: 'Secondary'
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <div className="h-screen flex overflow-hidden bg-gray-50">
            <Sidebar activeNav={activeNav}
                setActiveNav={setActiveNav}/> {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header/> {/* Main Content - Scrollable if needed */}
                <div className="flex-1 overflow-y-auto bg-white">
                    <div className="p-6">
                        {/* Breadcrumbs */}
                        <div className="mb-4">
                            {/* <span className="text-sm text-gray-600">Account Settings / Account</span> */} </div>

                        {/* Page Title */}
                        <h1 className="text-2xl font-light text-gray-500 mb-6">Account Settings / Account</h1>

                        {/* Tabs */}
                        <div className="flex space-x-1 mb-6">
                            <button onClick={
                                    () => setActiveTab('Account Info')
                                }
                                className={
                                    `px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors ${
                                        activeTab === 'Account Info' ? 'bg-[#173570] text-white rounded' : 'text-gray-600 hover:text-gray-900'
                                    }`
                            }>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                Account Info
                            </button>
                            <button onClick={
                                    () => setActiveTab('Billing & Plans')
                                }
                                className={
                                    `px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors ${
                                        activeTab === 'Billing & Plans' ? 'bg-[#173570] text-white rounded-t-lg' : 'text-gray-600 hover:text-gray-900'
                                    }`
                            }>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                Billing & Plans
                            </button>
                        </div>

                        {/* Account Info Tab Content */}
                        {activeTab === 'Account Info' && (
                            <>
                        {/* School Information Card */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">School Information</h2>
                                <p className="text-sm text-gray-600">Update your school's general details.</p>
                            </div>

                            {/* Profile Photo Upload */}
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                                        <img src="/images/avtar.png" alt="School Logo" className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex gap-3 mb-2">
                                        <button className="px-4 py-2 bg-[#173570] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d7a] transition-colors">
                                            Upload new photo
                                        </button>
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                            Reset
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* School Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            School Name
                                        </label>
                                        <input type="text" name="schoolName"
                                            value={
                                                formData.schoolName
                                            }
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent"/>
                                    </div>

                                    {/* Official School Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Official School Email
                                        </label>
                                        <div className="relative">
                                            <input type="email" name="email"
                                                value={
                                                    formData.email
                                                }
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent"/>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input type="text" name="phone"
                                            value={
                                                formData.phone
                                            }
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent"/>
                                    </div>

                                    {/* Address Line 1 */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address Line 1
                                        </label>
                                        <input type="text" name="addressLine1"
                                            value={
                                                formData.addressLine1
                                            }
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent"/>
                                    </div>

                                    {/* City / Town */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City / Town
                                        </label>
                                        <input type="text" name="city"
                                            value={
                                                formData.city
                                            }
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent"/>
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <div className="relative">
                                            <select name="country"
                                                value={
                                                    formData.country
                                                }
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent appearance-none bg-white">
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Australia">Australia</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* School Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            School Type
                                        </label>
                                        <div className="relative">
                                            <select name="schoolType"
                                                value={
                                                    formData.schoolType
                                                }
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#173570] focus:border-transparent appearance-none bg-white">
                                                <option value="Primary">Primary</option>
                                                <option value="Secondary">Secondary</option>
                                                <option value="Primary & Secondary">Primary & Secondary</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 pt-4">
                                    <button type="submit" className="px-6 py-2 bg-[#173570] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d7a] transition-colors">
                                        Save Changes
                                    </button>
                                    <button type="button" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </section>

                        {/* Delete Account Section */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
                            <h2 className="text-lg font-semibold text-gray-500 mb-4">Delete Account</h2>
                            
                            {/* Warning Message */}
                            <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'var(--peach, #FFCCBC)' }}>
                                <p className="text-sm text-gray-900 font-semibold">Are you sure you want to delete your account?</p>
                                <p className="text-sm text-gray-900">Once you delete your account, there is no going back. Please be certain.</p>
                            </div>

                            {/* Confirmation Checkbox */}
                            <div className="flex items-center gap-2 mb-4">
                                <input
                                    type="checkbox"
                                    id="confirmDeactivation"
                                    className="w-4 h-4 text-[#173570] border-gray-300 rounded focus:ring-[#173570]"
                                />
                                <label htmlFor="confirmDeactivation" className="text-sm text-gray-00">
                                    I confirm my account deactivation
                                </label>
                            </div>

                            {/* Deactivate Button */}
                            <button
                                type="button"
                                className="px-6 py-2 bg-[#EA5455] text-white rounded-lg text-sm font-medium hover:bg-[#FF8A65] transition-colors"
                            >
                                Deactivate Account
                            </button>
                        </section>
                            </>
                        )}

                        {/* Billing & Plans Tab Content */}
                        {activeTab === 'Billing & Plans' && (
                            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Left: Current Plan */}
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-500 mb-4">Current Plan</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-lg font-semibold text-[#173570] mb-1">Your Current Plan is Basic</p>
                                                <p className="text-sm text-gray-500">A simple start for everyone</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-[#173570] mb-1">Active until Dec 09, 2021</p>
                                                <p className="text-sm text-gray-500">We will send you a notification upon Subscription expiration</p>
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-xl font-semibold text-[#173570] mb-1">£199</span>
                                                <span className="text-sm text-gray-600">Per Month</span>
                                                <span className="ml-2 px-2 py-1 bg-[#FFAB91] text-white text-xs font-medium rounded">Popular</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Standard plan for small to medium businesses</p>
                                            
                                            {/* Action Buttons */}
                                            <div className="flex items-center gap-3 pt-4">
                                                <button
                                                    type="button"
                                                    className="px-6 py-2 bg-[#173570] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d7a] transition-colors"
                                                >
                                                    Save Changes
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Attention and Days Remaining */}
                                    <div>
                                        {/* Warning Box */}
                                        <div className="bg-[#FFCCBC] rounded-lg p-4 mb-6">
                                            <p className="text-sm font-semibold text-gray-900 mb-1">We need your attention!</p>
                                            <p className="text-sm text-gray-900">Your plan requires update</p>
                                        </div>

                                        {/* Days Remaining */}
                                        <div>
                                            <div className="flex justify-between flex-row"> 
                                            <span className="block text-sm font-medium text-gray-900 mb-2">Days</span>
                                            <span className="text-xs font-semibold text-[#003049]">24 of 30 Days</span>
                                            </div>
                                            <div className="mb-2">
                                                <div className="w-full bg-gray-200 rounded-full h-4 relative">
                                                    <div 
                                                        className="h-4 rounded-full flex items-center justify-end pr-2"
                                                        style={{ width: '80%', backgroundColor: '#08A0AF' }}
                                                    >

                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-600">6 days remaining until your plan requires update</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings
