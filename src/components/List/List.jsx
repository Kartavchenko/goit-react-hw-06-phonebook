import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redax/contactsSlice';

export const ListContacts = () => {
  const userContact = useSelector(state => state.contacts);
  const filterContact = useSelector(state => state.search);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const lowerCase = filterContact.toLowerCase();
    const filterUser = userContact.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const normalizeNamber = number.toLowerCase();
      const result =
        normalizeName.includes(lowerCase) ||
        normalizeNamber.includes(lowerCase);
      return result;
    });
    return filterUser;
  };

  const arrayContacts = getFilteredContacts();

  const user = arrayContacts.map(({ id, name, number }) => {
    return (
      <li
        key={id}
        style={{
          marginBottom: '10px',
        }}
      >
        {name}: {number}
        <button
          type="button"
          onClick={() => dispatch(removeContact(id))}
          style={{
            marginLeft: '5px',
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{user}</ul>;
};

ListContacts.propTypes = {
  // contacts: PropTypes.array,
  button: PropTypes.element,
};
