import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redax/contactsSlice';

export const FormContact = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.name.value) {
      return alert('this name alredy have in your contacts');
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Number
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

FormContact.propTypes = {
  lable: PropTypes.string,
};
