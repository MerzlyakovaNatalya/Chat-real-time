import { useCallback, useState } from "react";

export const useUsers = () => {

    const [user, setUser] = useState([]);

     const addUser = () => {
        setUser((state) => {
            const newUser = [...state];
             newUser.push({
                name: `user_${state.length}`
            })
            return newUser;
        })  
    }

    /*const addUser = useCallback(() => {
        setUser((state) => {
            return state.push({
                name: `user_${state.length}`
            })
        })  
    })

    const addUser = () => {
        const newUser = [...user];
        newUser.push({
            name: `user_${user.length}`
        });
        setUser(newUser);
    }

    const removeUser = useCallback((name) => () => {
        const copyUser = user.filter((item) => item.name !== name);
        setUser(copyUser);
    }, [user]);
 
    const removeUser = (name) => () => {
        const copyUser = user.filter((item) => item.name !== name);
        setUser(copyUser);
    }*/

    const removeUser = useCallback((name) => () => {
        setUser((state) => {return state.filter((item) => item.name !== name)})
    }, []);

    return [
        user,
        {
            addUser,
            removeUser, 
        }  
    ]
}