import React, { useState, useEffect } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Output from '../Output/Output';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookMarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const addToBookmark = (b) =>{
        setBookmarks([...bookMarks, b]);
    }

    return (
        
            <div className='cart-container'>
            <div className='cart-items'>
                {
                    blogs.map((b, i) => <Blog key={i} b={b} addToBookmark={addToBookmark} ></Blog>)
                }
            </div>
            <div className='output'>
                <h5>Spent time on read :  min</h5>
                <h5>Bookmarked Blogs: </h5>
                 {
                 bookMarks.map((bookMark,i)=> <Output bookMark={bookMark} key={i}></Output>)
                 }
            </div>
        </div>
    );
};

export default Blogs;