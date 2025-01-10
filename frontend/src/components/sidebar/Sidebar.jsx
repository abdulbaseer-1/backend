import React from 'react';
import sidebar_style from "./Sidebar.module.css";

function Admin_Sidebar({ className }) {
    // Retrieve role from localStorage
    const role = localStorage.getItem('role');

    return (
        <div className={`${sidebar_style.sidebar} ${className}`}>
            <div><br /></div>
            <a href="https://backend-two-henna-56.vercel.app/Home">Home</a>
            <a href="https://backend-two-henna-56.vercel.app/Report_a_Crime">Report Crime</a> 
            <a href="https://backend-two-henna-56.vercel.app/Pending_Cases">Pending cases</a>
            {role === "admin" && <a href="https://backend-two-henna-56.vercel.app/Closed_Cases">Closed Cases</a>} {/* Show only for admin */}
            {role === "admin" && <a href="https://backend-two-henna-56.vercel.app/Ongoing_Investigations">Ongoing Investigations</a>} {/* Show only for admin */}
            <a href="https://backend-two-henna-56.vercel.app/Settings">settings</a>
            <a href="https://backend-two-henna-56.vercel.app/Contact_Us">Contact us</a>
        </div>
    );
}

export default Admin_Sidebar;
