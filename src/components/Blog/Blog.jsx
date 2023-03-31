import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const{coverImage,authorImage,author,publicationDate,readingTime,status,title} = props.b;
    return (
        <div className='blog-container'>
            <div>
            <img className='cover-image' src={coverImage} alt="" />
            <div className='blog-detail'>
            <div className='blog-info'>
            <img className='author-image' src={authorImage} alt="" />
            <div>
            <p>{author}</p>
            <p>{publicationDate}</p>
            </div>
            </div>
            <p>{readingTime} <FontAwesomeIcon icon={faBookmark} /></p> 
            </div>
            <h1>{title}</h1>
            <p>{status}</p>
        </div>
        </div>
    );
};

export default Blog;