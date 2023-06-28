import btnLargeStyle from './BtnLarge.module.css';

function BtnLarge(props) {
    return(
        <button className={btnLargeStyle.btn_large}><span>{props.text}</span></button>
    )
};

export default BtnLarge;