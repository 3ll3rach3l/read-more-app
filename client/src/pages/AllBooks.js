import React from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import NavBar from '../components/sitewide/NavBar';


const AllBooks = () => {
    const isLoggedIn = useSelector(state => !!state.auth.id);

    if (!isLoggedIn) return <Redirect to='/login'></Redirect>
    return(
        <>
            <NavBar></NavBar>
            <main className="all-books">
                <h2>Check out all my libros!</h2>
            </main>
        </>
    )
}

export default AllBooks;