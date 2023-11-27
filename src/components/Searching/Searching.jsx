import { setFilter, getFilter } from 'redux/contacts/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SearchingStyles } from './SearchingStyles.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const Searching = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <SearchingStyles>
      <h3>Search contact by name or number</h3>
      <div className="input-container">
        <AiOutlineSearch className="search-icon" size={16} />
        <input
          onChange={({ target: { value } }) => dispatch(setFilter(value))}
          value={filter}
        />
      </div>
    </SearchingStyles>
  );
};

export default Searching;
