import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import ListStyles from './ListStyles.styled';
import {
  getContactsList,
  getLoading,
  getError,
} from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/filtersSlice';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { getIsLoggedIn } from 'redux/auth/selectors';
import EditModal from 'components/EditModal/EditModal';
import { useCustomContext } from 'context/userContext';
import Spinner from './Spinner';
import { ContainerStyles } from './ContainerStyles.styled';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const List = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const context = useCustomContext();
  const loading = useSelector(getLoading);
  const [visibleContacts, setVisibleContacts] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setVisibleContacts(
      contacts
        ? [
            ...contacts
              .filter(
                contact =>
                  contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                  contact.number.toLowerCase().includes(filter.toLowerCase())
              )
              .sort(({ name: firstName }, { name: secondName }) =>
                firstName.localeCompare(secondName)
              ),
          ]
        : []
    );
  }, [contacts, filter]);

  useEffect(() => {
    const paginationList = document.querySelector('.pagination-list');
    const firstPage = paginationList?.firstElementChild.nextSibling;
    const endOffset = itemOffset + itemsPerPage;

    console.log(endOffset);
    if (endOffset === itemsPerPage) {
      firstPage?.classList.add('active');
    } else {
      firstPage?.classList.remove('active');
    }

    setCurrentItems(visibleContacts?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(visibleContacts?.length / itemsPerPage));

    if (
      visibleContacts.length <=
        Math.ceil(visibleContacts?.length / itemsPerPage) * itemsPerPage &&
      itemOffset ===
        Math.ceil(visibleContacts?.length / itemsPerPage) * itemsPerPage
    ) {
      setItemOffset(0);
      firstPage?.classList.add('active');
    }
  }, [itemOffset, itemsPerPage, visibleContacts]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % visibleContacts?.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  if (error) {
    return (
      <ContainerStyles>
        <h2 className="error">{error}</h2>;
      </ContainerStyles>
    );
  }

  if (loading) {
    return (
      <ContainerStyles>
        <Spinner />
      </ContainerStyles>
    );
  }

  if (contacts.length === 0) {
    return (
      <ContainerStyles>
        <h2 className="notification">
          You haven't any contacts. Please add contacts to your phonebook
        </h2>
      </ContainerStyles>
    );
  }

  if (filter && visibleContacts.length === 0) {
    return (
      <ContainerStyles>
        <h2 className="notification">
          We didn't find any contacts according your search
        </h2>
      </ContainerStyles>
    );
  }

  if (contacts.length > 0) {
    return (
      <ContainerStyles>
        <ListStyles>
          {context.isShowModal && <EditModal />}
          {currentItems?.map(contact => (
            <Item
              userName={contact.name}
              userNumber={contact.number}
              id={contact.id}
              key={contact.id}
            />
          ))}
        </ListStyles>
        {visibleContacts.length > itemsPerPage && (
          <ReactPaginate
            className="pagination-list pagination"
            nextLabel={<GrFormNextLink size={16} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<GrFormPreviousLink size={16} />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        )}
      </ContainerStyles>
    );
  }
};

export default List;
