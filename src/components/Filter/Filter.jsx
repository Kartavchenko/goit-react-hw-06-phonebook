import { filterContacts } from '../../redax/filterSlise';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.search);

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContacts(search));
  };

  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      Find contact by name
      <input
        style={{
          width: '200px',
          marginTop: '5px',
        }}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
}
