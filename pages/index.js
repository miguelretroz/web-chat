// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeNickname, restoreMessages } from '../redux/actions';
// import { v4 as uuidv4 } from 'uuid';
// import wrapper from '../redux/store';

// export const getServerSideProps = wrapper.getServerSideProps((store) => ({ req }) => {
//   if (req.messages) {
//     const formattedMessages = req.messages
//     .map(({ message, nickname, timestamp }) => `${timestamp} ${nickname} ${message}`);

//     store.dispatch(restoreMessages(formattedMessages));
//   }
// });

// function Chat() {
//   const dispatch = useDispatch();

//   const [inputMessage, setInputMessage] = useState('');
//   const [inputNickname, setInputNickname] = useState('');

//   const socket = useSelector((state) => state.socket);
//   const messages = useSelector((state) => state.messages);
//   const { nickname } = useSelector((state) => state.user);
//   const { connected } = useSelector(({ users }) => users);

//   useEffect(() => {
//     if (socket.on) {
//       socket.emit('getConnectedUsers');
//     }
//   }, [socket]);

//   const handleMessage = ({ target }) => setInputMessage(target.value);
//   const handleNickname = ({ target }) => setInputNickname(target.value);
//   const handleSubmitMessage = (e) => {
//     e.preventDefault();

//     socket.emit('message', { chatMessage: inputMessage, nickname });

//     setInputMessage('');
//   };
//   const handleSubmitNickname = (e) => {
//     e.preventDefault();

//     socket.emit('setNickname', inputNickname);
//     dispatch(changeNickname(inputNickname));

//     setInputNickname('');
//   };

//   return (
//     <>
//       <h1>Chat</h1>
//       {/* <h2>User: <span>{ nickname }</span></h2> */}

//       <h3>Usuários conectados</h3>
//       <ul>
//         <li data-testid="online-user">{ nickname }</li>
//         {
//           Object.values(connected).filter(({ id }) => socket.id !== id)
//           .map(({ id, nickname }) => <li data-testid="online-user" key={ id }>{ nickname.substring(0, 16) }</li>)
//         }
//       </ul>

//       <h3>Mensagens</h3>
//       <ul>{ messages.map((message) => 
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

// export default Chat;
