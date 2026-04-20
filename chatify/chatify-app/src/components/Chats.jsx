import React from 'react'
import './Components.css'

const Chats = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('chat message', (msg) => {
            console.log("Mensaje desde Server:", msg);
            setMessage((prev) =>[...prev, msg])
        });
        return () => {
            socket.off('chat message')
        };
    }, []);

    return (
        <div class="container" id="chats-container">
            {messages?.map((m) => (
                <p>{m}</p>
            ))};
            {/*<div></div>
            <input id="chatbox"></input>*/}
        </div>
    );
};

export default Chats;