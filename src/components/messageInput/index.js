import { useState } from "react";

export const MessageInput = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSendMessage}>
        <textarea
          type="text"
          rows="10"
          cols="45"
          value={value}
          onChange={onChangeMessageInput}
          placeholder="Message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
