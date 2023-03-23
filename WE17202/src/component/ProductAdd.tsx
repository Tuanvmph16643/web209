import React from 'react'
import {useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../interface/product';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slice/product';




const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: {errors} 
    } = useForm<IProduct>();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onHandleSubmit: SubmitHandler<IProduct> = (data)=>{
        dispatch(addProduct(data)).then(()=>{
            navigate("/")
        })
    }



  return (
    <div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <input type="text" {...register("name",{required: true})}/>
            {errors.name && <span>This field is required</span>}

            <button>Submit</button>
        </form>
    </div>
  )
}

export default ProductAdd