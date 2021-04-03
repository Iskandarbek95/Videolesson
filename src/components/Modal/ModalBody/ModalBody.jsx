import s from './ModalBody.module.css';
import './../../../fonts/font.css';
import modalImg from './../../../img/modal-img.png';

const ModalBody = () => {
    return (
        <div className={s.modal__body}>
            <div className={s.modal__body_text}>
                <h2>Buyurtma bering</h2>
                <form action="">
                    <p>Kerakli kursni tanlang</p>
                    <select name="videolesson" multiple="">
                        <option value="">3d max dizayn kursi</option>
                        <option value="photo shop">Photoshop kursi</option>
                        <option value="corel draw">Corel Draw kursi </option>
                        <option value="ms word">MS Word kursi </option>
                        <option value="power point">Power Point kursi </option>
                        <option value="ms excel">MS Excel kursi </option>
                        <option value="html va css">HTML va CSS dasturlash kursi </option>
                        <option value="telegram bot">Telegram bot yaratish kursi </option>
                        <option value="1c bugalteriya">1C Buxgalteriya kursi </option>
                        <option value="telegram kanal">Telegram kanal kurs </option>
                        <option value="bem metod">Bem metodi kursi </option>
                        <option value="php">PHP dasturlashkursi </option>
                    </select>
                    <p>Ismingiz</p>
                    <input type="text" placeholder="Usmonov Temur" />
                    <p>Telefon raqam</p>
                    <input type="text" placeholder="+998" />
                </form>
                <button>Buyurtma berish</button>

            </div>
            <div className={s.modal__body_img}>
                <img src={modalImg} alt="" />
            </div>
        </div>
    );
}

export default ModalBody;