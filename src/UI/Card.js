import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className={props.className} id='general-card'>
            {props.children}
        </div>
    )
}

export default Card;