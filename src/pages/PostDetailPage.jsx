import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {

    const { id } = useParams();

    return (
        <>
            <h1>Dettaglio: {id}</h1>
        </>
    );
}