// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { io } from 'socket.io-client';
// import wrapper from '../redux/store';
// import {
//   addSocketConnection,
//   newMessage,
//   updateConnectedUsers,
// } from '../redux/actions';

// const App = ({ Component, pageProps }) => {
//   const dispatch = useDispatch();

//   const socket = useSelector((state) => state.socket);

//   useEffect(() => {
//     const BASE_URL = 'http://localhost:3000';
//     dispatch(addSocketConnection(io(BASE_URL)));
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     console.log('useEffect socket');
//     if (socket.on) {
//       socket.on('message', (message) => dispatch(newMessage(message)));
//       socket.on('updateConnectedUsers', (connectedUsers) => {
//         dispatch(updateConnectedUsers(connectedUsers));
//       });
//     }
//   }, [socket]);

//   return <Component {...pageProps} />;
// };

// export default wrapper.withRedux(App);
