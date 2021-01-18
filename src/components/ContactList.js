import React from "react";
import Contact from "./Contact";

const users = [
    {
      name: 'Lana Kayne',
      avatar: 'https://i.postimg.cc/2SdyTTKF/lana.jpg',
      onlineStatus: false
    },
    {
      name: 'Cyril Figgis',
      avatar: 'https://i.postimg.cc/CKH8Bw00/cyril.jpg',
      onlineStatus: true
    },
    {
      name: 'Sterling Archer',
      avatar: 'https://i.postimg.cc/MHkLYg8G/archer.jpg',
      onlineStatus: true
    },
    {
      name: 'Pam Poovey ',
      avatar: 'https://i.postimg.cc/qRs1vPb6/pam.png',
      onlineStatus: false
    },
    {
      name: 'Barry Dylan',
      avatar: 'https://i.postimg.cc/ZqkPvfy8/barry.jpg',
      onlineStatus: true
    }
  ];

  function ContactList() {
    return (
        <div>
            {users.map((contact, index) => (
                <Contact
                    key={index}
                    name={contact.name}
                    avatar={contact.avatar}
                    onlineStatus={contact.onlineStatus}
                />
            ))}
        </div>
    );
}

export default ContactList; 
