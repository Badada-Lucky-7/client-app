const Challenge = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <div>
      {id}
      <br />
      <a href="./blog/page.tsx">Blog</a>
    </div>
  );
};

export default Challenge;
