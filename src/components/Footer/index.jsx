import React from 'react';
import './style.scss';

function Footer(props) {
    return (
        <footer className="footer">
            <p>Author: Dr. Corn<br />
            <a style={{ color: 'white' }} href="https://www.facebook.com/binkamikaze" target="_blank" rel="noopener noreferrer">
                FB:Bin Sirô
            </a>
            </p>
        </footer>
    );
}

Footer.propTypes = {
    // Define any prop types if needed
};

export default Footer;
