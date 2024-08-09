import React, { useState } from "react";

const items = [
    {
        id: 1,
        name: 'Ane',
        description: 'Phasellus ligula erat, viverra vel interdum eu, dictum in diam. Curabitur dapibus vitae libero in hendrerit. Maecenas turpis ligula, volutpat vitae gravida nec, semper id neque. Mauris quis dolor pulvinar eros tincidunt convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere vel libero at cursus. Quisque ac sem ut nisi tempus eleifend',
        price: 11,
        stock: 111,
    },
    {
        id: 2,
        name: 'Dwo',
        description: 'Phasellus ligula erat, viverra vel interdum eu, dictum in diam. Curabitur dapibus vitae libero in hendrerit. Maecenas turpis ligula, volutpat vitae gravida nec, semper id neque. Mauris quis dolor pulvinar eros tincidunt convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere vel libero at cursus. Quisque ac sem ut nisi tempus eleifend',
        price: 22,
        stock: 23,
    },
    {
        id: 3,
        name: 'Bhree',
        description: 'Phasellus ligula erat, viverra vel interdum eu, dictum in diam. Curabitur dapibus vitae libero in hendrerit. Maecenas turpis ligula, volutpat vitae gravida nec, semper id neque. Mauris quis dolor pulvinar eros tincidunt convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere vel libero at cursus. Quisque ac sem ut nisi tempus eleifend',
        price: 33,
        stock: 4,
    },
    {
        id: 4,
        name: 'Cour',
        description: 'Phasellus ligula erat, viverra vel interdum eu, dictum in diam. Curabitur dapibus vitae libero in hendrerit. Maecenas turpis ligula, volutpat vitae gravida nec, semper id neque. Mauris quis dolor pulvinar eros tincidunt convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere vel libero at cursus. Quisque ac sem ut nisi tempus eleifend',
        price: 88,
        stock: 52,
    },
    {
        id: 5,
        name: 'Eive',
        description: 'Phasellus ligula erat, viverra vel interdum eu, dictum in diam. Curabitur dapibus vitae libero in hendrerit. Maecenas turpis ligula, volutpat vitae gravida nec, semper id neque. Mauris quis dolor pulvinar eros tincidunt convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere vel libero at cursus. Quisque ac sem ut nisi tempus eleifend',
        price: 55,
        stock: 77,
    },
];

const SearchInput = ({ setItems, setIsLoading }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setValue(e.target.value);
        
        setTimeout(() => {
            setItems(items);
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