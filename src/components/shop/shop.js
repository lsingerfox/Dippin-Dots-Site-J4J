import React, { Component } from 'react';

export default class ShopProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading:false,
            error:false
        };
    }    

    componentDidMount() {
        fetch("https://backend-j4jmtdb.herokuapp.com/products")
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            this.setState({
                items: data.data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting items ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderItems() {
        const itemsHtml = this.state.items.map(item => (
            <div className='shop-product_grid'>
                <div className="shop-product_title" key={item.id}>
                    <h3>{item.title}</h3> 
                </div>
                <img src={item.image} className="shop-product_img" />
                <div className='shop-product_price'>
                    ${item.price}.00
                </div>
            </div>
        ))

        return itemsHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='shop-products'>
                    <div className='shop-product'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='shop-products'>
                    <div className="shop-product">
                        {this.renderItems()}
                    </div>
                </div>
            )
        }
    }
}