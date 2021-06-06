import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import CategoryList from '@/components/CategoryList'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function CategoryNamePage({ posts, categoryName, categories }) {
    return (
        <Layout>
            <h1 className='ml-8 text-5xl font-bold'>
                Posts in {categoryName}
            </h1>

            <div className="flex flex-col md:justify-between md:flex-row">


                <div className=" w-screen md:w-3/4 mr-10">
                    <div className='grid md:grid-cols-2 gap-5'>
                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </div>
                </div>

                <div className="w-screen md:w-1/4">
                    <CategoryList categories={categories} />
                </div>

            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const categories = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return frontmatter.category.toLowerCase()
    })

    const paths = categories.map((category) => ({
        params: { category_name: category },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { category_name } }) {
    const posts = getPosts()

    // Get categories for sidebar
    const categories = posts.map(post => post.frontmatter.category)
    const uniqueCategories = [...new Set(categories)]

    // Filter posts by category
    const categoryPosts = posts.filter(
        (post) => post.frontmatter.category.toLowerCase() === category_name
    )

    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
            categories: uniqueCategories
        },
    }
}