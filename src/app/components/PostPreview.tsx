import Link from 'next/link'
import { PostMetadata } from './PostMetadata'

const postPreviews = (props: PostMetadata) => {
  return (
    <div
      key={props.slug}
      className="border border-violet-200 rounded-md shadow-md bg-white p-4"
    >
      <p className="text-sm text-slate-400 my-2">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-bold text-violet-800 hover:underline my-1">
          {props.title}
        </h2>
      </Link>

      <p className="text-slate-600 text-sm">{props.subtitle}</p>
    </div>
  )
}
export default postPreviews
