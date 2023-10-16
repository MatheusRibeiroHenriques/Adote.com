import './styles.css';
import {Link} from 'react-router-dom';
import Template from '../Template';
import Card from '../Card';

import {dogs} from '../../faker'
import { useEffect } from 'react';


const Banner = () => {
 
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    const dogsBanner = dogs.slice(0,8)
    
    return(
        <Template>
            <div className="banner">
                <div className="right">
                    <div>
                        <h1>SALVE</h1>
                        <h1>UM</h1>
                        <h1>AMIGO</h1>
                    </div>

                    <p>ADOTE  OU DOE AGORA!</p>

                    <button className="adotar grow"><Link to="/adocao">Adotar</Link></button>    
                    <button className="doar grow"><a href="/doar">Doar</a></button>
                </div>
            </div>

            <div className="body">

                <div className="main_text">
                    <h1>Adote um animalzinho</h1>
                    <p>Aqui você encontrará vários amiguinhos precisando de novos companheiros.</p>
                </div>

                <div className="cards">
                {dogsBanner.map((dog) => (
                    <Card 
                        key={dog.id}
                        id={dog.id}
                        img={dog.img}
                        name={dog.name}
                    /> 
                ))}
                </div>

                <div className="ver_mais ">
                    <Link to="/adocao">Ver mais</Link>
                </div>

            </div>

        </Template>

    );
};

export default Banner