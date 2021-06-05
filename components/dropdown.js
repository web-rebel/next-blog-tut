import Link from 'next/link'

export default function Dropdown({ toggle, isOpen }) {
    return (
        <div className={isOpen ? 'grid grid-rows-2 text-center items-center bg-gray-900 text-gray-100 shadow pt-2 pb-4' : 'hidden'}>
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
