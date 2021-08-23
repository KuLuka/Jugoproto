import React from 'react';
import { Link } from 'react-router-dom';

import ProdBanner from '../../ProdBanner';

// import TDeloviProducts from './TDeloviProducts';
// import { Jinnma } from './TDeloviList';

const TDelovi = () => {
    return (

        <>
            <ProdBanner h1={'Traktorski delovi'} p={''} />
            <div className="six-grid-system">
                <div className="box">
                    <h2>Jinma</h2>
                    <div className="box-brands">
                    </div>
                    <Link to='/prodavnica/traktorski-delovi/jinma'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>IMT</h2>
                    <div className="box-brands">
                    </div>
                    <Link to='/prodavnica/traktorski-delovi/imt'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Landini</h2>
                    <div className="box-brands">
                    </div>
                    <Link to='/prodavnica/traktorski-delovi/landini'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Ferguson</h2>
                    <div className="box-brands">
                    </div>
                    <Link to='/prodavnica/traktorski-delovi/massey-ferguson'>Detaljnije</Link>
                </div>

                <div className="box desktop-none" style={{ borderRight: 'none' }}></div>
                <div className="box desktop-none"></div>
            </div>
        </>
    )
}

export default TDelovi;