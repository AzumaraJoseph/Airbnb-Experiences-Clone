import React from "react";
// import KatieLogo from "../img/katie-zaferes.png"

export default function Card(props) {
    let badgeText;
    console.log(props.item);
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'Online'
    } else {

    }

    return (
        <div className="card">
            {badgeText &&<div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="Katie Logo" className="card-image" />
            <div className="card-stats">
                <span className="material-icons">
                    star
                </span>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) .&nbsp;</span>
                <span className="grey"> {props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong> / person</p>

            
        </div>
    )
}