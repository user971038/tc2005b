import React from 'react'
import './Components.css'

const Chats = () => {

    useEffect(() => {
        socket.on('chat message', (msg) => {
            console.log("Mensaje desde Server:", msg);
        });
    }, []);

    return (
        <div class="container" id="chats-container">
            <div></div>
            <input id="chatbox"></input>
        </div>
    );
};

export default Chats;