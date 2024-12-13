const Posts = async ({ params }) => {
  const {slug} = await params;
  return <div>post {slug}</div>;
};

export default Posts;
