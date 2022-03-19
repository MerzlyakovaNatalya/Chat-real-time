import style from './Layout.module.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Practic } from '../practic';

export const Header = () => {

    return (
        <>
        <div className={style.wrap}>
        <header className={style.header}>
            <Link to='/' className={style.a}>HOME</Link>
            <Link to='/profile' className={style.a}>PROFILE</Link>
            <Link to='/chat' className={style.a}>CHATS</Link>  
        </header>
        <main>
           <Outlet></Outlet>
        </main>
        <footer>
           <Practic></Practic>
        </footer>
        </div>
        </>
    )
}