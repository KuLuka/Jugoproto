import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
// FramerMotio
import { motion } from 'framer-motion';

const Preporuka = () => {
    return (
        <>
            <div class="ponuda-header">
                <h2>Jugometal Ponuda</h2>
                <p>Pogledajte neke od naših najprodavanijih i najpristupacnijih proizvoda koji su spremi za porudzbine istog
                    trenutka. Pozovite za više informacija i raspitajte se detaljno o stanju, opremi i ceni proizvoda.</p>
            </div>

            <div class="ponuda-products max-width">

                <div class="ponuda-product-item">
                    <div class="solis-60"></div>
                    <div class="product-item-content">
                        <h5>Solis</h5>
                        <h3>Solis 60</h3>
                        <div className="h-line"></div>
                        <p>Solis 60 je univerzalni traktor namenjen za koriscenje u poljoprivredi, komunalne radove i transport.
                        </p>
                        <Link to='/traktori/solis/solis-60'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="yto-504"></div>
                    <div class="product-item-content">
                        <h5>YTO</h5>
                        <h3>504,4 WD</h3>
                        <div className="h-line"></div>
                        <p>Traktor YTO 504,4 WD sa Standard ili Euro kabinom. Standard kabina je oslonjena preko elasticnih ..
                        </p>
                        <Link to='/traktori/yto/yto-504'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="yto-454"></div>
                    <div class="product-item-content">
                        <h5>YTO</h5>
                        <h3>454,4 WD</h3>
                        <div className="h-line"></div>
                        <p>Traktor YTO 454,4 WD sa Standard ili Euro kabinom. Standard kabina je oslonjena preko elasticnih ..
                        </p>
                        <Link to='/traktori/yto/yto-454'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="solis-50"></div>
                    <div class="product-item-content">
                        <h5>Solis</h5>
                        <h3>Solis 50</h3>
                        <div className="h-line"></div>
                        <p>Solis 50 je univerzalni traktor namenjen za koriscenje u poljoprivredi, komunalne radove i transport.
                        </p>
                        <Link to='/traktori/solis/solis-50'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="ursus-presa"></div>
                    <div class="product-item-content">
                        <h5>Ursus</h5>
                        <h3>Balirka</h3>
                        <div className="h-line"></div>
                        <p>Balirke za okrugle bale namenjene su za baliranje slamnatog materijala od 25% vlage. Materijal je
                            valjan u bale precnika 1200mm.
                        </p>
                        <Link to='/stocarstvo/balirke/ursus-balirka-543-a'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="celmak-prikolica"></div>
                    <div class="product-item-content">
                        <h5>Čelmak</h5>
                        <h3>Prikolica</h3>
                        <div className="h-line"></div>
                        <p>Prikolica Čelmak kapaciteta 8t, sirine 2200mm i duzine 5900mm. Visina poklopca je 700mm sa dodatnom
                            visinom od 300mm.
                        </p>
                        <Link to='/transport/prikolice/dvoosovinska-prikolica-8-t'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="agrisprint-kosacica"></div>
                    <div class="product-item-content">
                        <h5>Agrisprint</h5>
                        <h3>Kosacica</h3>
                        <div className="h-line"></div>
                        <p>Rotaciona kosacica Agrisprint dolazi sa 950mm duzinom i 2850mm sirinom. Tezina iznosi 350kg, dok je
                            potrebna snaga traktora 40KS..
                        </p>
                        <Link to='/stocarstvo/kosacice/rotaciona-kosacica-agrisprint-135-165'>Detaljnije</Link>
                    </div>
                </div>

                <div class="ponuda-product-item">
                    <div class="motalica-metalfach"></div>
                    <div class="product-item-content">
                        <h5>Metal-Fach</h5>
                        <h3>Motalica </h3>
                        <div className="h-line"></div>
                        <p>Umotač bala za bale Z237 Z opremljen je sistemom koji rotira osovine podnih točaka, što olakšava transport mašine.
                        </p>
                        <Link to='/stocarstvo/motalice/motalica-z-237'>Detaljnije</Link>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Preporuka;