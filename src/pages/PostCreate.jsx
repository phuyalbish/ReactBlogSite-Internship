import React, {useState} from 'react'
import {DUMMY_CATEGORY} from '../data/categorydata.js'
import {modules, formats} from '../data/otherdata.js'
import ReactQuill from 'react-quill';
import  'react-quill/dist/quill.snow.css'

function PostCreate() {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {/* <p className="form_error-message">
          This is an error message
        </p> */}
        <form action="" className="form create-post_form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value )} autoFocus/>
          <select name="category" id="" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="" disabled>Select Category</option>
            {
                DUMMY_CATEGORY.map(cat => <option key={cat}>{cat.name}</option>)
            }
          </select>
            <ReactQuill modules={modules} format={formats} value={description} onChange={setDescription} />
            <input type="file" name="file" id="" onChange={e=> setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
            <button type="submit" className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default PostCreate