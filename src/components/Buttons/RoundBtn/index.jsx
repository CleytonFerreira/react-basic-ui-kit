import roundBtnStyle from './RoundBtn.module.css';

function RoundBtn(props) {
    return(
        <button className={roundBtnStyle.round_btn}>{props.text}</button>
    )
};

export default RoundBtn;