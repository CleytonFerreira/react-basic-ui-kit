import btnRoundStyle from './BtnRound.module.css';

function BtnRound(props) {
    return(
        <button className={btnRoundStyle.btn_round}><span>{props.text}</span></button>
    )
};

export default BtnRound;