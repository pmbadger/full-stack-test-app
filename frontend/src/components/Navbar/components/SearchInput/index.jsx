import React, { useState } from "react";

const SearchInput = ({ setItems, setIsLoading }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setValue(e.target.value);
        
        setTimeout(() => {
            setItems([]);
            setIsLoading(false);
        }, 1000);
        // searchProducts({ value: e.target.value }).then(res => {
        //     setItems(res.data);
        // }).catch((err) => err) ;
    };

    return (
        <form className="d-flex" role="search" onSubmit={e => {e.preventDefault()}}>
            <input
                className="form-control me-2"
                value={value}
                onChange={handleChange}
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </form>
    );
};

export default SearchInput;