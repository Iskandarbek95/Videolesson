import s from './Businnes.module.css';
import businesImg from './../../../../img/busines-img.png';
import TransitionsModal from './../../../Modal/TransitionModal'

const Businnes = () => {
    return (
        <div className={s.b_d_items}>
            <div className={s.items}>
                <div className={s.items_icon}>
                    <img src={businesImg} alt=""/>
                </div>
                <h3>Business</h3>
            </div>
            <div className={s.list}>
                <ul>
                    <li>Ms Word</li>
                    <li>Ms Excel</li>
                    <li>Ms Power Point</li>
                    <li>Telegram biznes</li>
                    <li>Telegram bot</li>
                </ul>
            </div>
            <div className={s.i_text_value}>
                <h4>Ha bir kurslarimiz</h4>
                <div className={s.first_value}>
                    <p>495,000</p>
                </div>
                <div className={s.last_value}>
                    <p className={s.v_num}>245,000<span>so‘m</span></p>
                </div>
            </div>
            <TransitionsModal text="Sotib olish" />
        </div>
    );
}

export default Businnes;