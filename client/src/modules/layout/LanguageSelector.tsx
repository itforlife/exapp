import * as React from 'react'
import * as styles from './LanguageSelector.scss'

export const LanguageSelector = props => {
    return (
        <div>
            <ul>
                <li
                    data-lang="en_EN"
                    className={`${styles.flag} ${styles.flagGb}`}
                    onClick={() => props.onChangeLanguage('en_EN')}
                >
                    EN
                </li>
                <li
                    data-lang="ro_RO"
                    className={`${styles.flag} ${styles.flagRo}`}
                    onClick={() => props.onChangeLanguage('ro_RO')}
                >
                    RO
                </li>
            </ul>
        </div>
    )
}
