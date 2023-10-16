import './styles.css';
import {Link} from 'react-router-dom';

const Card = (props) => {

    return(


        <div className="card grow">
            <Link to={''}>
                <img className="image" src={props.img} alt="cachorro"/>
                <div className="card_text">
                    <h1 className="Name">{props.name}</h1>
                </div>
            </Link>
        </div>

    );
};

export default Card;