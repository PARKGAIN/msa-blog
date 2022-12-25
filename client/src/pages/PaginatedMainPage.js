import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NumOfTotalPost from "../components/NumOfTotalPost";
import PostList from "../components/PostList";
import { useParams, Link } from "react-router-dom";
function PaginatedMainPage() {
  const { page } = useParams();
  const [posts, setPosts] = useState("");
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`http://localhost/paginatedposts/${page}`);
      const copy = [...posts];
      const fetchedPosts = copy.concat(res.data);
      setPosts(fetchedPosts);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  return (
    <div>
      <Header />
      <NumOfTotalPost />
      <PostList posts={posts} />
      <br />
      <br />
      <div className="post_write_page_center">
        <button
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <Link to="/2">
          <button>2</button>
        </Link>
        <Link to="/3">
          <button>3</button>
        </Link>
        <Link to="/4">
          <button>4</button>
        </Link>
        <Link to="/5">
          <button>5</button>
        </Link>
        <Link to="/6">
          <button>6</button>
        </Link>
        <Link to="/7">
          <button>7</button>
        </Link>
        <Link to="/8">
          <button>8</button>
        </Link>
        <Link to="/9">
          <button>9</button>
        </Link>
        <Link to="/10">
          <button>10</button>
        </Link>
        <Link to="/11">
          <button>&gt;</button>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default PaginatedMainPage;
