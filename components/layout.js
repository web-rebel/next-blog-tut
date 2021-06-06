import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from './Header'
import Dropdown from './Dropdown'
import Search from './Search'
export default function Layout({ title, keywords, description, children }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {

        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    }, [toggle])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header toggle={toggle} />
            <Search />
            <Dropdown toggle={toggle} isOpen={isOpen} />
            <main className='container mx-auto my-7'>{children}</main>
        </>
    )
}

Layout.defaultProps = {
    title: 'Welcome to YourSpace',
    keywords: 'development, coding, programming',
    description: 'The best info and news in development'
}
