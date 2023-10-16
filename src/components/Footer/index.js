import './styles.css';
import {Link} from 'react-router-dom'

//Icons from mdiIcons
import Icon from '@mdi/react'
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiPhone ,mdiWhatsapp, mdiEmail,mdiMapMarker} from '@mdi/js';


const Footer = () => {


    const style = {
        width: 30,
        height: 25,
    }

    return(
        <footer>
            <div className="site_mapa">
                <h1 className="tittle">Mapa do site</h1>
                <ul className="lista">
                    <Link to="/"><li>Início</li></Link>
                    <Link to="/adocao"><li>Adote</li></Link>
                    <a href="/doar"><li>Doe</li></a>
                    <a href="/about"><li>Sobre nós</li></a>
                    <a href="/contact"><li>Contate-nos</li></a>
                    <a href="/login"><li>Área de login e cadastro</li></a>
                </ul>
            </div> 

            <div className='newsletter'>
                <h1 className="tittle">Newsletter</h1>
                <p>Cadastre seu e-mail para receber às últimas notícias!</p>
                <div>
                    <input type="email" placeholder="Digite seu E-mail" />
                    <a href="/">ENVIAR</a>
                </div>

                <div className="redes_sociais">
                    <Icon path={mdiFacebook} title="Facebook" style={style} color="white"/>
                    <Icon path={mdiInstagram} title="Instagram" style={style} color="white"/>
                    <Icon path={mdiTwitter} title="Twitter" style={style} color="white"/>
                </div>
            </div>

            

            <div className="contacts">
                <h1 className="tittle">Contatos</h1>
                <ul className="lista">
                    <li><Icon path={mdiPhone} style={style}/>3315-4255</li>
                    <li><Icon path={mdiWhatsapp} style={style}/>992384322</li>
                    <li><Icon path={mdiEmail} style={style}/>adote@hotmail.com</li>
                    <li><Icon path={mdiMapMarker} style={style}/>Loren Ipsum, Fábricas, Nº 200, Dolor Asimet</li>           
                </ul>          
            </div>

           
            
        </footer>
    )
};

export default Footer;
