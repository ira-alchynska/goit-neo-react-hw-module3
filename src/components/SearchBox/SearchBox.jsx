import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
    <div className={styles.searchBox}>
        <label>
            Find contacts by name
            <input type="text" value={filter} onChange={onFilterChange} />
        </label>
    </div>
);

export default SearchBox;
