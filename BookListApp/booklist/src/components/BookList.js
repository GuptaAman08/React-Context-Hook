import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider';
import BookDetails from './BookDetails'

const BookList = (props) => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {
                    books.map(book => {
                        return(
                            <BookDetails book={book} key={books.id} />
                        )
                    })
                }
            </ul>
        </div>
    ) : (
        <div classname="empty" style={{margin: "20px", textAlign: "center", paddingBottom: "20px"}}> 
            Your collection for book is empty now
        </div>
    )
}
 
export default BookList;