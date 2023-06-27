import Card from "./Card";
import cardsData from './cardsData'

const ShowCards = () => {
    return (
        <>
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    text={card.text}
                />
            ))}
        </>
    );
};

export default ShowCards;