import * as React from 'react'

const Header = ({ siteTitle }) => (
    <div>
        <div>
            <h1>
                <a href="/">
                    <a>{siteTitle}</a>
                </a>
            </h1>
        </div>
    </div>
)

export default Header
