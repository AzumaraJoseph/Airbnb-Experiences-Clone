import React from "react"
import AirLogo from '../img/airbnb.png'

export default function NavBar() {
    return (
        <nav className="nav">
            <img src={AirLogo} alt="Airbnb Logo" width="130px" />
        </nav>
    )
}