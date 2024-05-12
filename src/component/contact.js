import React from 'react';

const Contacts = () => {
    const contactinfo = {
        Contact: "0912345678",
        Address: "Pulilan, Bulacan"
     
    }
 
    return (
        <div className="content" style={{ textAlign: 'center' }}> {/* Center content */}
            <br></br>
            <h2>Contact</h2>
            <div>
                <p>Number: {contactinfo.Contact}</p>
                <p>Address: {contactinfo.Address}</p>
               
            </div>
         
        </div>
    );
}
export default Contacts