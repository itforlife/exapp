import * as React from 'react'
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
            <style jsx={true}>
                {`
                    .flag {
                        display: inline-block;
                        padding-left: 16px;
                        background: url('/assets/img/flags.png') no-repeat;
                        cursoir: pointer;
                    }

                    .flag.flag-gb {
                        background-position: -16px 0;
                    }

                    .flag.flag-ro {
                        background-position: 0 -11px;
                    }
                `}
            </style>
        </div>
    )
}
