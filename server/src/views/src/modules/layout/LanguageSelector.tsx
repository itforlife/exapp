import * as React from 'react'

export const LanguageSelector = props => {
    return (
        <div>
            <ul>
                <li
                    data-lang="en_EN"
                    onClick={() => props.onChangeLanguage('en_EN')}
                >
                    EN
                </li>
                <li
                    data-lang="ro_RO"
                    onClick={() => props.onChangeLanguage('ro_RO')}
                >
                    RO
                </li>
            </ul>
        </div>
    )
}
