
import { useState } from 'react';
import React from 'react';
import { useEffect } from "react";
import { Link, createSearchParams } from 'react-router-dom';
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Styles/Donate.css";
import "../Styles/Main.css";
import Geocode from "react-geocode";

const orase = [
    { value: 'Abrud' , label: 'Abrud' },
{ value: 'Adjud' , label: 'Adjud' },
{ value: 'Agnita' , label: 'Agnita' },
{ value: 'Aiud' , label: 'Aiud' },
{ value: 'Alba Iulia' , label: 'Alba Iulia' },
{ value: 'Aleșd' , label: 'Aleșd' },
{ value: 'Alexandria' , label: 'Alexandria' },
{ value: 'Amara' , label: 'Amara' },
{ value: 'Anina' , label: 'Anina' },
{ value: 'Aninoasa' , label: 'Aninoasa' },
{ value: 'Arad' , label: 'Arad' },
{ value: 'Ardud' , label: 'Ardud' },
{ value: 'Avrig' , label: 'Avrig' },
{ value: 'Azuga' , label: 'Azuga' },
{ value: 'Babadag' , label: 'Babadag' },
{ value: 'Băbeni' , label: 'Băbeni' },
{ value: 'Bacău' , label: 'Bacău' },
{ value: 'Baia de Aramă' , label: 'Baia de Aramă' },
{ value: 'Baia de Arieș' , label: 'Baia de Arieș' },
{ value: 'Baia Mare' , label: 'Baia Mare' },
{ value: 'Baia Sprie' , label: 'Baia Sprie' },
{ value: 'Băicoi' , label: 'Băicoi' },
{ value: 'Băile Govora' , label: 'Băile Govora' },
{ value: 'Băile Herculane' , label: 'Băile Herculane' },
{ value: 'Băile Olănești' , label: 'Băile Olănești' },
{ value: 'Băile Tușnad' , label: 'Băile Tușnad' },
{ value: 'Băilești' , label: 'Băilești' },
{ value: 'Bălan' , label: 'Bălan' },
{ value: 'Bălcești' , label: 'Bălcești' },
{ value: 'Balș' , label: 'Balș' },
{ value: 'Baraolt' , label: 'Baraolt' },
{ value: 'Bârlad' , label: 'Bârlad' },
{ value: 'Bechet' , label: 'Bechet' },
{ value: 'Beclean' , label: 'Beclean' },
{ value: 'Beiuș' , label: 'Beiuș' },
{ value: 'Berbești' , label: 'Berbești' },
{ value: 'Berești' , label: 'Berești' },
{ value: 'Bicaz' , label: 'Bicaz' },
{ value: 'Bistrița' , label: 'Bistrița' },
{ value: 'Blaj' , label: 'Blaj' },
{ value: 'Bocșa' , label: 'Bocșa' },
{ value: 'Boldești-Scăeni' , label: 'Boldești-Scăeni' },
{ value: 'Bolintin-Vale' , label: 'Bolintin-Vale' },
{ value: 'Borșa' , label: 'Borșa' },
{ value: 'Borsec' , label: 'Borsec' },
{ value: 'Botoșani' , label: 'Botoșani' },
{ value: 'Brad' , label: 'Brad' },
{ value: 'Bragadiru' , label: 'Bragadiru' },
{ value: 'Brăila' , label: 'Brăila' },
{ value: 'Brașov' , label: 'Brașov' },
{ value: 'Breaza' , label: 'Breaza' },
{ value: 'Brezoi' , label: 'Brezoi' },
{ value: 'Broșteni' , label: 'Broșteni' },
{ value: 'Bucecea' , label: 'Bucecea' },
{ value: 'București' , label: 'București' },
{ value: 'Budești' , label: 'Budești' },
{ value: 'Buftea' , label: 'Buftea' },
{ value: 'Buhuși' , label: 'Buhuși' },
{ value: 'Bumbești-Jiu' , label: 'Bumbești-Jiu' },
{ value: 'Bușteni' , label: 'Bușteni' },
{ value: 'Buzău' , label: 'Buzău' },
{ value: 'Buziaș' , label: 'Buziaș' },
{ value: 'Cajvana' , label: 'Cajvana' },
{ value: 'Calafat' , label: 'Calafat' },
{ value: 'Călan' , label: 'Călan' },
{ value: 'Călărași' , label: 'Călărași' },
{ value: 'Călimănești' , label: 'Călimănești' },
{ value: 'Câmpeni' , label: 'Câmpeni' },
{ value: 'Câmpia Turzii' , label: 'Câmpia Turzii' },
{ value: 'Câmpina' , label: 'Câmpina' },
{ value: 'Câmpulung Moldovenesc' , label: 'Câmpulung Moldovenesc' },
{ value: 'Câmpulung' , label: 'Câmpulung' },
{ value: 'Caracal' , label: 'Caracal' },
{ value: 'Caransebeș' , label: 'Caransebeș' },
{ value: 'Carei' , label: 'Carei' },
{ value: 'Cavnic' , label: 'Cavnic' },
{ value: 'Căzănești' , label: 'Căzănești' },
{ value: 'Cehu Silvaniei' , label: 'Cehu Silvaniei' },
{ value: 'Cernavodă' , label: 'Cernavodă' },
{ value: 'Chișineu-Criș' , label: 'Chișineu-Criș' },
{ value: 'Chitila' , label: 'Chitila' },
{ value: 'Ciacova' , label: 'Ciacova' },
{ value: 'Cisnădie' , label: 'Cisnădie' },
{ value: 'Cluj-Napoca' , label: 'Cluj-Napoca' },
{ value: 'Codlea' , label: 'Codlea' },
{ value: 'Comănești' , label: 'Comănești' },
{ value: 'Comarnic' , label: 'Comarnic' },
{ value: 'Constanța' , label: 'Constanța' },
{ value: 'Copșa Mică' , label: 'Copșa Mică' },
{ value: 'Corabia' , label: 'Corabia' },
{ value: 'Costești' , label: 'Costești' },
{ value: 'Covasna' , label: 'Covasna' },
{ value: 'Craiova' , label: 'Craiova' },
{ value: 'Cristuru Secuiesc' , label: 'Cristuru Secuiesc' },
{ value: 'Cugir' , label: 'Cugir' },
{ value: 'Curtea de Argeș' , label: 'Curtea de Argeș' },
{ value: 'Curtici' , label: 'Curtici' },
{ value: 'Dăbuleni' , label: 'Dăbuleni' },
{ value: 'Darabani' , label: 'Darabani' },
{ value: 'Dărmănești' , label: 'Dărmănești' },
{ value: 'Dej' , label: 'Dej' },
{ value: 'Deta' , label: 'Deta' },
{ value: 'Deva' , label: 'Deva' },
{ value: 'Dolhasca' , label: 'Dolhasca' },
{ value: 'Dorohoi' , label: 'Dorohoi' },
{ value: 'Drăgănești-Olt' , label: 'Drăgănești-Olt' },
{ value: 'Drăgășani' , label: 'Drăgășani' },
{ value: 'Dragomirești' , label: 'Dragomirești' },
{ value: 'Drobeta-Turnu Severin' , label: 'Drobeta-Turnu Severin' },
{ value: 'Dumbrăveni' , label: 'Dumbrăveni' },
{ value: 'Eforie' , label: 'Eforie' },
{ value: 'Făgăraș' , label: 'Făgăraș' },
{ value: 'Făget' , label: 'Făget' },
{ value: 'Fălticeni' , label: 'Fălticeni' },
{ value: 'Făurei' , label: 'Făurei' },
{ value: 'Fetești' , label: 'Fetești' },
{ value: 'Fieni' , label: 'Fieni' },
{ value: 'Fierbinți-Târg' , label: 'Fierbinți-Târg' },
{ value: 'Filiași' , label: 'Filiași' },
{ value: 'Flămânzi' , label: 'Flămânzi' },
{ value: 'Focșani' , label: 'Focșani' },
{ value: 'Frasin' , label: 'Frasin' },
{ value: 'Fundulea' , label: 'Fundulea' },
{ value: 'Găești' , label: 'Găești' },
{ value: 'Galați' , label: 'Galați' },
{ value: 'Gătaia' , label: 'Gătaia' },
{ value: 'Geoagiu' , label: 'Geoagiu' },
{ value: 'Gheorgheni' , label: 'Gheorgheni' },
{ value: 'Gherla' , label: 'Gherla' },
{ value: 'Ghimbav' , label: 'Ghimbav' },
{ value: 'Giurgiu' , label: 'Giurgiu' },
{ value: 'Gura Humorului' , label: 'Gura Humorului' },
{ value: 'Hârlău' , label: 'Hârlău' },
{ value: 'Hârșova' , label: 'Hârșova' },
{ value: 'Hațeg' , label: 'Hațeg' },
{ value: 'Horezu' , label: 'Horezu' },
{ value: 'Huedin' , label: 'Huedin' },
{ value: 'Hunedoara' , label: 'Hunedoara' },
{ value: 'Huși' , label: 'Huși' },
{ value: 'Ianca' , label: 'Ianca' },
{ value: 'Iași' , label: 'Iași' },
{ value: 'Iernut' , label: 'Iernut' },
{ value: 'Ineu' , label: 'Ineu' },
{ value: 'Însurăței' , label: 'Însurăței' },
{ value: 'Întorsura Buzăului' , label: 'Întorsura Buzăului' },
{ value: 'Isaccea' , label: 'Isaccea' },
{ value: 'Jibou' , label: 'Jibou' },
{ value: 'Jimbolia' , label: 'Jimbolia' },
{ value: 'Lehliu Gară' , label: 'Lehliu Gară' },
{ value: 'Lipova' , label: 'Lipova' },
{ value: 'Liteni' , label: 'Liteni' },
{ value: 'Livada' , label: 'Livada' },
{ value: 'Luduș' , label: 'Luduș' },
{ value: 'Lugoj' , label: 'Lugoj' },
{ value: 'Lupeni' , label: 'Lupeni' },
{ value: 'Măcin' , label: 'Măcin' },
{ value: 'Măgurele' , label: 'Măgurele' },
{ value: 'Mangalia' , label: 'Mangalia' },
{ value: 'Mărășești' , label: 'Mărășești' },
{ value: 'Marghita' , label: 'Marghita' },
{ value: 'Medgidia' , label: 'Medgidia' },
{ value: 'Mediaș' , label: 'Mediaș' },
{ value: 'Miercurea Ciuc' , label: 'Miercurea Ciuc' },
{ value: 'Miercurea Nirajului' , label: 'Miercurea Nirajului' },
{ value: 'Miercurea Sibiului' , label: 'Miercurea Sibiului' },
{ value: 'Mihăilești' , label: 'Mihăilești' },
{ value: 'Milișăuți' , label: 'Milișăuți' },
{ value: 'Mioveni' , label: 'Mioveni' },
{ value: 'Mizil' , label: 'Mizil' },
{ value: 'Moinești' , label: 'Moinești' },
{ value: 'Moldova Nouă' , label: 'Moldova Nouă' },
{ value: 'Moreni' , label: 'Moreni' },
{ value: 'Motru' , label: 'Motru' },
{ value: 'Murfatlar' , label: 'Murfatlar' },
{ value: 'Murgeni' , label: 'Murgeni' },
{ value: 'Nădlac' , label: 'Nădlac' },
{ value: 'Năsăud' , label: 'Năsăud' },
{ value: 'Năvodari' , label: 'Năvodari' },
{ value: 'Negrești' , label: 'Negrești' },
{ value: 'Negrești-Oaș' , label: 'Negrești-Oaș' },
{ value: 'Negru Vodă' , label: 'Negru Vodă' },
{ value: 'Nehoiu' , label: 'Nehoiu' },
{ value: 'Novaci' , label: 'Novaci' },
{ value: 'Nucet' , label: 'Nucet' },
{ value: 'Ocna Mureș' , label: 'Ocna Mureș' },
{ value: 'Ocna Sibiului' , label: 'Ocna Sibiului' },
{ value: 'Ocnele Mari' , label: 'Ocnele Mari' },
{ value: 'Odobești' , label: 'Odobești' },
{ value: 'Odorheiu Secuiesc' , label: 'Odorheiu Secuiesc' },
{ value: 'Oltenița' , label: 'Oltenița' },
{ value: 'Onești' , label: 'Onești' },
{ value: 'Oradea' , label: 'Oradea' },
{ value: 'Orăștie' , label: 'Orăștie' },
{ value: 'Oravița' , label: 'Oravița' },
{ value: 'Orșova' , label: 'Orșova' },
{ value: 'Oțelu Roșu' , label: 'Oțelu Roșu' },
{ value: 'Otopeni' , label: 'Otopeni' },
{ value: 'Ovidiu' , label: 'Ovidiu' },
{ value: 'Panciu' , label: 'Panciu' },
{ value: 'Pâncota' , label: 'Pâncota' },
{ value: 'Pantelimon' , label: 'Pantelimon' },
{ value: 'Pașcani' , label: 'Pașcani' },
{ value: 'Pătârlagele' , label: 'Pătârlagele' },
{ value: 'Pecica' , label: 'Pecica' },
{ value: 'Petrila' , label: 'Petrila' },
{ value: 'Petroșani' , label: 'Petroșani' },
{ value: 'Piatra Neamț' , label: 'Piatra Neamț' },
{ value: 'Piatra-Olt' , label: 'Piatra-Olt' },
{ value: 'Pitești' , label: 'Pitești' },
{ value: 'Ploiești' , label: 'Ploiești' },
{ value: 'Plopeni' , label: 'Plopeni' },
{ value: 'Podu Iloaiei' , label: 'Podu Iloaiei' },
{ value: 'Pogoanele' , label: 'Pogoanele' },
{ value: 'Popești-Leordeni' , label: 'Popești-Leordeni' },
{ value: 'Potcoava' , label: 'Potcoava' },
{ value: 'Predeal' , label: 'Predeal' },
{ value: 'Pucioasa' , label: 'Pucioasa' },
{ value: 'Răcari' , label: 'Răcari' },
{ value: 'Rădăuți' , label: 'Rădăuți' },
{ value: 'Râmnicu Sărat' , label: 'Râmnicu Sărat' },
{ value: 'Râmnicu Vâlcea' , label: 'Râmnicu Vâlcea' },
{ value: 'Râșnov' , label: 'Râșnov' },
{ value: 'Recaș' , label: 'Recaș' },
{ value: 'Reghin' , label: 'Reghin' },
{ value: 'Reșița' , label: 'Reșița' },
{ value: 'Roman' , label: 'Roman' },
{ value: 'Roșiorii de Vede' , label: 'Roșiorii de Vede' },
{ value: 'Rovinari' , label: 'Rovinari' },
{ value: 'Roznov' , label: 'Roznov' },
{ value: 'Rupea' , label: 'Rupea' },
{ value: 'Săcele' , label: 'Săcele' },
{ value: 'Săcueni' , label: 'Săcueni' },
{ value: 'Salcea' , label: 'Salcea' },
{ value: 'Săliște' , label: 'Săliște' },
{ value: 'Săliștea de Sus' , label: 'Săliștea de Sus' },
{ value: 'Salonta' , label: 'Salonta' },
{ value: 'Sângeorgiu de Pădure' , label: 'Sângeorgiu de Pădure' },
{ value: 'Sângeorz-Băi' , label: 'Sângeorz-Băi' },
{ value: 'Sânnicolau Mare' , label: 'Sânnicolau Mare' },
{ value: 'Sântana' , label: 'Sântana' },
{ value: 'Sărmașu' , label: 'Sărmașu' },
{ value: 'Satu Mare' , label: 'Satu Mare' },
{ value: 'Săveni' , label: 'Săveni' },
{ value: 'Scornicești' , label: 'Scornicești' },
{ value: 'Sebeș' , label: 'Sebeș' },
{ value: 'Sebiș' , label: 'Sebiș' },
{ value: 'Segarcea' , label: 'Segarcea' },
{ value: 'Seini' , label: 'Seini' },
{ value: 'Sfântu Gheorghe' , label: 'Sfântu Gheorghe' },
{ value: 'Sibiu' , label: 'Sibiu' },
{ value: 'Sighetu Marmației' , label: 'Sighetu Marmației' },
{ value: 'Sighișoara' , label: 'Sighișoara' },
{ value: 'Simeria' , label: 'Simeria' },
{ value: 'Șimleu Silvaniei' , label: 'Șimleu Silvaniei' },
{ value: 'Sinaia' , label: 'Sinaia' },
{ value: 'Siret' , label: 'Siret' },
{ value: 'Slănic' , label: 'Slănic' },
{ value: 'Slănic-Moldova' , label: 'Slănic-Moldova' },
{ value: 'Slatina' , label: 'Slatina' },
{ value: 'Slobozia' , label: 'Slobozia' },
{ value: 'Solca' , label: 'Solca' },
{ value: 'Șomcuta Mare' , label: 'Șomcuta Mare' },
{ value: 'Sovata' , label: 'Sovata' },
{ value: 'Ștefănești, Argeș' , label: 'Ștefănești, Argeș' },
{ value: 'Ștefănești, Botoșani' , label: 'Ștefănești, Botoșani' },
{ value: 'Ștei' , label: 'Ștei' },
{ value: 'Strehaia' , label: 'Strehaia' },
{ value: 'Suceava' , label: 'Suceava' },
{ value: 'Sulina' , label: 'Sulina' },
{ value: 'Tălmaciu' , label: 'Tălmaciu' },
{ value: 'Țăndărei' , label: 'Țăndărei' },
{ value: 'Târgoviște' , label: 'Târgoviște' },
{ value: 'Târgu Bujor' , label: 'Târgu Bujor' },
{ value: 'Târgu Cărbunești' , label: 'Târgu Cărbunești' },
{ value: 'Târgu Frumos' , label: 'Târgu Frumos' },
{ value: 'Târgu Jiu' , label: 'Târgu Jiu' },
{ value: 'Târgu Lăpuș' , label: 'Târgu Lăpuș' },
{ value: 'Târgu Mureș' , label: 'Târgu Mureș' },
{ value: 'Târgu Neamț' , label: 'Târgu Neamț' },
{ value: 'Târgu Ocna' , label: 'Târgu Ocna' },
{ value: 'Târgu Secuiesc' , label: 'Târgu Secuiesc' },
{ value: 'Târnăveni' , label: 'Târnăveni' },
{ value: 'Tășnad' , label: 'Tășnad' },
{ value: 'Tăuții-Măgherăuș' , label: 'Tăuții-Măgherăuș' },
{ value: 'Techirghiol' , label: 'Techirghiol' },
{ value: 'Tecuci' , label: 'Tecuci' },
{ value: 'Teiuș' , label: 'Teiuș' },
{ value: 'Țicleni' , label: 'Țicleni' },
{ value: 'Timișoara' , label: 'Timișoara' },
{ value: 'Tismana' , label: 'Tismana' },
{ value: 'Titu' , label: 'Titu' },
{ value: 'Toplița' , label: 'Toplița' },
{ value: 'Topoloveni' , label: 'Topoloveni' },
{ value: 'Tulcea' , label: 'Tulcea' },
{ value: 'Turceni' , label: 'Turceni' },
{ value: 'Turda' , label: 'Turda' },
{ value: 'Turnu Măgurele' , label: 'Turnu Măgurele' },
{ value: 'Ulmeni' , label: 'Ulmeni' },
{ value: 'Ungheni' , label: 'Ungheni' },
{ value: 'Uricani' , label: 'Uricani' },
{ value: 'Urlați' , label: 'Urlați' },
{ value: 'Urziceni' , label: 'Urziceni' },
{ value: 'Valea lui Mihai' , label: 'Valea lui Mihai' },
{ value: 'Vălenii de Munte' , label: 'Vălenii de Munte' },
{ value: 'Vânju Mare' , label: 'Vânju Mare' },
{ value: 'Vașcău' , label: 'Vașcău' },
{ value: 'Vaslui' , label: 'Vaslui' },
{ value: 'Vatra Dornei' , label: 'Vatra Dornei' },
{ value: 'Vicovu de Sus' , label: 'Vicovu de Sus' },
{ value: 'Victoria' , label: 'Victoria' },
{ value: 'Videle' , label: 'Videle' },
{ value: 'Vișeu de Sus' , label: 'Vișeu de Sus' },
{ value: 'Vlăhița' , label: 'Vlăhița' },
{ value: 'Voluntari' , label: 'Voluntari' },
{ value: 'Vulcan' , label: 'Vulcan' },
{ value: 'Zalău' , label: 'Zalău' },
{ value: 'Zărnești' , label: 'Zărnești' },
{ value: 'Zimnicea' , label: 'Zimnicea' },
{ value: 'Zlatna' , label: 'Zlatna' },

]
  
