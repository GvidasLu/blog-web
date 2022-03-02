const SearchCategory = ({val, onSearch, ...props})=>{
    return(
        <div className="searchcategory">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Search posts by category"
            {...props}
            />
        </div>
    )
}

export default SearchCategory;