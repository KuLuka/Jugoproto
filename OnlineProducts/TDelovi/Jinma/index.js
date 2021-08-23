import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../../../redux/Products/products.actions';
import { useHistory, useParams } from 'react-router-dom';
import './../../style.scss'
import { addProduct } from '../../../../redux/Cart/cart.actions';


const mapState = ({ productsData }) => ({
    products: productsData.products
})

const Jinma = () => {

    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>
                    <h2>Jinma</h2>
                </div>
            </div>

            <Product />
        </>
    )
}


const Product = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { products } = useSelector(mapState);

    const { data, queryDoc, isLastPage } = products

    useEffect(() => {
        dispatch(
            fetchProductsStart({ filterType })
        )

    }, [filterType]);


    if (!Array.isArray(data)) return null;

    const filterData = data.filter(el => el.productCategory === 'Traktorski Delovi')



    return (
        <div className="category-product max-width">
            <div className="grid-prod">
                {filterData.map(product => {
                    const { productName, productVP, productMP } = product;

                    const configAddToCartBtn = {
                        type: 'button'
                    };

                    const handleAddToCart = (product) => {
                        if (!product) return;
                        dispatch(
                            addProduct(
                                product
                            )
                        );

                    };

                    return (
                        <div className='poljo-proizvodi'>
                            <div className='product-img'>
                            </div>
                            <div className="prod-info prodavnica-info">
                                <h4>{productName}</h4>
                                <div className="h-line"></div>
                                <p>Cena MP <span style={{ color: '#292929', fontWeight: '500' }}>{productMP} RSD</span></p>

                                <p>Cena VP <span style={{ color: '#292929', fontWeight: '500' }}>{productVP} RSD</span></p>

                                <a className='prod-btn'
                                    style={{ cursor: 'pointer' }}
                                    {...configAddToCartBtn}
                                    onClick={() => handleAddToCart(product)}>
                                    Dodajte u korpu
                                </a>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Jinma;


