import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostMetadata from '@/app/components/getPostMetadata'

const getPostContents = (slug: string) => {
  const folder = 'src/posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf-8')
  const matterResults = matter(content)
  return matterResults
}
export const generateStaticParams = () => {
  const posts = getPostMetadata()
  return posts.map((posts) => ({
    slug: posts.slug,
  }))
}
const postPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContents(slug)
  return (
    <div>
      <h1 className='text-2xl text-violet-500 text-center'>{post.data.title}</h1>
      <p className='text-slate-500 text-sm text-right'>{post.data.date}</p>
      <article className="prose lg:prose-lg">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}
export default postPage
