import Btn from "./Btn";
import BtnIcon from "./BtnIcon";
import RoundBtn from "./RoundBtn";

function Buttons() {
    return (
        <>
            <Btn text="Default" />
            <br /><br />
            <RoundBtn text="Round button" />
            <br /><br />
            <BtnIcon text="Button with icon" />
            <br /><br />
        </>
    )
};

export default Buttons;