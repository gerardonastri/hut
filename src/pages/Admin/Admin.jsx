import React, {useState, useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminOverview from '../../components/AdminOverview/AdminOverview'
import './Admin.css'

const Admin = () => {
  return (
    <div className='admin'>
    <div className="admin__navbar">
        <h2>Admin Page</h2>
        <div className="admin__navbar-links">
            <a href="/"><LogoutIcon /></a>
            <NotificationsNoneIcon />
            <SettingsIcon />
        </div>
    </div>
    <div className="admin__wrapper">
        <Sidebar />
        <AdminOverview />
    </div>
</div>
  )
}

export default Admin