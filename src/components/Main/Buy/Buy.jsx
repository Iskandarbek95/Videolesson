import Businnes from './Businnes/Businnes';
import s from './Buy.module.css';
import Diamond from './Diamond/Diamond';
import Personal from './Personal/Personal';
import Professional from './Professional/Professional';

const Buy = () => {
    return (
        <section className={s.buy}>
            <h2 className={s.section_title}>Kurslar narxi 30%<br /> gacha chegirma</h2>
            <div className={s.buy__body}>
                <Businnes />
                <Personal />
                <Professional />
                <Diamond />
            </div>
        </section >
    );
}

export default Buy;