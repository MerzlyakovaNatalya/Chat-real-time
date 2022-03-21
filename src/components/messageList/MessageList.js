import { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { CHATS } from '../../helpers/mock';
import { useMessage } from '../../hooks/useForma';
import { Message } from '../message/Message'

export const MessageList = () => {

    //const url = useLocation();
    //console.log(url);
    
    const navigate = useNavigate();
    const {chatId} = useParams();
    const [messageList, value, ref, {onSubmitMessage, onChangeMessageInput, sendMessage, focus}] = useMessage();
    console.log(`useaparams_${chatId}`)
    
    useEffect(() => {
        

        if (messageList.length === 0) {
            return;
        }

        const tail = messageList[messageList.length - 1];
        if(tail.author === "bot") {
            return;
        }
        
        //sendMessage("bot", "hello");
        const timeout = setTimeout(sendMessage, 1000, "bot", "hello");

        return () => clearTimeout(timeout);
    
    }, [messageList]);

    return (
        <div>
            <form onSubmit={onSubmitMessage}>
            <input type="text" onChange={onChangeMessageInput} value={value} placeholder="Cообщение" ref={ref}></input>
            <button onClick={focus}>Напишите сообщение</button>
           <button type="submit">Отправить</button>
            </form>
            <Message messageList={messageList}/>
        </div>
    )
}