import { motion } from 'framer-motion';
import {useEffect, useState} from 'react';

function Article(props) {
  return (
    <li style={{lineHeight: 1}} className="list-none">
      <a href={props.href} target="_blank" className="inline article">{props.children}</a>
    </li>
  )
}

function ArticleList(props) {
  return <ul>{props.children}</ul>
}

export function ArticlesPage(props) {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
    async function fetchPosts() {
      const response = await fetch('https://dev.to/api/articles?username=andersonjoseph')
      const requestedPosts = await response.json();

      setPosts(requestedPosts.slice(0, 4));
    }
    fetchPosts();
  }, []);

  const variants = {
    appeared: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    dissapeared: { opacity: 0, scale: 0.1, filter: 'blur(50px)' },
  }

  return (
    <motion.div
      style={{top: '20%', scale: 0.1, opacity: 0}}
      className="page absolute md-w-60pc"
      transition={{
	ease: [.72,.08,.31,.93],
	duration: 2.5,
      }} 
      animate={props.isShown ? 'appeared' : 'dissapeared'}
      variants={variants}
    >
      <p className='article-label'>LATEST ARTICLES</p>

      <ArticleList>
	{
	  posts.map((post, i) => <Article href={post.url} key={`article-${i}`}>{post.title}</Article>)
	}
      </ArticleList>

      <br />
      <a style={{fontSize: '0.5em', fontWeight: 'bold'}} href="https://dev.to/andersonjoseph" target="_blank" className="inline mt-5">Read more here</a>

    </motion.div>
  )
}
