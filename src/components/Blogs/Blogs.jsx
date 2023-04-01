import React, { useState, useEffect } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Output from '../Output/Output';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookMarks, setBookmarks] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

   
    const handleSpentTime = () => {
//         let myTime = 
//         for(let i=0; i<blogs.length; i++)
// {console.log(i, id)}
            console.log(blogs[0].readingTime)
        
        // const updateTime = parseInt(blogs.readingTime);
        
        // setTime(time + updateTime);
    }

    const addToBookmark = (b) => {
        const isExist = bookMarks.find(item=>item.id === b.id)
        if (isExist) {
            toast('already exist')
            // return;
        }
        setBookmarks([...bookMarks, b]);
    }

    return (

        <div className='cart-container'>
            <div className='cart-items'>
                {
                    blogs.map((b, i) => <Blog key={i} b={b} addToBookmark={addToBookmark} handleSpentTime={handleSpentTime}></Blog>)
                }
            </div>
            <div className='output'>
                <h5>Spent time on read : {time} min</h5>
                <h5>Bookmarked Blogs: {bookMarks.length}</h5>
                {
                    bookMarks.map((bookMark, i) => <Output bookMark={bookMark} key={i}></Output>)
                }
            </div>
        </div>
    );
};

export default Blogs;