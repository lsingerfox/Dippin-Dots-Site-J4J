import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';
import BS from '../../../static/images/products/Banana-Split.png';
import BC from '../../../static/images/products/Birthday-Cake.png';
import CHO from '../../../static/images/products/Chocolate.png';
import CD from '../../../static/images/products/Cookie-Dough.png';
import CNC from '../../../static/images/products/Cookies-n-Cream.png';
import CC from '../../../static/images/products/Cotton-Candy.png';
import RI from '../../../static/images/products/Rainbow-Ice.png';
import UBB from '../../../static/images/products/Ultimate-Brownie-Batter.jpg';
import VA from '../../../static/images/products/Vanilla.png';

export default class ShopProduct extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='shop-products'>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={BS}/>
                        <div className='shop-product_title'>
                            Banana Split
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={BC}/>
                        <div className='shop-product_title'>
                            Birthday Cake
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={CHO}/>
                        <div className='shop-product_title'>
                            Chocolate
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={CD}/>
                        <div className='shop-product_title'>
                            Cookie Dough
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={CNC}/>
                        <div className='shop-product_title'>
                            Cookies 'n Cream
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={CC}/>
                        <div className='shop-product_title'>
                            Cotton Candy
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={RI}/>
                        <div className='shop-product_title'>
                            Rainbow Ice
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={UBB}/>
                        <div className='shop-product_title'>
                            Ultimate Brownie Batter
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                    <div className='shop-product'>
                        <img className='shop-product_img' src={VA}/>
                        <div className='shop-product_title'>
                            Vanilla
                        </div>
                        <div className='shop-product_price'>
                            $5.00
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}