const needs = [
    { value: 'HaineCopii', label: 'Haine Copii' },
    { value: 'HaineBebeluși', label: 'Haine Bebeluși' },
    { value: 'HaineAdulti', label: 'Haine Adulti' },
    { value: 'Rechizite', label: 'Rechizite' },
    { value: 'Jucării', label: 'Jucării' },
    { value: 'ProduseNeperisabile', label: 'Produse Neperisabile' },
    { value: 'ProduseDeIgiena', label: 'Produse de igienă' }
]

// const Open = () => {
//     React.useEffect(() => {
//         fetch(`/api/onglist?Oras=${OrasOption}`)
//         .then((res) => res.json())
//         .then((data) => setData(data.ongs));
//     }, []);

//     console.log(data.ongs);
//     if(data.ongs.length != 0) {
//         console.log(data.ongs);
//         navigate( '/donate2', {
//             state: { ongs: data.ongs }
//         });
//     } else {
//         document.getElementById("eroare").style.display="block";
//     }
// };

function Donate() {

    const [isLoggedin, setisLoggedin] = useState(false);

    useEffect(() => {
        fetch(`/api/is`)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.is.is === true){
                setisLoggedin(true);
            }
            else setisLoggedin(false);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setisLoggedin(false);
          }
        )
    }, [])

    const location = useLocation();
    // console.log(location.state.Orase);

     var Optiuni = [];
     var oraseFiltered = [];
     const getOrase = () => {
        var nr = 0;
         for(var i in location.state.Orase){
            let aux = {
                value: location.state.Orase[i],
                label: location.state.Orase[i]
            }
            Optiuni.push(aux);
         }
         
         for (var oras in orase) {
            let ok = 0;
            for (var opt in Optiuni) {
                if(Optiuni[opt].value == orase[oras].value){
                    ok = 1;
                    break;
                }
            }
            if(ok) {
                oraseFiltered.push(orase[oras]);
            }
         }
     }
     getOrase();

    const navigate = useNavigate();
    const [OrasOption, setOrasOption] = useState("");
    const [NevoiOption, setNevoiOption] = useState("");

    const open = async () => {
        let ongs = [];
        let keywd =OrasOption.value.replace(/Ș/g, 'S');
        keywd =keywd.replace(/ș/g, 's');
        keywd =keywd.replace(/Ț/g, 'T');
        keywd =keywd.replace(/ț/g, 't');
        keywd =keywd.replace(/Ă/g, 'A');
        keywd =keywd.replace(/ă/g, 'a');
        keywd =keywd.replace(/Î/g, 'I');
        keywd =keywd.replace(/î/g, 'i');
        keywd =keywd.replace(/Â/g, 'A');
        keywd =keywd.replace(/â/g, 'a');

        try {
            const response = await fetch(`/api/onglist?Oras=${keywd}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
        
            for(var i in result["ongs"]) {
                for(var key in result["ongs"][i]) {
                    if(result["ongs"][i][key] != null) {
                        result["ongs"][i][key] = result["ongs"][i][key].replace(/Þ/g, 'Ț');
                        result["ongs"][i][key] = result["ongs"][i][key].replace(/ª/g, 'Ș');
                    }
                }
                ongs.push(result["ongs"][i]);
            }

            if(ongs.length != 0) {
                Geocode.setRegion("ro");
                Geocode.setLanguage("ro");
                Geocode.setLocationType("ROOFTOP");
            
                let loc = undefined;
                await Geocode.fromAddress(keywd).then(
                    (response) => {
                      const { lat, lng } = response.results[0].geometry.location;
                      loc = {
                        address: keywd,
                        lat: lat,
                        lng: lng,
                      }
                    },
                    (error) => {
                      console.error(error);
                    }
                );  
                    navigate( '/donate2', {
                    state: { ongs: ongs, loc: loc }
                    });
            } else {
                    document.getElementById("eroare").style.display="block";
            }
        } catch (err) {
          console.log(err);
        } 
      };

    return ( 
        <div style={{ backgroundImage: "url(./background2.jpg)", backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed', width: '100vw', height: '100vh'}}>


                <NavBar data={isLoggedin}/>

                <div id="sectionOne">
                    <h1> Caută ONG-uri în apropiere de tine </h1>

                    <div style={{width: '80%', margin: 'auto'}}>
                        <table width={"90%"}> 
                            <tr>
                                <td style={{width: '45%'}}><p style={{fontSize: '25px'}}>Alege orașul:</p></td>
                                <td style={{width: '55%'}}>
                                    <Select
                                        defaultValue={"Choose a city"}
                                        options={oraseFiltered}
                                        onChange={e => setOrasOption(e)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: '45%'}}><p style={{fontSize: '25px'}}>Cuvinte cheie:</p></td>
                                <td style={{width: '55%'}}>
                                    <Select
                                        defaultValue={"Select..."}
                                        options={needs}
                                        onChange={e => setNevoiOption(e)}
                                    />
                                </td>
                            </tr>
                        </table> 
                        <div id="eroare" style={{display: "none"}}> Nu au fost găsite ONG-uri cu aceste criterii.</div>
                        <button style={{width: "25%", marginLeft: '40%', marginRight: 'auto'}} onClick={open}>Caută</button>

                    </div>
            
                </div>  


            <Footer/>

        </div>

    );
}

export default Donate;