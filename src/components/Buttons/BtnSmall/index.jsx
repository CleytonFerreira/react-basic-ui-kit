import btnSmallStyle from './BtnSmall.module.css';

function BtnSmall(props) {
    return(
        <button className={btnSmallStyle.btn_small}>{props.text}</button>
    )
};

export default BtnSmall;