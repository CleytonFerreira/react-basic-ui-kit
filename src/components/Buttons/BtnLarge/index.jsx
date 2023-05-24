import btnLargeStyle from './BtnLarge.module.css';

function BtnLarge(props) {
    return(
        <button className={btnLargeStyle.btn_large}>{props.text}</button>
    )
};

export default BtnLarge;