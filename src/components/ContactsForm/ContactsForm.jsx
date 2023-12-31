import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList, getIsAdding } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';
import { PiSpinnerGap } from 'react-icons/pi';
import ContactsFormStyles from './ContactsFormStyles.styled';
import Notiflix from 'notiflix';
import { GrAdd } from 'react-icons/gr';

const ContactsForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const contacts = useSelector(getContactsList);
  const isAdding = useSelector(getIsAdding);
  const [notify, setNotify] = useState('Please, enter contact info to add');
  const [canSubmit, setCanSubmit] = useState(false);
  const dispatch = useDispatch();

  const handlerChangeInput = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };

  useEffect(() => {
    if (!name && !number) {
      setNotify('Enter name and number to create new contact.');
      setCanSubmit(false);
    } else if (name && name.length < 3) {
      setNotify('Contact name should be 3 symbols minimum.');
      setCanSubmit(false);
    } else if (name && name.length > 16) {
      setNotify('Contact name should be 16 symbols maximum.');
      setCanSubmit(false);
    } else if (name && !number) {
      setNotify('Add contact number.');
      setCanSubmit(false);
    } else if (name && number.length < 5) {
      setNotify('Contact number should be 5 symbols minimum.');
      setCanSubmit(false);
    } else if (name && number.length > 16) {
      setNotify('Contact number should be 16 symbols maximum.');
      setCanSubmit(false);
    } else if (number && !name) {
      setNotify('Enter contact name.');
      setCanSubmit(false);
    } else {
      setNotify('You can add new contact to your book.');
      setCanSubmit(true);
    }
  }, [name, number]);

  const handlerSubmitForm = e => {
    e.preventDefault();

    if (
      contacts?.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name} is alredy in your contacts.`);
      return;
    } else if (
      contacts?.some(contact => contact.number.trim() === number.trim())
    ) {
      Notiflix.Notify.failure(
        `The number ${number} is alredy in your contacts.`
      );
      return;
    }
    if (canSubmit) {
      dispatch(addContact({ name, number }));

      setName('');
      setNumber('');
    }
  };

  return (
    <ContactsFormStyles autoComplete="off" onSubmit={handlerSubmitForm}>
      <h2>
        <span className="first">Add </span>contact
      </h2>
      <div className="add-contact-label-container">
        <input
          id="add-name"
          placeholder="Name"
          value={name}
          onChange={handlerChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="add-name">Name</label>
      </div>
      <div className="add-contact-label-container">
        <input
          id="add-number"
          placeholder="Number"
          value={number}
          onChange={handlerChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label htmlFor="add-number">Phone </label>
      </div>

      <button type="submit" disabled={!canSubmit}>
        {isAdding ? (
          <PiSpinnerGap className="spinner" size={16} />
        ) : (
          <GrAdd size={16} />
        )}
        Add contact
      </button>
      <p className={`notify ${canSubmit ? 'ok' : 'error'}`}>{notify}</p>
    </ContactsFormStyles>
  );
};

export default ContactsForm;
