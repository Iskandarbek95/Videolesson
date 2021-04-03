import s from './Advantage.module.css';
import advantageOzb from './../../../img/advantage__ozbek.png';
import advantageQid from './../../../img/advantage__qidirish.png';
import advantageSer from './../../../img/advantage__sertifiqat.png';
import advantageVaq from './../../../img/advantage__vaqt.png';
import advantageYor from './../../../img/advantage__yordam.png';
import advantageZam from './../../../img/advantage__zamonaviy.png';

const Advantage = () => {
    return (
        <section class={s.advantag}>
            <h2 class={s.section_title}>Kursimiz avfzaliklari</h2>
            <div class={s.advantag__body}>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageOzb} alt=""/>
                    </div>
                    <h4>O‘zbek tilida</h4>
                    <p>Video kursimiz o‘zbek tilida bo‘lganligi uchun o’rganishga juda ham qulay.</p>
                </div>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageVaq} alt="" />
                    </div>
                    <h4>Vaqtingizni tejang</h4>
                    <p>Kurslarni video darslik yordamida o’rganib, vaqtingizni ancha tezashingiz mumkin.</p>
                </div>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageQid} alt="" />
                    </div>
                    <h4>Dasturlarni qidirmaysiz</h4>
                    <p>Kerakli bo’lgan dasturlar va o’quv materillari tayyor, qidiruvga hojat yo`q.</p>
                </div>
            </div>
            <div class={s.advantag__body}>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageYor} alt="" />
                    </div>
                    <h4>Texnik yordam</h4>
                    <p>Qo`llab quvvatlov markazimiz siz uchun doim tayyor.</p>
                </div>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageZam} alt="" />
                    </div>
                    <h4>Zamonaviy kasblar</h4>
                    <p>Bizdagi darsliklar yordamida zamonaviy kasblarni o’rganib yaxshi kasbli bo`la olasiz.</p>
                </div>
                <div>
                    <div class={s.a_b_icon}>
                        <img src={advantageSer} alt="" />
                    </div>
                    <h4>Sertifikat</h4>
                    <p>Kursimizni muvaffaqiyyatli tugatsangiz, sizga sertifikat beriladi.</p>
                </div>
            </div>
        </section>
    );
}

export default Advantage;