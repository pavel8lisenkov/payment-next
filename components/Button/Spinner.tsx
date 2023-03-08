import style from './Spinner.module.css';

const Spinner = (): JSX.Element => <div className={style.pos__center}><div className={style.spinner}></div></div>;

export default Spinner;