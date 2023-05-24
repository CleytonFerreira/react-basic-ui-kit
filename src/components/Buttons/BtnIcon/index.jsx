import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import btnIconStyle from './BtnIcon.module.css';

function BtnIcon(props) {
    return (
        <button className={btnIconStyle.btn}>
            <div className={btnIconStyle.btn_icon}>
                <FontAwesomeIcon icon={faFolder} />
            </div>
            <div className={btnIconStyle.btn_text}>
                {props.text}
            </div>
        </button>
    )
};

export default BtnIcon;