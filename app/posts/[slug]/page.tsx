import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/GetPostMetadata';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    console.log(posts);
    return posts.map((post) => ({
        slug: post.slug,
    }))
};

const postPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <h1 className='text-2xl text-violet-600'>{post.data.title}</h1>
            <article className="prose lg:prose-xl">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default postPage;