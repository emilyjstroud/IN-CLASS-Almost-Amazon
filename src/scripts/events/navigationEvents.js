import { booksOnSale, getBooks } from '../../api/bookData';
import { showBooks } from '../components/pages/books';
import signOut from '../helpers/auth/signOut';
import { showAuthors, emptyAuthors } from '../components/pages/authors';
import { getAuthors, getFavAuthor } from '../../api/authorData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then((saleBooksArray) => showBooks(saleBooksArray));
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((booksArray) => showBooks(booksArray));
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((authorsArray) => console.warn(authorsArray));
  });
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((authorsArray) => {
      if (authorsArray.length !== 0) {
        showAuthors(authorsArray);
      } else {
        emptyAuthors(authorsArray);
      }
    });
  });
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthor().then((authorsArray) => showAuthors(authorsArray));
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
