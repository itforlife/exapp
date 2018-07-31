import Link from 'next/link'
import * as React from 'react'

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link href="/">
                    <a style={{ fontSize: 20 }}>{siteTitle}</a>
                </Link>
            </h1>
        </div>
    </div>
)

export default Header
