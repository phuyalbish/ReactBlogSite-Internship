import React from 'react'
import { Link } from 'react-router-dom';
import PostWriter from './PostWriter';
import blog0 from '../images/blog0.jpg';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog4.jpg';
import blog5 from '../images/blog5.jpg';
import blog6 from '../images/blog6.jpg';
import blog7 from '../images/blog7.jpg';
import blog8 from '../images/blog8.jpg';
import blog9 from '../images/blog9.jpg';


const PostItem = ({postId, thumbid, userId, title, body}) => {
    const imgpostid = Math.floor(postId % 10);
     const truncateTitle = title.length > 40 ? body.substring(0, 40) + '...' : title;
     const capitalizedTitle = truncateTitle.charAt(0).toUpperCase() + truncateTitle.slice(1);
     const truncateBody = body.length > 100 ? body.substring(0, 100) + '...' : body;
     const capitalizedBody = truncateBody.charAt(0).toUpperCase() + truncateBody.slice(1);
    return (

        <article className="post">
            <div className="post__thumbnail"> 

               <img src={imgpostid === 0 ? blog0 :
                imgpostid === 1 ? blog1 :
                imgpostid === 2 ? blog2 :
                imgpostid === 3 ? blog3 :
                imgpostid === 4 ? blog4 :
                imgpostid === 5 ? blog5 :
                imgpostid === 6 ? blog6 :
                imgpostid === 7 ? blog7 :
                imgpostid === 8 ? blog8 :
                imgpostid === 9 ? blog9 : 
                blog9} alt="No Img" />
                    
                <div className="post_content">
                    <Link to={`/posts/${postId}`}>
                        <h3>{capitalizedTitle}</h3>
                    </Link>
                    <p>{capitalizedBody}</p>
                    <div className="post__footer">
                       <PostWriter userId = {userId} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostItem;