import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './newblog.module.css';
import axios from 'axios';

const NewBlog = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    let email = 'gt29015@gmail.com';
    

    const NewBlogAdded = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            title: title,
            launchdate: date,
            author: author,
            image_link: image,
            description: description,
        }

        axios.post('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg', data,
            {
                headers: {
                    token: email
                }
            }).then(res => { alert(res.data.Message) })
            
        navigate('/')
    }

    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.header}>
                    Add A new Block
                </div>

                <form onSubmit={NewBlogAdded}>
                    <div className={classes.inputBox}>
                        <div className={classes.inputField}>
                            <label>Title: </label>
                            <input type='text' onChange={(e) => setTitle(e.target.value)} required />
                        </div>

                        <div className={classes.inputField}>
                            <label>Launch Date: </label>
                            <input type="date" required onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <div className={classes.inputField}>
                            <label>Author: </label>
                            <input type='text' required onChange={(e) => setAuthor(e.target.value)} />
                        </div>

                        <div className={classes.inputField}>
                            <label>Image: </label>
                            <input type="url" required onChange={(e) => setImage(e.target.value)} />
                        </div>

                        <div className={classes.inputField}>
                            <label>Description: </label>
                            <input type='text' required onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div >
                            <button type='submit'>Add Block</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default NewBlog
