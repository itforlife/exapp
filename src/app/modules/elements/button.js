import React from 'react'
import {indexStyles} from './index.css';

export const Button = (props) => {

    return (
        <div>
            <a href="#" 
                className={props.className} 
                onClick={props.onClick}
                {...props}
            >
                {props.children}
            </a>
            <style jsx>{indexStyles}</style>
        </div>

    )

}