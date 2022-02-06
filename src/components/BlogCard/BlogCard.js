import React from 'react';
import './BlogCard.css';

const BlogCard = ({title,image,descrip,link,color}) => {

  return (
    <div className='blogcard-main--container' style={{backgroundImage:`url(${image})`,borderColor:`${color}`}} >
        <div className='blogcard--overlay'></div>
        <div className='blog-content--container'>
        <h1 style={{color:`${color}`}} className='blog-content--h1'>{title}</h1>
        <p className='blog-content--p'>{descrip.slice(0,210)}...</p>
        <a href={link} target="_blank" rel="noreferrer" style={{backgroundColor:`${color}`}} className='blog-content--a'>Read More</a>
        </div>
    </div>
  );
};

export default BlogCard;
