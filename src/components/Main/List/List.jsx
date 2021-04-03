import s from './List.module.css';
import list1 from './../../../img/list1.png';
import list2 from './../../../img/list2.png';
import list3 from './../../../img/list3.png';
import list4 from './../../../img/list4.png';
import list5 from './../../../img/list5.png';
import list6 from './../../../img/list6.png';
import list7 from './../../../img/list7.png';
import list8 from './../../../img/list8.png';
import list9 from './../../../img/list9.png';
import list10 from './../../../img/list10.png';
import list11 from './../../../img/list11.png';
import list12 from './../../../img/list12.png';
import TransitionsModal from './../../Modal/TransitionModal'

const List = () => {
    return (
        <section className={s.lists}>
            <h2 className={s.section_title}>Kurslarimiz ro‘yxati</h2>
            <div className={s.list__body}>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list1} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>3d max<br />dizayn kursi </h4>
                        <p>O‘zingizning 3D modelingizni yarating!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list2} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Photoshop <br />kursi</h4>
                        <p>Photoshop qursi!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list3} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Corel Draw<br />kursi</h4>
                        <p>O‘zingizning 3D modelingizni yarating!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
            </div>

            <div className={s.list__body}>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list4} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>MS Word <br />kursi</h4>
                        <p>O‘zingizning 3D modelingizni yarating!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list5} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Power Point <br />kursi</h4>
                        <p>Loyiha hisobotlarini chiqarishni o‘rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list6} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>MS Excel<br />kursi</h4>
                        <p>Loyiha hisobotlarini chiqarishni o‘rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
            </div>

            <div className={s.list__body}>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list7} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>HTML va CSS <br />dasturlash kursi</h4>
                        <p>Uylarni loyihalash va injenerlik chizmalarini chizishni o'rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list8} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Telegram bot <br />yaratish kursi</h4>
                        <p>O‘zingizning 3D modelingizni yarating!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list9} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>1C Buxgalteriya<br />kursi</h4>
                        <p>Loyiha hisobotlarini chiqarishni o‘rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
            </div>

            <div className={s.list__body}>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list10} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Telegram kanal<br />kursi</h4>
                        <p>Uylarni loyihalash va injenerlik chizmalarini chizishni o'rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list11} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>Bem metodi<br />kursi</h4>
                        <p>O‘zingizning 3D modelingizni yarating!</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.l_b_icon}>
                        <img src={list12} alt=""/>
                    </div>
                    <div className={s.l_b_text}>
                        <h4>PHP dasturlash<br />kursi</h4>
                        <p>Loyiha hisobotlarini chiqarishni o‘rganing</p>
                        <TransitionsModal text="Sotib olish" />
                    </div>
                </div>
            </div>
            <div className={s.button}>
                <TransitionsModal text="Barchasini ko‘rish" />
            </div>
        </section>
    );
}


export default List;