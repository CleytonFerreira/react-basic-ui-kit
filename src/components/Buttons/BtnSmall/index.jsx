import btnSmallStyle from './BtnSmall.module.css';

function BtnSmall(props) {
    return(
        <button className={btnSmallStyle.btn_small}><span>{props.text}</span></button>
    )
};

export default BtnSmall;