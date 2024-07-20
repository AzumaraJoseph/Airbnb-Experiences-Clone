import React from "react";
import GridPhoto from '../img/photo-grid.png'

export default function Hero() {
    return (
        <main>
            <img src={GridPhoto} className="hero-img" alt="Hero Logo" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-subtitle">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>

        </main>
    )
}