import { useState, useEffect } from 'react'
import axios from "axios";

import { Link } from "react-router-dom";

export default function PostsList() {

    const [postsList, setPostsList] = useState([]);

    // funzione chiamata api tramite axios  

    function fetchTodos() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setPostsList(res.data))
    }

    // chiamata funzione solo al primo rendering
    useEffect(fetchTodos, []);

    // salvo la lunghezza dell'array dei posts
    const totalPosts = postsList.length;

    // funzione rimozione post
    const removePost = (id) => {
        const updatedList = postsList.filter((post) => {
            return post.id !== id

        });
        setPostsList(updatedList);

        if (updatedList.length === 0) {
            return <h1>Non ci sono posts</h1>
        }

    }

    return (

        <>

            {postsList.length === 0 ? (

                <h1>Non ci sono posts</h1>
            ) : (

                postsList.map((post) => (
                    <div className='postItem' key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags.join(", ")}</p>
                        <Link to={`/posts/${post.id}`} state={{ totalPosts }}>Vai al dettaglio</Link>
                        <button onClick={() => removePost(post.id)}>Cancella Post</button>
                    </div >

                ))
            )}


        </>

    )

}
