import './styles.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/imagens/logo.jpg';
import { useState } from 'react';


const Header = () => {  
    const [isOpen, setOpen] = useState(false)

    const clickOpen = () => {
        setOpen(!isOpen)
    };

    return(
        <div className="Container header">

            <div className="menu_mobile" onClick={clickOpen}>
                <div id="mm_line"></div>
                <div id="mm_line"></div>
                <div id="mm_line"></div>
            </div>  

            <ul className={isOpen ? 'aberto' : 'fechado'}>
                <li className="logo">
                    <img src={logo} />
                </li>

                <li>
                    <Link to="/" className='um'>Início</Link>
                </li>

                <li>
                    <Link to="/adocao" >Adote</Link>
                </li>

                <li>
                    <Link to="/doar">Doe</Link>
                </li>

                <li>
                    <Link to="/about">Sobre nós</Link>
                </li>

                <li>
                    <Link to="/contact">Contate-nos</Link>
                </li>

                <li>
                    <Link to="/login">Olá, faça  login ou registre-se.</Link>
                </li>

                
                    
            </ul>
            
        </div>
        
    );
};

export default Header;