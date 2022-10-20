import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        marginLeft: '50px',
        marginTop: '50px',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact />
      <Filter />
      <h2>Contacts</h2>
      <ListContacts />
    </div>
  );
};
