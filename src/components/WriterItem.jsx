import React from 'react'
import { Link } from 'react-router-dom';
import PostWriter from './PostWriter';
import writer10 from '../images/avatar10.jpg';
import writer1 from '../images/avatar1.jpg';
import writer2 from '../images/avatar2.jpg';
import writer3 from '../images/avatar3.jpg';
import writer4 from '../images/avatar4.jpg';
import writer5 from '../images/avatar5.jpg';
import writer6 from '../images/avatar6.jpg';
import writer7 from '../images/avatar7.jpg';
import writer8 from '../images/avatar8.jpg';
import writer9 from '../images/avatar9.jpg';


const WriterItem = ({writerId, name, username, email}) => {
    const imgwriterid = Math.floor(writerId % 10);
    return (

        <article className="post">
            <div className="post__thumbnail"> 

               <img src={imgwriterid === 0 ? writer10 :
                imgwriterid === 1 ? writer1 :
                imgwriterid === 2 ? writer2 :
                imgwriterid === 3 ? writer3 :
                imgwriterid === 4 ? writer4 :
                imgwriterid === 5 ? writer5 :
                imgwriterid === 6 ? writer6 :
                imgwriterid === 7 ? writer7 :
                imgwriterid === 8 ? writer8 :
                imgwriterid === 9 ? writer9 : 
                writer9} alt="No Img" />
                    
                <div className="post_content">
                    <Link to={`/posts/${writerId}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p>@{username}</p>
                    
                </div>
            </div>
        </article>
    );
};

export default WriterItem;