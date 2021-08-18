import React from 'react';
import { CgQuote } from 'react-icons/cg';
import './style.scss';
import { motion } from 'framer-motion';
import { fade } from '../../animation';
import { useScroll } from '../UseScroll';

const Quote = () => {
    const [element, controls] = useScroll();
    return (
        <div className="luka-radoja">
            <div className="quote">
                <CgQuote size={100} value={{ color: "282828" }} />
            </div>
            <motion.p ref={element} animate={controls} initial='hidden' variants={fade}>U životu sam dobio samo jednu nagradu iz ruku Meše Selimovića 1958. godine. Drugu nagradu dali su mi radni
                ljudi Jugometal-a. Jugometal nagradi svakog domaćina koji dođe poslom u ovaj dom. Poznajem mnoge domaćine
                koji ovde dođu da se odmore a ne kupe jer se ovde ne trguje nego prodaje. Vi znate da je produhovljena
                domaćinska prodaja vid umetnosti.</motion.p>
            <h5>- Dr. Luka Radoja</h5>
        </div>
    )
}


export default Quote;