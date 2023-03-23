import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { IProduct } from "../interface/product";
import { RootState } from "../reducers";
import { addProduct, fetchProducts, removeProduct } from "../slice/product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
    const { value: products, isLoading } = useAppSelector(
        (state: RootState) => state.product
    );
    const dispatch: Dispatch<any> = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const navigate = useNavigate()

    // const onDelete = (id) => {
    //     dispatch(removeProduct(id)).then(()=>{
    //         navigate("/")
    //     })
    // }
    // <button onClick={onDelete(product.id)}>DELETE</button>

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="flex align-item-center">
            {products.map((product: IProduct) => {
                return <div>{product.name} </div>;
                
            })}
        </div>
    );
};

export default ProductsList;
