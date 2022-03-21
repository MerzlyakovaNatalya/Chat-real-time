export const Message = ({messageList}) => {

    return <div>
        { messageList.map((item) => {
            <p>{item.author} - {item.text}</p>
        })}
    </div>
}