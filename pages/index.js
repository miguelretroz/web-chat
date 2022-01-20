// import React, { useEffect, useState } from 'react';
// import { connect, useSelector, useDispatch } from 'react-redux';
// import { newMessage, changeNickname, restoreMessages } from '../redux/actions';
// import { v4 as uuidv4 } from 'uuid';
// import wrapper from '../redux/store';

// export const getServerSideProps = wrapper.getServerSideProps((store) => ({ req }) => {
//   const formattedMessages = req.messages
//     .map(({ message, nickname, timestamp }) => `${timestamp} ${nickname} ${message}`);

//   store.dispatch(restoreMessages(formattedMessages));
// });

// function Chat() {
//   const dispatch = useDispatch();

//   const [inputMessage, setInputMessage] = useState('');
//   const [inputNickname, setInputNickname] = useState('');

//   const socket = useSelector((state) => state.socket);
//   const messages = useSelector((state) => state.messages);
//   const { nickname } = useSelector((state) => state.user);

//   useEffect(() => {
//     socket.on('message', (message) => dispatch(newMessage(message)));
//   }, [socket]);

//   const handleMessage = ({ target }) => setInputMessage(target.value);

//   const handleNickname = ({ target }) => setInputNickname(target.value);

//   const handleSubmitMessage = (e) => {
//     e.preventDefault();
//     socket.emit('message', { chatMessage: inputMessage, nickname });
//   };

//   const handleSubmitNickname = (e) => {
//     e.preventDefault();

//     dispatch(changeNickname(inputNickname));
//   };

//   return (
//     <>
//       <h1>Chat</h1>
//       <h2>User: <span data-testid="online-user">{ nickname }</span></h2>

//       <ul>{ messages && messages.map((message) => 
//         <li
//           data-testid="message"
//           key={ uuidv4() }
//         >
//           { message }
//         </li>)
//       }</ul>

//       <form onSubmit={ handleSubmitNickname }>
//         <input
//           data-testid="nickname-box"
//           onChange={ handleNickname }
//           type="text"
//           value={ inputNickname }
//         />
//         <button data-testid="nickname-button" type="submit">Salvar</button>
//       </form>

//       <form onSubmit={ handleSubmitMessage } >
//         <input data-testid="message-box" type='text' onChange={ handleMessage } value={ inputMessage } />
//         <button data-testid="send-button" type='submit' >Enviar</button>
//       </form>
//     </>
//   );
// }

// export default connect(state => state)(Chat);