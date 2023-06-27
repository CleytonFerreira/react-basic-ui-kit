import cardStyle from './Card.module.css';

const Card = (props) => {
    return (
        <div className={cardStyle.card}>
            <div className="card_img">
                <img src={props.imageUrl} alt="card" />
            </div>
            <div className="card_body">
                <h1 className='card_title'>{props.title}</h1>
                <p className='card_text'>
                    {props.text}
                </p>
            </div>
        </div>
    )
};

export default Card;