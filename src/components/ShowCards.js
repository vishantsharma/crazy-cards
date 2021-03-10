import React, { useState, useEffect } from 'react';

const ShowCards = props => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(responseData => setData(responseData.cards))
    }, [])

    return (
        <ul>
            {data.map(resData => (
                <li> {resData.card_name} </li>
            ))}
            </ul>
    )
}

export default ShowCards;