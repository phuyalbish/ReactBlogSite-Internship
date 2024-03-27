import React, { useState, useEffect } from "react";
import PostWriter from "../components/PostWriter";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { DUMMY_POST } from "../data/postdata.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const postid = parseInt(id);
  const [posts, setPosts] = useState(DUMMY_POST);
  useEffect(() => {
    const filteredPost = DUMMY_POST.find((user) => user.id == id);
    setPosts(filteredPost);
  }, [postid]);

  const userId = posts.userId;
  let capitalizedTitle = posts.title;
  let capitalizedBody = posts.body;
  capitalizedTitle =
    posts?.title?.charAt(0).toUpperCase() + posts?.title?.slice(1);
  capitalizedBody =
    posts?.body?.charAt(0).toUpperCase() + posts?.body?.slice(1);
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="titleWithBack">
          <Link onClick={() => navigate(-1)} className="linktoback">
            <IoMdArrowRoundBack />
          </Link>

          <div className="title">
            <h1>{capitalizedTitle}</h1>
            <p>{capitalizedBody}</p>
          </div>
        </div>

        <div className="post-detail_thumbnail">
          <img src={posts.thumbnail} alt="" />
        </div>
        <div className="post-detail_header">
          <div className="post-detail_buttons">
            <Link to={`/posts/writer/edit`} className="btn sn primary">
              Edit
            </Link>
            <Link to={`/posts/writer/delete`} className="btn sn danger">
              Delete
            </Link>
          </div>
          <PostWriter userId={3} />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo
          earum ipsam facere rem repellat aliquid similique illum, saepe beatae.
          Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium
          omnis cupiditate repellat, accusamus ad natus perferendis quidem
          perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Eius deleniti quasi omnis unde
          nulla quae expedita ducimus veniam, illo earum ipsam facere rem
          repellat aliquid similique illum, saepe beatae. Omnis doloremque
          placeat adipisci et distinctio eveniet? Praesentium omnis cupiditate
          repellat, accusamus ad natus perferendis quidem perspiciatis quasi
          harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo
          earum ipsam facere rem repellat aliquid similique illum, saepe beatae.
          Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium
          omnis cupiditate repellat, accusamus ad natus perferendis quidem
          perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          obcaecati id doloribus eligendi voluptatibus quisquam eveniet ullam
          aliquam ipsam quaerat error saepe delectus excepturi voluptatum amet
          quae quod doloremque porro, natus placeat reprehenderit. Consectetur
          quo sunt nisi facere obcaecati, nam magni dolorem sequi iure
          laudantium magnam consequuntur aspernatur quod sint numquam id fugit
          expedita alias sed unde libero molestiae ipsum nihil vero. Voluptas,
          perspiciatis illo ad accusantium repudiandae nemo exercitationem cum
          soluta quidem est beatae pariatur necessitatibus! Corporis, rem quo
          debitis illo nesciunt voluptatibus laudantium sed porro, esse delectus
          velit recusandae? Laborum recusandae ab reprehenderit repudiandae?
          Quaerat, debitis! Laborum, maxime?
        </p>
        <p>
          In conclusion, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui sed, perferendis sequi reprehenderit accusantium saepe quis
          eos provident nulla amet odit explicabo dolorum, in aliquam cum
          consectetur. Minima, explicabo repellat.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
