import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider';

const Navbar = (props) => {
    const { books } = useContext(BookContext)

    console.log(books)
    return (
        <div className="navbar">
            <h1> Book List </h1>
    <p> There are {books.length} left in your collection</p>
        </div>
    );
}
 
export default Navbar;