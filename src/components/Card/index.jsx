import Card from "./Card";
import cardsData from './cardsData'

const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '40px 60px'
}

const CardsContainer = () => {
    return (
        <div style={cardsContainerStyle}>
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    alt={card.alt}
                    text={card.text}
                />
            ))}
        </div>
    );
};

export default CardsContainer;