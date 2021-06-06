import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className="text-5xl p-5">Latest Posts</h1>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => <Post key={index} post={post} />)}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/blog">
          <a className="
          flex
          w-40
          justify-center
          border 
          border-gray-500 
          rounded-md 
          p-4 
          my-5 
          transition
          duration-500
          ease 
          select-none
          hover:text-white
          hover:bg-gray-900
          focus:outline-none
          focus:shadow-outline
          
          "
          >All Posts</a>
        </Link>

      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3)
    }
  }
}