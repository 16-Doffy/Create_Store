import React from 'react';
import './style.scss';

function Footer(props) {
    return (
        <footer className="footer">
            <p>Author: Dr. Corn<br />
            <a  style={{ color: 'white' }} href="fbto:https://www.facebook.com/binkamikaze">https://www.facebook.com/binkamikaze</a></p>
        </footer>
    );
}

Footer.propTypes = {
    // Define any prop types if needed
};

export default Footer;
