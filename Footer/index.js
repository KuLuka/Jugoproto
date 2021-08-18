import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = props => {

    return (
        <>
            <footer>
                <div class="jugo-info ">
                    <div class="jugo-adresa">
                        <h4>Adresa</h4>
                        <p>Kneza Miloša 81, 35210 Svilajnac</p>
                        <p>Novosadska 634, 21235 Temerin</p>
                        <p>Beogradski put 17/A, 12000 Požarevac</p>
                    </div>

                    <div class="jugo-mail">
                        <h4>E-mail</h4>
                        <a href="mailto:jugometal.co.rs">jugometal.co.rs</a>
                    </div>

                    <div class="jugo-phone">
                        <h4>Telefon</h4>
                        <p>Svilajnac: 035/312-391</p>
                        <p>Temerin: 021/840-038</p>
                        <p>Požarevac: 012/665-544</p>
                    </div>

                    <div class="jugo-face">
                        <h4>Facebook</h4>
                        <a href="https://facebook.com/jugometal" className="facebook">Jugometa DOO Svilajnac</a>
                    </div>
                </div>

                <div class="jugo-pages ">
                    <div class="page-servis">
                        <h4>Servis</h4>
                        <Link to='/servis'>Originalni delovi, servisiranje</Link>
                    </div>

                    <div class="page-akcija">
                        <h4>Akcija</h4>
                        <p>Budite u toku</p>
                    </div>

                    <div class="page-about">
                        <h4>Jugometal</h4>
                        <Link to='/o-nama'>O Nama</Link>
                    </div>

                    <div class="page-finansiranje">
                        <h4>Finansiranje</h4>
                        <Link to='/finansiranje'>Obnovite poljoprivrednu mehanizaciju</Link>
                    </div>

                    <div class="page-kontakt">
                        <h4>Kontakt</h4>
                        <Link to='/kontakt'>Kako doći do nas</Link>
                    </div>

                    <div class="prodavnica" style={{ display: 'none' }}>
                        <h4>Prodavnica</h4>
                        <Link to='/prodavnica'>Poručite rezervne delove iz naše online prodavnice</Link>
                    </div>

                </div>
            </footer>
            <div class="credits">
                <p>© 2021 Jugometal d.o.o. Sva prava zadržana.</p>
                <div class="credit-cards">
                    <div class="visa"></div>
                    <div class="express"></div>
                    <div class="master"></div>
                    <div class="dina"></div>
                </div>
            </div>
        </>
    )

}


export default Footer;
