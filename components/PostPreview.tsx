import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return(
    <div className="border border-violet-200 p-4 rounded-md drop-shadow-md bg-white" >
      <Link href={`/posts/${props.slug}`}>
      <h2 className="text-bold text-violet-600 hover:underline">{props.slug}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
)};

export default PostPreview;