import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar({ activeNav, setActiveNav }) {
  const navigate = useNavigate()

  const navigationItems = [
    { id: 'Overview', icon: 'overview.png', label: 'Overview', path: '/dashboard' },
    { id: 'Parents', icon: 'parents.png', label: 'Parents', path: '/parents' },
    { id: 'Safeguarding Alerts', icon: 'safeguarding.png', label: 'Safeguarding Alerts', path: '/safeguarding' },
    { id: 'Parent Queries', icon: 'parent.png', label: 'Parent Queries', path: '/queries' },
    { id: 'Reports', icon: 'reports.png', label: 'Reports', path: '/reports' },
    { id: 'Employee Management', icon: 'employe.png', label: 'Employee Management', path: '/employees' }
  ]

  const getIcon = (iconName, isActive) => {
    return (
      <img 
        src={`/images/${iconName}`} 
        alt={iconName.replace('.png', '')} 
        className={`w-5 h-5 object-contain ${isActive ? 'brightness-0 invert' : ''}`}
        style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    )
  }

  const handleNavClick = (item) => {
    setActiveNav(item.id)
    if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <div className="w-64 flex flex-col" style={{ backgroundColor: '#FFE7E0' }}>
      {/* Header Section */}
      <div className="p-6 flex items-center space-x-3">
        <img 
          src="/images/oakwoodlogo.png" 
          alt="Oakwood High School Logo" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-gray-900 leading-tight">Oakwood High</div>
          <div className="text-sm font-semibold text-gray-900 leading-tight">School</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
              activeNav === item.id
                ? 'text-gray-900 font-bold'
                : 'text-gray-900'
            }`}
            style={{
              borderRadius: '38px',
              backgroundColor: activeNav === item.id ? '#FFAB91' : 'transparent'
            }}
            onMouseEnter={(e) => {
              if (activeNav !== item.id) {
                e.currentTarget.style.backgroundColor = '#FFAB91'
              }
            }}
            onMouseLeave={(e) => {
              if (activeNav !== item.id) {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            {getIcon(item.icon, activeNav === item.id)}
            <span className={`text-sm ${activeNav === item.id ? 'font-bold' : 'font-normal'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar





