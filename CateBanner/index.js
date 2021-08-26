import React from 'react';
import './style.scss'


const CateBanner = (props) => {
    return (
        <div className={props.className}>
            <div className="cate-banner-info max-width">
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default CateBanner;