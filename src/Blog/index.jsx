import {useState, useEffect, useCallback} from 'react';
import {useSpring, animated, config} from "@react-spring/web";
import ScrollTrigger from 'react-scroll-trigger';
import {useImageBlogStore} from '../useStore';

function Article ({title, url, tags, delay, index}) {

  const [separatorProps, api] = useSpring(() => ({from: {width: '0%'}}));
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const setActiveIndex = useImageBlogStore((state) => state.setActiveIndex);

  const onViewPortEnter = useCallback(() => {
    if(animationTriggered) return;

    setAnimationTriggered(true);
    api.start({
      delay,
      to: { width: '100%' }, 
      config: {
	...config.slow,
	friction: 200
      }
    });
  }, []);

  return (
    <ScrollTrigger 
      component='li' 
      onMouseEnter={() => setActiveIndex(index)}
      triggerOnLoad={false} 
      onEnter={onViewPortEnter} 
      className='blog-article py-2 px-4 flex justify-between relative'>
      <a href={url} target="_blank" rel="noreferrer" className="z-10 mix-blend-difference">
	{title}
      </a>
      <ul className='hidden md:flex gap-3 z-10 mix-blend-difference'>
	{
	  tags.map((tag, i) => <li key={`tag-${i}`}><small>#{tag}</small></li>)
	}
      </ul>
      <div className='bar h-0 bg-white w-full bottom-0 left-0 absolute'/>
      <animated.div style={{height: '1px', width: '0%', ...separatorProps}} className='bg-white bottom-0 left-0 absolute'/>
    </ScrollTrigger>
  )
}

function ArticleList({articles}) {

  return (
    <ul>
      {articles.map((article, i) => 
	<Article 
	  delay={i*100}
	  index={i}
	  key={`article-${i}`}
	  title={article.title} 
	  url={article.url} 
	  tags={article.tag_list} 
	/>
      )}
    </ul>
  )

}

function ImageBlog({link, index, activeIndex}) {

  const imageProps = useSpring({
    to: { 
      height: activeIndex === index ? '100%' : '0%', 
      zIndex: activeIndex === index ? '100' : '0', 
    }, 
    config: {
      ...config.slow,
      friction: 70
    }
  });

  return (
    <animated.img style={imageProps} className='bottom-0 absolute w-full object-fill' src={link} />
  )

}

export function Blog() {
  const [titleProps, blogApi] = useSpring(() => ({}));

  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState([]);

  const activeIndex = useImageBlogStore((state) => state.activeIndex);

  useEffect(() => {

    (async function() {
      const response = await fetch('https://dev.to/api/articles?username=andersonjoseph');
      const data = await response.json();
      setArticles(data);
      setImages((data.map((article => article.cover_image))))
    })();

  }, []);

  const showTitle = useCallback(() => {
    blogApi.start({
      from: { y: '10em' },
      to: { y: '0em' }, 
      config: config.slow
    });
  }, [])

  const hideTitle = useCallback(() => {
    blogApi.start({
      to: { y: '10em' }, 
      config: config.slow
    });
  }, [])

  return (
    <ScrollTrigger triggerOnLoad={false} onExit={hideTitle} onEnter={showTitle} className='mb-96'>
      <div className='grid md:grid-cols-6 '>
	<h2 className='col-start-2 col-span-4 px-3 md:p-0 text-5xl md:text-8xl font-medium text-left flex justify-between items-end overflow-hidden'>
	  <animated.span style={titleProps}>BLOG ARTICLES</animated.span>
	  <animated.span style={titleProps}>🡯</animated.span>
	</h2>
      </div>

      <div className='grid md:grid-cols-6 '>
	<aside className='hidden md:block col-span-1 h-32 relative'>
	  {
	    images.map(
	      (image, i) => 
		<ImageBlog 
		  key={`imageblog-${i}`} 
		  link={image} 
		  index={i} 
		  activeIndex={activeIndex}
		/>
	    )
	  }
	</aside>
	<div className='col-span-4 text-left'>
	  <div style={{height: '1px'}} className='bg-white w-full '/>
	  <ArticleList articles={articles} />
	</div>
      </div>
    </ScrollTrigger>
  )
}
