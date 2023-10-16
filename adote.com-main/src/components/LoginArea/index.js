import './styles.css';
import {useRef, useState, useEffect} from 'react';
import Template from '../Template';
import { Link } from 'react-router-dom';


//Icons from mdiIcons
import Icon from '@mdi/react'
import { mdiEyeOffOutline , mdiEyeOutline  } from '@mdi/js';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    let showRef = useRef()
    let backGround = useRef()
    const [ isVisible, setVisible ] = useState(false)

    function show () { 
        setVisible(!isVisible)

        if (showRef.current.type === "text") {
            showRef.current.type="password";
        } else{
            showRef.current.type="text"
        }
    }


    const style = {
        width: 30,
        height: 25,
    }
    


    return(
        <Template>
            <div className="loginArea">
                <form className="login">
                    <h1>Login</h1>
                    <input type="text" name="email" placeholder="E-mail"></input>
                    <div className="password">
                        <input type="password" placeholder="Senha" name="password"  ref={showRef} className="passwordLogin"/>
                        <div onClick={show}>

                            {
                                isVisible 
                                ? <Icon path={mdiEyeOutline } ref={backGround} color="black" style={style}/> 
                                : <Icon path={mdiEyeOffOutline} ref={backGround} color="black" style={style}/>
                            }
                        </div>
                    </div>   

                    <div className="box-btn btn">
                        <button type="submit" className="grow">Conectar</button>
                    </div>

                    

                    <label><input type="checkbox" name="checkbox" value="value" className="checkbox"/>Lembrar de mim</label>

                    <Link to="">Esqueceu sua senha?</Link>

                    <Link to="/register" className="link">Não tem uma conta? registre-se agora!</Link>


        
                </form>
            </div>
        </Template>

    )
};

export default Login;