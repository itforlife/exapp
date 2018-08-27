import React from 'react'
import './ButtonStyle.scss'

export const Button = props => {
    return (
        <div>
            <a
                href="#"
                className={props.className}
                onClick={props.onClick}
                {...props}
            >
                {props.children}
            </a>
        </div>
    )
}
