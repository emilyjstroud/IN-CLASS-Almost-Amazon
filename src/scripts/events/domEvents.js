import { deleteBook } from '../../api/bookData';
import { showBooks } from '../components/pages/books';
import { deleteAuthorBooks } from '../../api/mergedData';
// import { deleteSingleAuthor } from '../../api/authorData';
import { showAuthors } from '../components/pages/authors';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import { updateAuthor } from '../../api/authorData';
import selectAuthor from '../components/forms/selectAuthor';
// import { showAuthors } from '../components/pages/authors';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then((booksArray) => showBooks(booksArray));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('ADD BOOK');
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('EDIT BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      // const [, bookFirebaseKey] = e.target.id.split('--');

      // viewBookDetails(bookFirebaseKey).then((bookAuthorObject) => viewBookDetails(bookAuthorObject));
      console.warn('VIEW BOOK BUTTON', e.target.id);
      selectAuthor();
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE AUTHOR', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteAuthorBooks(firebaseKey).then(showAuthors);
        // deleteSingleAuthor(firebaseKey).then((authorsArray) => showAuthors(authorsArray));
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
      addAuthorForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      console.warn('UPDATE AUTHOR');
      updateAuthor();
    }
  });
};

export default domEvents;
