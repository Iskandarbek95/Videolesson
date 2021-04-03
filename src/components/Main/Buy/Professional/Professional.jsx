import s from './Professional.module.css';
import professionalImg from './../../../../img/professional-img.png';
import TransitionsModal from './../../../Modal/TransitionModal'

const Professional = () => {
    return (
        <div className={s.b_d_items}>
            <div className={s.items}>
                <div className={s.items_icon}>
                    <img src={professionalImg} alt="" />
                </div>
                <h3>Professional</h3>
            </div>
            <div className={s.list}>
                <ul>
                    <li>1C bugalteriya</li>
                    <li>HTML/CSS dasturlash</li>
                    <li>3d MAX</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
            <div className={s.i_text_value}>
                <h4>Ha bir kurslarimiz</h4>
                <div className={s.first_value}>
                    <p>850,000 </p>
                </div>
                <div className={s.last_value}>
                    <p className={s.v_num}>595,000<span>so‘m</span></p>
                </div>
            </div>
            <TransitionsModal text="Sotib olish" />
        </div>
    );
}

export default Professional;