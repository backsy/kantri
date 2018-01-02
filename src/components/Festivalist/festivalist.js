import React from 'react';
import './festivalist.css';
import festivaliMees from '../../assets/mallu.jpg'

const Festivalist = () => (
    <div className="grid-wrap">
        <div className="festivalist">
            <h1>Festivalist</h1>
            <div className="grid-container">
                <img className="image" src={festivaliMees} alt="" />
                <p className="p1">
                    Juba neljandat korda avab Urissaare Rantšo oma väravad kõikidele 
                    kantrisõpradele. Teid ootab Eesti vingeim farmifiilingufestival – 
                    Urissaare Kantri 2018! 
                </p>
                <p className="p2">
                    17. ja 18. augustil olete oodatud nautima kantrifestivali melu 
                    Univere külas, Mulgi vallas asuva Urissaare Rantšo õuele. 
                    Festivalil ootab teid kaasahaarav muusikaprogramm – mitmel
                    laval astuvad üles omanäolised ansamblid ning saloonis toimub 
                    line-tantsu pidu hommikuni!
                </p>        
                <p className="p3">
                    Lisaks pakub festival unustamatuid elamusi kaasahaaravate 
                    võistlusmängude, atraktsioonide ja kohalike talutootjate laadaga! 
                    Pisipere festivalimeeleolu hoiab üleval lastealal toimetav 
                    kauboipreili, kelle juhtimisel toimuvad erinevad mängud, 
                    meisterdamine, joonistamine, näomaalingud ja loomulikult heinas 
                    mõllamine.
                </p>        
                <p className="p4">
                    Luba endale suve lõpus mõnus, mahe ja unustamatu festivalielamus. 
                    Päevapiletid ja passid Piletilevist ja kohapealt.
                </p>
                <p className="p5">
                    Muusikaline programm täieneb jooksvalt - kõige värskem info on 
                    kättesaadav meie kodulehel Urissaare Rantšo ning Urissaare Kantri 
                    2018 Facebooki lehel.
                </p>
            </div>
        </div>
    </div>
)

export default Festivalist;