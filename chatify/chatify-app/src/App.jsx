import { useEffect } from 'react'
import { socket } from '../socket';
import './App.css'
import MyForm from './components/MyForm';
import ManageConnection from './components/ManageConnection';

function App() {

  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado');
    };
    socket.on('connect', onConnect);
    return () => {
      socket.on('disconnect');
    };
  }, []);

  return (
    <>
      <h1>Chatify</h1>
      <ManageConnection />
      <MyForm />
    </>
  )
}

export default App
