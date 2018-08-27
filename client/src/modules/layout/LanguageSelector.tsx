import * as React from 'react'
import './LanguageSelector.scss'

export const LanguageSelector = props => {
    return (
        <div>
            <ul>
                <li
                    data-lang="en_EN"
                    className="flag flag-gb"
                    onClick={() => props.onChangeLanguage('en_EN')}
                >
                    EN
                </li>
                <li
                    data-lang="ro_RO"
                    className="flag flag-ro"
                    onClick={() => props.onChangeLanguage('ro_RO')}
                >
                    RO
                </li>
            </ul>
        </div>
    )
}
