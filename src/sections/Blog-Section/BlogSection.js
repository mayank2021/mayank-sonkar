import React from 'react';
import './BlogSection.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import {BlogData} from '../../Data/BlogData';

const BlogSection = (props) => {
    return (
        <div className="tech-section">
            <h1 style={{color:props.color}} className="primary--heading center">blogs</h1>
            <hr style={{borderColor:props.color, width:"80px"}} className="primary--heading-hr"/>
            <div className="tech-card--container blog-section--container">
                {
                    BlogData.map((ele,ind) => {
                        return(
                            <BlogCard
                            key={ind}
                            image={ele.image}
                            title={ele.title}
                            descrip={ele.descrip}
                            link={ele.link}
                            color={props.color}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection;
