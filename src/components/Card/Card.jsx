import cardStyle from './Card.module.css';

const Card = (props) => {
    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.card_img}>
                <img src={props.imageUrl} alt={props.alt} />
            </div>
            <div className={cardStyle.card_body}>
                <h1 className={cardStyle.card_title}>{props.title}</h1>
                <p className={cardStyle.card_text}>
                    {props.text}
                </p>
            </div>
        </div>
    )
};

export default Card;