function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched successfully");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data fetched successfully");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blogData");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [blogData, commentData] = Promise.all(
      fetchPostData(),
      fetchCommentData()
    );
    console.log(blogData);
    console.log(commentData);
    console.log("blog data fetched successfully");
  } catch (error) {
    console.error("Error fetching blog data ", error);
  }
}
