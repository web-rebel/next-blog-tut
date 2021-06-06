import Link from 'next/link'

export default function Dropdown({ isOpen }) {
    return (
        <div className={isOpen
            ? 'opacity-100 grid grid-rows-2 text-center items-center bg-gray-900 text-gray-100 shadow pt-2 pb-4 transition ease-out duration-100'
            : 'opacity-0'}>
            <Link href="/blog">
                <a
                    className='my-3 uppercase'
                >Blog</a>
            </Link>
            <Link href="/about">
                <a
                    className='my-3 uppercase'
                >About</a>
            </Link>
        </div>
    )
}
