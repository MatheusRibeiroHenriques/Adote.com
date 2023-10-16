import './styles.css';
import {useState} from 'react';

import Template from '../Template';

import {useEffect} from 'react';;



const ContactArea = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log('*** handleSubmit', data);
    }

    return(
        <Template>
            <div className="img"></div>
            <div className="container_contact">

                <div class="main_text">
                        <h1>Entre em contato</h1>
                        <p>Escreva-nos uma mensagem:</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <fieldset className="dados">
                        <legend>Dados pessoais</legend>
                        <input 
                            name= "name"
                            type="text" 
                            placeholder="Nome" 
                            onChange={handleInputChange}
                            value={ formValues.name || '' }
                        />

                        <input 
                            type="text" 
                            placeholder="E-mail" 
                            name= "email"
                            value={ formValues.email || '' }
                            onChange={handleInputChange}
                        />

                        <input 
                            type="text" 
                            placeholder="Telefone" 
                            name= "tel"
                            value={ formValues.tel || '' }
                            onChange={handleInputChange}
                        />

                        
                    </fieldset>

                    <fieldset>
                        <legend>Mensagem</legend>
                        <textarea name="text" placeholder="Sua mensagem aqui" value={formValues.text || ''} onChange={handleInputChange}></textarea>
                    </fieldset>

                    <input type="submit" className="submit"/>


                </form>          
            </div>
        </Template>
    )
};

export default ContactArea;