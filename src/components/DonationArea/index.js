import './styles.css';

import img from '../../assets/imagens/manutencao.jpg'

import {useEffect} from 'react';

const DonationAarea = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    return(
        <div className="container">
           <img src={img} className="maintenance"/> 
        </div>
    )
};

export default DonationAarea;