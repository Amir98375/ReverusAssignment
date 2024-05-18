// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';


// const socket = io('http://localhost:4000');




// export const ChatApp=()=> {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
// console.log(messages,input,'hello my message')
//     useEffect(() => {
//         debugger
//         // Listen for incoming messages
//         socket.on('chat message', (msg) => {
//             setMessages([...messages, msg]);
//         });

//         // Clean up function to unsubscribe from the socket
//         return () => {
//             socket.off('chat message');
//         };
//     }, [messages]); // Add messages to dependencies to update effect when messages change

//     const sendMessage = (e) => {
//         debugger
//         e.preventDefault();
//         socket.emit('chat message', input); // Emit message to the server
//         setInput('');
//     };

//     return (
//         <div>
//             <ul>
//                 {messages.map((msg, index) => (
//                     <li key={index}>{msg}</li>
//                 ))}
//             </ul>
//             <form onSubmit={sendMessage}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// }




