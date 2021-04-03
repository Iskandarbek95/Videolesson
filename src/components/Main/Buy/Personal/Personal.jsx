import s from './Personal.module.css';
import personalImg from './../../../../img/personal-img.png';
import TransitionsModal from './../../../Modal/TransitionModal'

const Personal = () => {
    return (
        <div className={s.b_d_items}>
            <div className={s.items}>
                <div className={s.items_icon}>
                    <img src={personalImg} alt="" />
                </div>
                <h3>Personal</h3>
            </div>
            <div className={s.list}>
                <ul>
                    <li>Bem metodi</li>
                    <li>Corel Draw</li>
                    <li>PHP dasturlash</li>
                </ul>
            </div>
            <div className={s.i_text_value}>
                <h4>Ha bir kurslarimiz</h4>
                <div className={s.first_value}>
                    <p>560,000</p>
                </div>
                <div className={s.last_value}>
                    <p className={s.v_num}>390,000<span>so‘m</span></p>
                </div>
            </div>
            <TransitionsModal text="Sotib olish" />
        </div>
    );
}

export default Personal;