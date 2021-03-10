import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import CardData from '../../components/CardData';

import { ICityWeatherData } from '../../common/types';
import { LONDON } from '../../common/constants';
import { fetchWeatherData } from '../../api/weather';

const initialState: ICityWeatherData = {};

const Home = (): JSX.Element => {
    const [london, setLondon] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchWeatherData(LONDON.CITY, LONDON.COUNTRY)
            .then((response) => response.json())
            .then(({ data }) => {
                setLondon({ ...data[0] });
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Layout title="Welcome to the Weather App">
                {loading && !error && <p>Loading...</p>}
                {!loading && error && <p>Something wrong with the API...</p>}
                {!loading && !error && Object.keys(london).length > 0 && (
                    <>
                        <h2 className="subheading">
                            Here you can see the weather condition for{' '}
                            <span>{london?.city_name}</span> in
                            <span> {london?.country_code}</span>
                        </h2>
                        <CardData data={london} />
                    </>
                )}
            </Layout>
        </div>
    );
};

export default Home;
