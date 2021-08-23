import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';
import { useScroll } from '../../components/UseScroll';

const RezDelovi = () => {
    const [element, controls] = useScroll();
    return (
        <motion.div initial='hidden' variants={pageAnimation} ref={element} animate={controls} className="six-grid-system">
            <div className="box">
                <h2>Traktorski Delovi</h2>
                <div className="box-brands">
                    <p>Jinma</p>
                    <p>IMT</p>
                    <p>Landini</p>
                    <p>Ferguson</p>
                </div>
                <Link to='/prodavnica/traktorski-delovi'>Detaljnije</Link>
            </div>

            <div className="box">
                <h2>Delovi za mašine</h2>
                <div className="box-brands">
                    <p>SIP</p>
                    <p>INO Brežice</p>
                    <p>IMT</p>
                    <p>Bertolini</p>
                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Ulja i maziva</h2>
                <div className="box-brands">
                    <p>Shell</p>
                    <p>Texaco</p>

                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Gume</h2>
                <div className="box-brands">
                    <p>Spoljašnje</p>
                    <p>Unutrašnje</p>

                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Filteri</h2>
                <div className="box-brands box-hide">
                    <p>Jinma</p>
                    <p>IMT</p>
                    <p>Landini</p>
                    <p>Massey Ferguson</p>
                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Kardani</h2>
                <div className="box-brands">
                    <p>Cerjak</p>
                    <p>Dar</p>

                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Akumulatori</h2>
                <div className="box-brands">
                    <p>Extreme</p>
                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box">
                <h2>Razno</h2>
                <div className="box-brands">
                    <p>Trimeri</p>
                    <p>Pumpe</p>
                    <p>Motor brisača</p>
                </div>
                <a href="#">Detaljnije</a>
            </div>

            <div className="box"></div>
        </motion.div>
    )
}


export default RezDelovi;