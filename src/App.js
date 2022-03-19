//import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routers/home/Home';
import { Profile } from './routers/profile/Profile';
import { Chat } from './routers/chat/Chat';
import { MessageList } from './components/messageList/MessageList';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="chat/*" element={<Chat/>}>
           <Route path=':chatId' element={<MessageList/>}/>
        </Route>
        <Route path="*" element={"Ошибка"}/>
      </Route>
    </Routes>
    </>
  );
}
//<Route path='chat/:chatId' element={<MessageList/>}/>

export default App;

