import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContextProvider';

const BookDetails = ({ book }) => {
    const {addBook, removeBook} = useContext(BookContext)
    return (  
        <li style={{marginBottom: "10px"}} onClick={() => removeBook(book.id)}>
            <div className="title"> {book.title} </div>
            <div className="author"> {book.author} </div>
        </li>
    );
}
 
export default BookDetails;