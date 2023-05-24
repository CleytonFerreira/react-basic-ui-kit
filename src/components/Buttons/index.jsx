import Btn from './Btn';
import BtnIcon from './BtnIcon';
import BtnRound from './BtnRound';
import BtnLarge from './BtnLarge';
import BtnSmall from './BtnSmall'

function Buttons() {
    return (
        <>
            <Btn text="Default" />
            <br /><br />
            <BtnRound text="Round button" />
            <br /><br />
            <BtnIcon text="Button with icon" />
            <br /><br />
            <BtnLarge text="Large button" />
            <br /><br />
            <BtnSmall text="Small button" />
            <br /><br />
        </>
    )
};

export default Buttons;