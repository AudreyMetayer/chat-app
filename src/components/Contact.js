import React from 'react';
import './contact.css';

const name = "Lana Kane"
const onlineStatus = true

function Contact() {
    return(
        <div className="Contact">
           <img className="Avatar"
           src="https://i.postimg.cc/WpY1dG61/lana.jpg"
           alt="Lana Kane"
            />
            <div className="name-online">
            <h4 className="name">
                {name}
                </h4>
                <div className="status">
                    <div className="status-online"></div>    
                         <p className="status-text">
                                {onlineStatus ? "Online" : "Offline"}
                        </p>
                    
            </div>
            </div>
        </div>

    );
}

export default Contact;