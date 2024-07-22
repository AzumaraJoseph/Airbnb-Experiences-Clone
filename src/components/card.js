import React from "react";
// import KatieLogo from "../img/katie-zaferes.png"

export default function Card(props) {

    const nums = [1, 2, 3, 4, 5, 6]
    const numSquare = nums.map(num => num * num)
    // console.log(numSquare);

    const names = ['john', 'charles', 'joseph', 'kalu']
    const capitalized = names.map(name => {
        return name[0].toUpperCase() + name.slice(1)

    })
// console.log(capitalized);

const pokesMan = ["Chander", "Justin", "Austin"]
const poker = pokesMan.map(poke => {
    return `<p>${poke}</p>`
})
//   console.log(poker);

    return (
        <div className="card">
            <img src={props.img} alt="Katie Logo" className="card-image" />
            <div className="card-stats">
                <span className="material-icons">
                    star
                </span>
                <span>{props.rating}</span>
                <span className="grey">({props.count}) .&nbsp;</span>
                <span className="grey"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>

            
        </div>
    )
}