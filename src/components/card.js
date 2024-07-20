import React from "react";
// import KatieLogo from "../img/katie-zaferes.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Katie Logo" className="card-image" />
            <div className="card-stats">
                <span className="material-icons">
                    star
                </span>
                <span>{props.rating}</span>
                <span className="grey">(props.count) .&nbsp;</span>
                <span className="grey"> {props.contry}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>

            
        </div>
    )
}