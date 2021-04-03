import s from './Diamond.module.css';
import diamondImg from './../../../../img/diamond-img.png';
import TransitionsModal from './../../../Modal/TransitionModal'

const Diamond = () => {
    return (
        <div className={s.b_d_items}>
            <div className={s.items}>
                <div className={s.items_icon}>
                    <img src={diamondImg} alt="" />
                </div>
                <h3>Diamond</h3>
            </div>
            <div className={s.list__diamond}>
                <hp>Barcha kurslarimizni bir vaqtda sotib oling va 40% li chegirmaga ega bo'ling!</hp>
            </div>

            <div className={s.i_text_value}>
                <h4>Ha bir kurslarimiz</h4>
                <div className={s.first_value}>
                    <p>6 400,000 </p>
                </div>
                <div className={s.last_value}>
                    <p className={s.v_num}>3 840,000<span>so‘m</span></p>
                </div>
            </div>
            <TransitionsModal text="Sotib olish" />
        </div>
    );
}

export default Diamond;