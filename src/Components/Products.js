import React from 'react';
import { useDispatch } from 'react-redux';

import JsonData from '../Data/JsonData.json';
import { incrementCart  } from '../Redux/reducer/CartReducer';


const ProductList = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {JsonData.poducts.map(product =>
                        <div className='col' key={product.id}>
                            <div className='card m-1' style={{ "width": "18rem", "height": "25rem", "textAlign": "center" }}>
                                <img className='card-img-top' src={product.src} style={{ "width": "15rem", "height": "25rem", "textAlign": "center" }} />
                                <p className='card-title' style={{ "width": "15rem", "height": "25rem", "textAlign": "center" }}>{product.name} | ${product.price}</p>
                                <div className='card-body'>
                                    <button className='btn btn-primary ml-auto' onClick={() => dispatch(incrementCart({
                                        prodctName: product.name,
                                        prodctPrice: product.price
                                    }))}>Add</button> &nbsp;
                                    <button className='btn btn-primary ml-auto'>Remove</button>
                                </div>
                            </div>
                        </div>
                    )

                    }
                </div>
            </div>
        </div>
    )
}
export default ProductList;