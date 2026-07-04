import React, { useContext, useEffect, useState } from 'react'
import { postContext } from '../../Utilities'
import Style from "./homepage.module.css";

const HomePage = () => {
  let { fetchPosts, posts } = useContext(postContext);
  let [color, setColor] = useState({});
  useEffect(() => {
    fetchPosts();
  }, []);
  let handleColor = () => {
    setColor({ color: "red" });
  };
  return (
    <section className={Style.mainContainer}>
      {posts.map((post) => {
        return (
          <article className={Style.postContainer}>
            <figure>
              <img src={post.image} alt="" />
              <figcaption>{post.caption}</figcaption>
            </figure>
            <div>
              <span>
                <FaHeart style={color} onDoubleClick={handleColor}/>
              </span>
              <span>
                
              </span>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default HomePage
