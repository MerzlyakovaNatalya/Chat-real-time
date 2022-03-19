import { useEffect } from "react";
import { useUsers } from "../hooks/practic_hooks";

export const Practic = () => {
    
     const[user, {addUser, removeUser}] = useUsers();

     useEffect(() => {
         console.log("update")
     })

    return (
        <>
        <div className='wrap'>
        <button onClick={addUser}>Эксперимент</button>
        <div>
            {
            user.map((item) => <div>
                {item.name}
                <button onClick={removeUser(item.name)}>-</button>
                </div>
            )
            }
        </div>
        </div>
        </>
    )
}