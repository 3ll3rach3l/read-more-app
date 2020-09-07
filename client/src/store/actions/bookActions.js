
export const SET_BOOKS = 'book/SET_BOOKS';


export const setBooks = books => {
    return {
        type: SET_BOOKS,
        books
    }
}

export const getBooks = () => async dispatch => {
        const res = await fetch('/api/books');
        res.data = await res.json();
        if (res.ok) {
            dispatch(setBooks(res.data.books));
        }
        return res;
    
}