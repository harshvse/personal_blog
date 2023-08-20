import getPostMetadata from "@/components/GetPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=>(
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
      </div>
    </main>
  )
}
export default HomePage;