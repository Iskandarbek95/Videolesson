import s from './Sistem.module.css';
import bepulImg from './../../../img/bepul.png';
import ishonchImg from './../../../img/ishonch.png';
import koplabImg from './../../../img/koplab.png';
import qulayImg from './../../../img/qulay.png';

const Sistem = () => {
    return (
        <section class={s.sistem}>
            <div class={s.sistem__items1}
                style={{ backgroundImage: `url(${ qulayImg })` }}>
                <h3>Qulay va<br />zamonaviy</h3>
            </div>

            <div class={s.sistem__items2} 
                style={{ backgroundImage: `url(${koplabImg})` }}>
                <h3>Ko'plab<br />imkoniyatlar</h3>
            </div>

            <div class={s.sistem__items3}
                style={{ backgroundImage: `url(${ishonchImg})` }}>
                <h3>Ishonchli<br />hamkoringiz</h3>
            </div>

            <div class={s.sistem__items4} 
                style={{ backgroundImage: `url(${bepulImg})` }}>
                <h3>Bepul yetkazib<br />beramiz!</h3>
            </div>
        </section>
    );
}

export default Sistem;