import React, { useCallback, useState } from "react";
import { selectProduct } from "../../../../services/api/product";

const ProductTableRow = ({ item }) => {
    console.log("item");
    
    const [isProductCheck, setIsProductCheck] = useState(item?.checked || false);

    const handleProductCheck = useCallback(e => {
        setIsProductCheck(e.target.checked);
        selectProduct({
            product_id: item.id,
            select: e.target.checked,
        }).then(() => {
            setIsProductCheck(e.target.checked);
        });
    }, [item.id]);

    return (
        <div className="card border-primary mb-3 px-2 pt-2 pb-3">
            <div className="d-flex g-0">
                <div className="form-check m-auto">
                    <input
                        className="form-check-input"
                        checked={isProductCheck}
                        onChange={handleProductCheck}
                        type="checkbox"
                        value=""
                    />
                </div>
                <div className="card-boby d-flex">
                    <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-primary-emphasis fs-6 fw-light">{item.description}</p>
                        <p className="card-text"><small className="text-body-secondary">Stock: {item.stock}</small></p>
                    </div>
                    <p className="card-text w-25 px-2 fs-4 text-end">{item.price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductTableRow;
