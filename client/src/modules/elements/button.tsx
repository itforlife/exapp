import React from 'react'
// import { buttonsStyles } from './buttons.css'
// <style jsx>{buttonsStyles}</style>

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
