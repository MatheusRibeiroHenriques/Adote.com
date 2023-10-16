import './styles.css';

import Header from '../Header';
import Footer from '../Footer';

const Template = (props) => {
    return(
        <div className="template">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Template;