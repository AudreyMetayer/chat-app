import React from "react";
import "./contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div className="name-online">
                <h4 className="name">
                    {props.name}
                    </h4>
                <div className="status">
                    <div className={props.onlineStatus ? 'status-online' : 'status-offline'}> 
                    </div>
                    <p className="status-text">
                        {props.onlineStatus ? "online" : "offline"}
                    </p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;
