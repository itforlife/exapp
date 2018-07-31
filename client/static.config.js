import React, { Component } from 'react'
import axios from 'axios'
import flush from 'styled-jsx/server'
import * as path from 'path'

export default {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    paths: {
        public: 'public',
    },
    getSiteData: () => ({
        title: 'Exapp',
    }),
    getRoutes: async () => {
        const { data: posts } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return [
            {
                path: '/',
                getData: () => ({
                    posts,
                }),
                component: 'src/pages/index',
            },
        ]
    },
    renderToHtml: (render, Comp, meta) => {
        const html = render(<Comp />)
        const styles = flush()
        meta.styleTags = styles
        return html
    },
    Document: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children, renderMeta } = this.props

            return (
                <Html>
                    <Head>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta name="msapplication-tap-highlight" content="no" />
                        <meta name="mobile-web-app-capable" content="yes" />
                        <meta
                            name="apple-mobile-web-app-capable"
                            content="yes"
                        />
                        <meta
                            name="apple-mobile-web-app-status-bar-style"
                            content="black"
                        />
                        <meta
                            name="apple-mobile-web-app-title"
                            content="Exapp"
                        />
                        {renderMeta.styleTags}
                    </Head>
                    <Body>{children}</Body>
                </Html>
            )
        }
    },
    webpack: (config, { defaultLoaders }) => {
        // Add .ts and .tsx extension to resolver
        config.resolve.extensions.push('.ts', '.tsx')

        // We replace the existing JS rule with one, that allows us to use
        // both TypeScript and JavaScript interchangeably
        config.module.rules = [
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
                        use: [
                            {
                                loader: 'babel-loader',
                            },
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    transpileOnly: true,
                                },
                            },
                        ],
                    },
                    defaultLoaders.cssLoader,
                    defaultLoaders.fileLoader,
                ],
            },
        ]
        return config
    },
}
