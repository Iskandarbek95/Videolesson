import Advantage from './Advantage/Advantage';
import Buy from './Buy/Buy';
import List from './List/List';
import s from './Main.module.css';
import Sistem from './Sistem/Sistem';

const Main = () => {
    return (
        <div className={s.main}>
            <Sistem />
            <Advantage />
            <List />
            <Buy />
        </div>
    );
}

export default Main;