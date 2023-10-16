import './styles.css';
import Template from '../Template'
import Card from '../Card';

import {dogs} from '../../faker';
import { useEffect } from 'react';

const AdoptionArea =  () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <Template>

            <div className="body">
                <div class="main_text">
                    <h1>Nossos Amiguinhos</h1>
                    <p>Aqui você encontrará vários amiguinhos precisando de novos companheiros.</p>
                </div>

                <div className="container">
                {dogs.map((dog) => (
                    <Card className="card"
                        id={dog.id}
                        img={dog.img}
                        name={dog.name}
                        key={dog.id}
                    /> 
                ))}
            </div> 

            </div>
            

            
           
        </Template>

    )
}

export default AdoptionArea;