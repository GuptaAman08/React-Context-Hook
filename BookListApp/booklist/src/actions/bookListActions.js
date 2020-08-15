export const AddNewBook = (title, author) => {
    return {type: "ADD_BOOK", book: {title, author} }
} 


export const RemoveBook = (id) => {
    return {type: "REMOVE_BOOK", id }
} 