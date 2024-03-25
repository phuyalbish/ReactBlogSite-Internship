import React,  { useState, useEffect } from 'react'

import WriterItem from '../components/WriterItem'

import { Link } from 'react-router-dom';


function Writer() {
  const [writer, setWriter] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setWriter(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
          <section className="posts">
      <div className="container posts_container">
        
 {
        writer.map(({id, name, username, email, website}) => <WriterItem key={id} writerId={id} username={username} name={name} email={email}/>)
      }

      </div>
    </section>
  )
}

export default Writer


