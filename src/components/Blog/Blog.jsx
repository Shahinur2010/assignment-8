import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const{coverImage,authorImage,author,publicationDate,readingTime,status,title} = props.b;
    return (
        <div>
            <img src={coverImage} alt="" />
            <img src={authorImage} alt="" />
            <p>{author}</p>
            <p>{publicationDate}</p>
            <p>{readingTime}</p> <FontAwesomeIcon icon={faBookmark} />
            <h1>{title}</h1>
            <p>{status}</p>
        </div>
    );
};

export default Blog;