import React from 'react';
import './piletid.css';

const Piletid = () => (
    <div className="background">
        <div className="grid">
            <h1 className="title">Piletid ja Passid</h1>
            <div className="piletid">
                <p className="osta">Osta festivali pass juba aegsalt Piletilevi müügikohtadest!</p>
                <div className="hinnad-grid">
                    <div className="pass">
                        <h3>Pass</h3>
                        <p>Täispilet kuni 31.05 <b> 22€</b></p>
                        <p>Alates 01.06 - 16.08<b> 27€</b></p>
                        <p>Alates 17.08<b> 35€</b></p>
                    </div>            
                    <div className="pilt">
                    </div>            
                    <div className="reede">
                        <h3>Reede</h3>
                        <p>Täispilet kuni 31.05<b> 15€</b></p>
                        <p>Alates 01.06 - 16.08<b> 20€</b></p>
                        <p>Alates 17.08<b> 23€</b></p>
                        <p>Väravad avatakse kell 17.00</p>
                    </div>            
                    <div className="laupäev">
                        <h3>Laupäev</h3>
                        <p>Täispilet kuni 31.05<b> 15€</b></p>
                        <p>Alates 01.06 - 16.08<b> 20€</b></p>
                        <p>Alates 17.08<b> 23€</b></p>
                        <p>Väravad avatakse kell 12.00</p>
                    </div>
                </div>
            </div>
            <div className="footer">
            <p>Päevapilet laps 8-16a, pensionär ja 
                erivajadustega kliendi saatja 15€ (erivajadustega 
                klient tasuta)<br/>Pass laps 8-16a ja pensionär 20€<br/>
    Pass erivajadustega kliendi saatja 20€ (erivajadustega klient tasuta)</p>
            <p>Lastele vanuses kuni 7a (k.a) sissepääs tasuta</p>
        </div>
        </div>
    </div>
)

export default Piletid;