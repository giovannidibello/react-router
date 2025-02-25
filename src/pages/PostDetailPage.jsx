import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


export default function PostDetailPage() {

    // destrutturo per ritornare l'id tramite param
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setPost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))


            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])

    return (
        <>
            <div className="postdetail">
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
                {/* <p>{post.tags.join(", ")}</p>            */}
            </div>
        </>
    );
}