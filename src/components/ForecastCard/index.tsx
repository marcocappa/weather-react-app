import React, { useState, useEffect } from 'react';

import { fetchForecastData } from '../../api/weather';
import { ICity, ICityForecastData } from '../../common/types';

const initialState: ICityForecastData = {
    temp: 0,
};

const ForecastCard = ({
    location,
    min,
    max,
}: {
    location: ICity;
    min: number | undefined;
    max: number | undefined;
}): JSX.Element | null => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchForecastData(location.CITY, location.COUNTRY)
            .then((response) => response.json())
            .then(({ data }) => {
                setData({ ...data[0] });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (Object.keys(data).length > 0 && max && data?.temp < max) {
        return null;
    }

    if (Object.keys(data).length > 0 && min && data?.temp > min) {
        return null;
    }

    return (
        <>
            {loading && (
                <div className="forecast-card">
                    <p>loading...</p>
                </div>
            )}
            {!loading && Object.keys(data).length > 0 && (
                <div className="forecast-card">
                    <h3>{location.CITY}</h3>
                    <p>Temperature: {data?.temp}</p>
                </div>
            )}
            {!loading && error && (
                <div className="forecast-card">
                    <p className="error">Something went wrong!</p>
                </div>
            )}
        </>
    );
};

export default ForecastCard;
