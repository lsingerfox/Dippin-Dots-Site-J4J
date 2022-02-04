import React, { Component } from 'react';

import axios from 'axios';

export default class ShopProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            status:false
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/products"
        ).then (response => {
          console.log(response.data.data)
        this.setState({
            products:response.data.data,
            status:true
        })
        }).catch(error => {
            console.log("getProducts error", error)
        })
    }

    render() {
        const shop = this.state.products.map(product=>{
            <div className='shop-product'>
                <img scr = {product.image} className='shop-product_img' />
                <div className='shop-product_title'>
                    {product.title}
                </div>
                <div className='shop-product_price'>
                    {product.price}
                </div>
            </div>
        })
        return (
          <div className='shop-products'>
                {shop}
            </div>
        )
    }
}