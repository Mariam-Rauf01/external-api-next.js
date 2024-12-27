import PostCard from "@/components/PostCard";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  // Fetch data directly in the component
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(API_ENDPOINT);

  if (!response.ok) {
    return <div>Something went Wrong</div>;
  }

  const data = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8">
      {data.map((post: Post) => (
        <PostCard key={post.id} body={post.body} title={post.title} />
      ))}
    </div>
  );
}
