import React, { useState, useEffect } from "react";
import { auth, fs } from '../component/config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    const getProducts = async() => {
        const productsCollectionRef = collection (fs, 'tblProducts');
        const productsData = await getDocs(productsCollectionRef);
        setProducts(productsData.docs.map((doc)=>({...doc.data(), id:doc.id})));
        // setProducts(productsData);
    };
    getProducts();
}, []);

    return (
        <>
        <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Products</h2>
                        <a className="btn btn-primary btn-xl text-uppercase">
                            <Link to="/add-products" className="nav-link">
                                Add Products
                            </Link>
                        </a>
                    </div>
                    <br></br>
                    {products.length > 0 && (
                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <a className="portfolio-link" >
                                            <img className="img-fluid" src={product.prodURL} alt="..." />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{product.prodTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {products.length < 1 && (
                        <div className="container-fluid"> Please Wait..... </div>
                    )}
                </div>
            </section>
            </>
    )
}