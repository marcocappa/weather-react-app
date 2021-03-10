import React, { useState } from 'react';
import Layout from '../../components/Layout';
import FilterInput from '../../components/FilterInput';

import { CITIES } from '../../common/constants';
import ForecastCard from '../../components/ForecastCard';

const Forecast = (): JSX.Element => {
    const [minTemperature, setMinTemperature] = useState('');
    const [maxTemperature, setMaxTemperature] = useState('');

    const handleMinTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinTemperature(e?.target?.value);
    };

    const handleMaxTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxTemperature(e?.target?.value);
    };

    return (
        <Layout title="Forecast">
            <FilterInput
                label="Filter by Min temperature"
                onChange={handleMinTemperature}
            />
            <FilterInput
                label="Filter by Max temperature"
                onChange={handleMaxTemperature}
            />
            {minTemperature && <p>Showing items lower than {minTemperature}</p>}
            {maxTemperature && (
                <p>Showing items higher than {maxTemperature}</p>
            )}

            <h2 className="subheading">Here you can see the forecast:</h2>

            <div className="cards-container">
                {CITIES.map((location) => (
                    <ForecastCard
                        min={Number(minTemperature) || undefined}
                        max={Number(maxTemperature) || undefined}
                        key={location.CITY}
                        location={location}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Forecast;
