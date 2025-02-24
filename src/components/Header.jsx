// Header.jsx

import Navbar from "./Navbar.jsx";

export default function Header() {

    // dati ricavati per la gestione dei link della Navbar

    const links = [
        { id: 1, text: 'Home', url: '/' },
        { id: 2, text: 'About', url: '/about' },
        { id: 3, text: 'Posts', url: '/posts' },
    ];


    return (
        <header>
            <Navbar linksProp={links} />
        </header>
    );

}