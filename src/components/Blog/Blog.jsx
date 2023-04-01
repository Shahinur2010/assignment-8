import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { coverImage, authorImage, author, publicationDate, readingTime, status, title } = props.b;
    const addToBookmark = props.addToBookmark;
    const handleSpentTime = props.handleSpentTime;

    // console.log(readingTime)
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
                    <p>{readingTime} min read <span onClick={() => addToBookmark(props.b)}><FontAwesomeIcon icon={faBookmark}/></span></p>
                </div>
                <h1>{title}</h1>
                <p><span onClick={handleSpentTime}>{status}</span></p>
            </div>
        </div>
    );
};

export default Blog;