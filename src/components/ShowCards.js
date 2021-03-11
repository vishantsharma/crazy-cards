import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GenerateCards from '../containers/GenerateCards';
import Card from './ui/Card';

const ShowCards = () => {
    const [data, setData] = useState([]);
    const [selectedCreditCards, setSelectedCreditCards] = useState({});
    const userDataState = useSelector(state => state.userData);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(responseData => setData(responseData.cards))
    }, [])

    const handleClick = cardData => {
        let obj = {};
        obj[cardData.card_type] = cardData.available_credit
        let obj1 = {
            ...obj,
            ...selectedCreditCards
        }
        setSelectedCreditCards(obj1);

        if (selectedCreditCards.hasOwnProperty(cardData.card_type)) {
            delete obj1[cardData.card_type]
            setSelectedCreditCards({ ...obj1 });
        }
    }

    const sum = obj => {
        let sum = 0;
        for (let el in obj) {
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    }

    const getFilteredData = (cardsData) => {
        let cardType = [];
        cardsData.forEach(cardData => {
            if ((userDataState.employment === 'student' && cardData.optionsForEmployment === "student")) {
                cardType.push(cardData)
            }

            if ((userDataState.income > 16000 && cardData.income > 16000) && !(cardData.optionsForEmployment === "student")) {
                cardType.push(cardData)
            }

            if (cardData.card_type === "anywhere_card") {
                cardType.push(cardData)
            }

        })
        // eslint-disable-next-line
        return [... new Set(cardType)];
    }

    return (
        <>
            <section className="capture-form">
                <Card>
                    <h3> Total Credit £{sum(selectedCreditCards)}</h3>
                    {getFilteredData(data).map(resData => (
                        <GenerateCards
                            key={resData.card_type}
                            data={resData}
                            handleClick={handleClick} />
                    ))}
                </Card>
            </section>
        </>
    )
}

export default ShowCards;