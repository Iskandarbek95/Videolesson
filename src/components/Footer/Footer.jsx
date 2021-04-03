import s from './Footer.module.css';
import smileImg from './../../img/smile-img.png';
import likeImg from './../../img/like-img.png';
import telegramImg from './../../img/telegram-img.png';
import faceebokImg from './../../img/faceebok-img.png';
import instagramImg from './../../img/instagram-img.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <h2 className={s.section_title}>Bog‘lanish</h2>
            <div className={s.footer__body}>
                <div className={s.f_b_inform}>
                    <div className={s.f_b_i_text}>
                        <div>
                            <p className={s.f_t_title}>Адрес центрального офиса</p>
                            <p className={s.f_t_inform}>Olmazor tuman, Langar ko`chasi 76-uy</p>
                        </div>
                        <div>
                            <p className={s.f_t_title}>Электронная почта</p>
                            <a href="#" className={s.f_t_inform}>kingbookuz@gmail.com</a>
                        </div>
                    </div>
                    <div className={s.f_b_i_text}>
                        <div>
                            <p className={s.f_t_title}>Режим работы офиса</p>
                            <p className={s.f_t_inform}>dushanbadan — jumagacha 09:00—19:00</p>
                        </div>
                        <div>
                            <p className={s.f_t_title}>Телефон для вопросам</p>
                            <a href="#" className={s.f_t_inform}>99 188 90 90</a>
                        </div>
                    </div>
                </div>
                <div className={s.f_b_img}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33901.60631249959!2d69.2368388388942!3d41.31958818228443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9cdd04953d%3A0xf8109d550917a88e!2z0KfQvtGAY9GDINCx0LDQt9Cw0YA!5e0!3m2!1sru!2s!4v1617342906255!5m2!1sru!2s"></iframe>
                </div>
            </div>
            <div className={s.footer__links}>
                <div className={s.links}>
                    <div className={s.lin__title}>
                        <p>Bizni kuzating</p>
                        <img src={ smileImg } alt="" />
                        <img src={ likeImg } alt=""/>
                    </div>
                    <div className={s.lin__sot}>
                        <a href="#" className={s.sotsial}>
                            <img src={telegramImg} alt=""/>
                        </a>
                        <a href="#" className={s.sotsial}>
                            <img src={faceebokImg} alt=""/>
                        </a>
                        <a href="#" className={s.sotsial}>
                            <img src={instagramImg} alt=""/>
                        </a>
                    </div>

                </div>
                <div className={s.design_by}>
                    <p className={s.f_l_title}>Less is more</p>
                    <p className={s.f_l_inform}>Design & development</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;