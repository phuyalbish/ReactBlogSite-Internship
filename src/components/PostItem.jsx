import React from 'react'
import { Link } from 'react-router-dom';
import PostWriter from './PostWriter';



const PostItem = ({postId, category, thumbnail, userId, title, body}) => {
     const truncateTitle = title.length > 40 ? body.substring(0, 40) + '...' : title;
     const capitalizedTitle = truncateTitle.charAt(0).toUpperCase() + truncateTitle.slice(1);
     const truncateBody = body.length > 100 ? body.substring(0, 100) + '...' : body;
     const capitalizedBody = truncateBody.charAt(0).toUpperCase() + truncateBody.slice(1);
    return (

        <article className="post">
            <div className="post__thumbnail"> 

               <img src={thumbnail} alt='waa' className='post_thumbnail_main_img'/>
                    
                <div className="post_content">
                    <Link to={`/posts/${postId}`}>
                        <h3>{capitalizedTitle}</h3>
                    </Link>
                    <p>{capitalizedBody}</p>
                    <div className="post__footer">
                       <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
                       <PostWriter userId = {userId} />
                       
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostItem;