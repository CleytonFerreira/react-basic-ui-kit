import btnStyle from './Btn.module.css';

function Btn(props) {
    return (
        <button className={btnStyle.btn}><span>{props.text}</span></button>
    )
};

export default Btn;