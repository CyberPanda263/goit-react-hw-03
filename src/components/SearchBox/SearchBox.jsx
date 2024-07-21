import css from './SearchBox.module.css'
const SearchBox = ({FilterContacts, setFilterContacts}) => {
    return(
        <div className= {css.searchBox}>
            <p>Find contacts by name</p>
            <input className= {css.searchBoxInput} 
            type='text' 
            value={FilterContacts} 
            onChange={(evet) => setFilterContacts(evet.target.value)} />
        </div>
    )
}

export default SearchBox