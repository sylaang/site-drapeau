import React from 'react';

const Cards = (props) => {

    const {country} = props;
    return (
        <ul>
            <li className='card'>
                <img src={country.flag} alt='flag' />
                <div className='data-container'>
                    <ul >
                        <li> {country.name} </li>
                        <li> {country.capital} </li>
                        <li> Pop : {country.population} </li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Cards;