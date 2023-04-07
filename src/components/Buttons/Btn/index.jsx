import btnStyle from './Btn.module.css';

function Btn(props) {
    return(
        <button className={btnStyle.btn}>{props.text}</button>
    )
};

export default Btn;