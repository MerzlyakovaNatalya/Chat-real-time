import React from 'react';
import style from './Message.module.css';

const Messages = ({ messageList }) => {
  return (
    <>
      <div>
        {messageList?.map((item, index) => (
          <div key={index} className={style.wrap}>
            <p>{item.author}</p>
            <p>{item.text}</p>
          </div>
        )      
        )}
      </div>
    </>
  );
};

export const Message = React.memo(Messages);

