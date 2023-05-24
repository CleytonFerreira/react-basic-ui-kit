import btnRoundStyle from './BtnRound.module.css';

function BtnRound(props) {
    return(
        <button className={btnRoundStyle.btn_round}>{props.text}</button>
    )
};

export default BtnRound;