import React from "react";
import EmptyTable from "./components/EmptyTable.jsx/index.jsx";
import ProductTableRow from "./components/ProductTableRow/index.jsx";

const ProductTable = ({ items, isLoading }) => {

    if (items?.length === 0 && !isLoading) {
        return <EmptyTable/>
    }

    return (
        <div className="container h-100 d-flex flex-column mb-3">
            {isLoading ?
                <div className="spinner-border text-primary m-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                : items.map(item => <ProductTableRow key={item.id} item={item}/>)
            }
        </div>
    );
};

export default ProductTable;