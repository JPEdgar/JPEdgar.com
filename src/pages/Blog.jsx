import React from "react";
import { Container } from "react-bootstrap";

function Blog() {
  // const [blogs, setBlog] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/Blog")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBlog(data);
  //     });
  // }, []);

  //   const renderPost = async () => {
  //     const uri = "http://localhost:3000/Blog";
  //     const res = await fetch(uri);
  //     const posts = await res.json();
  //     console.log(posts);

  //     posts.map((post) => {
  //       <div style={{ color: "white" }}>
  //         <h2>{post}</h2>
  //       </div>;
  //     });
  //   };

  return (
    <Container>
      <p>blog</p>
      {/* <p>{blogs}</p> */}
    </Container>
  );
}

export default Blog;

/*
 */
