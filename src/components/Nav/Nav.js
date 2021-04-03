import s from './Nav.module.css';
import logo from './../../img/logo-img.svg'

const Nav = () => {
    return (
        <nav class={s.nav}>
            <div class={s.container}>
                <div class={s.logo}>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    <a class={s.audioLink} href="#">Audio darsliklar</a>
                    <a class={s.videoLink} href="#">Video darsliklar</a>
                </div>
                <ul class={s.row}>
                    <li>
                        <a href="#">Avfzaliklar</a>
                    </li>
                    <li>
                        <a href="#">Kurslar</a>
                    </li>
                    <li>
                        <a href="#">Sotib olish</a>
                    </li>
                    <li>
                        <a href="#">Bog‘lanish</a>
                    </li>
                    <li class={s.nav__number}>
                        <a href="#">99 188 90 90</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
