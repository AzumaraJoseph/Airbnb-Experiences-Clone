import React from "react";
import KatieLogo from "../img/katie-zaferes.png"

export default function Card() {
    return (
        <div className="card">
            <img src={KatieLogo} alt="Katie Logo" />
            <div>
                <span class="material-icons">
                    star
                </span>
            </div>
        </div>
    )
}