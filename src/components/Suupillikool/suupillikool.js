import React from 'react';
import spkool from '../../assets/spkool.JPG';
import './suupillikool.css';

const Suupillikool = () => (
    <div className="suupillikool">
        <h1 className="title">Suupillikool</h1>
        {/* <div className="image"></div> */}
        <img className="image" src={spkool} alt="" />
        <p className="text1">Algajate õpitoas osalemine ei eelda vähimaidki muusikalisi 
            teadmisi! Edasijõudnu õpituba eeldab esmaseid teadmisi 
            suupilli mängimisest (esimeses positsioonis mängimine). 
            Suupill on maailma kõige populaarsem muusikainstrument ning 
            see on ka üks lihtsamini omandatav/mängitav pill (vähemalt 
            algaja/harrastaja tasemel). Suupill on sobilik kõigile 
            inimestele igas vanuses, ei ole oluline, kas Sulle on 
            varasemalt „elevant kõrva peale astunud!“ või mitte suupillist
             saab iga inimene loo kätte kui vaid natuke püüab!</p>
        <p className="text2">Õpitubades kasutame diatoonilist suupilli helistikus „C“. 
            Kui Sul ei ole suupilli, siis pakume võimalust koos 
            registreerimisega soetada ka endale esimene suupill (valik 
            allpool). Suupilli valib Sulle välja õpitoa läbiviija. 
            Sellega seoses võid olla kindel, et oled saanud parima 
            hinna/kvaliteedi suhtega pilli. Lisaks tehakse pillile ka 
            eelkontroll ning vajadusel kohendatakse Sinu pilli, et see 
            oleks paremini mängitav.</p>
    </div>
)

export default Suupillikool;