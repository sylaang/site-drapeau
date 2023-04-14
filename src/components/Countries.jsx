import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards';

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortData, setSortData] = useState([]);
    const [rangeValue, setRangeValue] = useState([36]);
    const [playOnce, setPlayOnce] = useState(true);
    const [selectRadio, setSelectRadio] = useState("");

    const radio = ["Africa", "Americas", "Asia", "Europe", "Oceania"];


    useEffect(() => {
        axios.get(
            "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
        ).then((res) => {
            setData(res.data);
            setPlayOnce(false);
        })


        const sortedCountry = () => {

            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })

            sortedArray.length = rangeValue;
            setSortData(sortedArray);

        }
        sortedCountry();
    }, [data, playOnce])

    return (
        <div className='countries'>
            <div className='sort-container'>
                <input type='range' min="1" max="250" value={rangeValue} onChange={(e) => {
                    setRangeValue(e.target.value)
                }} />

                <ul>
                    {radio.map((radio) => {
                        return (
                            <li key={radio} >
                                <input type='radio' checked={radio === selectRadio} value={radio} onChange={(e) => setSelectRadio(e.target.value)} />
                                <label htmlFor={radio} > {radio} </label>
                            </li>
                        )
                    })}
                </ul>
            </div>


            <div className='cancel'>
                {selectRadio && (
                    <h5 onClick={() => setSelectRadio("")} > Annuler la recherche </h5>
                )}

            </div>



            <div className='countries-liste'>
                {sortData
                    .filter((country) => country.region.includes(selectRadio))
                    .map((country) => (
                        <Cards country={country} key={country.name} />
                    ))}
            </div>
        </div>
    );
};

export default Countries;