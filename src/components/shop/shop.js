import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';
import BananaSplit from '../../../static/images/products/Banana-Split.png';
import BirthdayCake from '../../../static/images/products/Birthday-Cake.png';
import Chocolate from '../../../static/images/products/Chocolate.png';
import CookieDough from '../../../static/images/products/Cookie-Dough.png';
import CookiesNCream from '../../../static/images/products/Cookies-n-Cream.png';
import CottonCandy from '../../../static/images/products/Cotton-Candy.png';
import RainbowIce from '../../../static/images/products/Rainbow-Ice.png';
import UltimateBrownieBatter from '../../../static/images/products/Ultimate-Brownie-Batter.png';
import Vanilla from '../../../static/images/products/Vanilla.png';

export default class Mini extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="shop-wrapper">
                    <div className="shop-product">
                        <img className="shop-product_img" src={BananaSplit} alt="Banana Split"/>
                        <div className="shop-product_title">
                            Banana Split
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={BirthdayCake} alt="Birthday Cake"/>
                        <div className="shop-product_title">
                            Birthday Cake
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={Chocolate} alt="Chocolate"/>
                        <div className="shop-product_title">
                            Chocolate
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={CookieDough} alt="Cookie Dough"/>
                        <div className="shop-product_title">
                            Cookie Dough
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={CookiesNCream} alt="Cookies N Cream"/>
                        <div className="shop-product_title">
                            Cookies 'N' Cream
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={CottonCandy} alt="Cotton Candy"/>
                        <div className="shop-product_title">
                            Cotton Candy
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={RainbowIce} alt="Rainbow Ice"/>
                        <div className="shop-product_title">
                            Rainbow Ice
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={UltimateBrownieBatter} alt="Ultimate Brownie Batter"/>
                        <div className="shop-product_title">
                            Ultimate Brownie Batter
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                    <div className="shop-product">
                        <img className="shop-product_img" src={Vanilla} alt="Vanilla"/>
                        <div className="shop-product_title">
                            Vanilla
                        </div>
                        <div className="shop-product_price">
                            $5.00
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}