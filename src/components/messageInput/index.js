export const MessageInput = ({
  onSendMessage,
  onChangeMessageInput,
  value,
}) => {
  return (
    <>
      <form onSubmit={onSendMessage}>
        <input
          type="text"
          rows="10"
          cols="45"
          value={value}
          onChange={onChangeMessageInput}
          placeholder="Message"
        ></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
