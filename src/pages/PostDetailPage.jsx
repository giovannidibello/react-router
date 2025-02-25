import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";


export default function PostDetailPage() {

    // destrutturo per ritornare l'id tramite param
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setPost] = useState({});

    // settagglio dello stato passato tramite link
    const location = useLocation();
    const totalPosts = location.state?.totalPosts || 1;

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))


            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])

    // funzione per ciclare sui post (prev e next)
    const getPrevPostId = () => (parseInt(id) === 1 ? totalPosts : parseInt(id) - 1);
    const getNextPostId = () => (parseInt(id) === totalPosts ? 1 : parseInt(id) + 1);


    return (
        <>
            <div className="postdetail">
                <nav className="navdetail">
                    <Link to={`/posts/${getPrevPostId()}`} state={{ totalPosts }}>Prev</Link>
                    <Link to={`/posts/${getNextPostId()}`} state={{ totalPosts }}>Next</Link>
                </nav>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
            </div>
        </>
    );
}