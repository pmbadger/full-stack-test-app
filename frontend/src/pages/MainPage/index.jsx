import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import ProductTable from "../../components/ProductTable";
import { sortItemsBy } from "../../utils/products";
import { getProducts } from "../../services/api/product";


const MainPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('');

    const sortedItems = useMemo(() => sortItemsBy(items, sortBy), [items, sortBy]);

    useEffect(() => {
        getProducts().then(res => setItems(res.data));
    },[]);

    // useEffect(() => {
    //     getProfile().then(res => {
    //         dispatch(setProfile(res.data));
    //     });
    // }, [dispatch]);

    return (
        <div>
            <Navbar setItems={setItems} setIsLoading={setIsLoading} setSortBy={setSortBy} />
            <ProductTable items={sortedItems} isLoading={isLoading} />
        </div>
    );
};

export default MainPage;