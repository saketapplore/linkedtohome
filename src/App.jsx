import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import LetsStartup from './pages/LetsStartup'
import Dashboard from './pages/Dashboard'
import Parents from './pages/Parents'
import ParentProfile from './pages/ParentProfile'
import SafeguardingAlerts from './pages/SafeguardingAlerts'
import ParentQueries from './pages/ParentQueries'
import EmployeeManagement from './pages/EmployeeManagement'
import EmployeeProfile from './pages/EmployeeProfile'
import Reports from './pages/Reports'
import AccountSettings from './pages/AccountSettings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lets-startup" element={<LetsStartup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/parent-profile" element={<ParentProfile />} />
        <Route path="/safeguarding" element={<SafeguardingAlerts />} />
        <Route path="/queries" element={<ParentQueries />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

