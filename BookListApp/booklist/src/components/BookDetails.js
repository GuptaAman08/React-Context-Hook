import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContextProvider';
import { RemoveBook } from '../actions/bookListActions';
import { v4 as uuidv4 } from 'uuid'

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)

    return (  
        <li style={{marginBottom: "10px"}} onClick={() => dispatch(RemoveBook(book.id)) } key={uuidv4()}>
            <div className="title"> {book.title} </div>
            <div className="author"> {book.author} </div>
        </li>
    );
}
 
export default BookDetails;