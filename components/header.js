import Link from 'next/link'
import Image from 'next/image'

export default function Header({ toggle }) {

    return (
        <header className='bg-gray-900 text-gray-100 shadow w-full'>
            <nav className='container px-6 py-3 mx-auto md:flex md:justify-between md:items-center'>

                <div className="flex items-center justify-between">
                    <div>
                        <Link href='/'>
                            <a className="flex title-font font-medium items-center">
                                <Image src='/images/logo.png' width={40} height={40} alt='logo' />
                                <span className='ml-3 text-xl'>YourSpace</span>
                            </a>
                        </Link>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                            onClick={toggle}
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="hidden items-center md:flex md:flex-row md:mx-6">
                    <Link href="/blog">
                        <a
                            className='md:mx-4 md:my-0 hover:text-indigo-300'
                        >Blog</a>
                    </Link>
                    <Link href="/about">
                        <a
                            className='md:mx-4 md:my-0 hover:text-indigo-300'
                        >About</a>
                    </Link>
                </div>
            </nav >
        </header >
    )
}
