import Post from '@/components/post'

export default function SearchResults({ results }) {

    if (results.length === 0) return <></>

    return (
        <div className="
        absolute 
        top-20 
        right-0 
        z-10 
        bg-white 
        text-black 
        w-full 
        md:w-6/12 
        rounded-2xl
        h-96
        overflow-y-auto
        shadow-md
        "

        >
            <div className="p-10">
                <h2 className="text-3xl mb-3">{results.length} Results</h2>
                {results.map((result, index) => (
                    <Post key={index} post={result} compact={true} />
                ))}
            </div>
        </div>
    )
}
