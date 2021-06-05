import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/layout'

export default function Blog({ posts }) {
    console.log(posts)
    return (
        <Layout>
            <h1>Blog</h1>
        </Layout>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {

        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter
        }

    })

    return {
        props: {
            posts
        }
    }
}