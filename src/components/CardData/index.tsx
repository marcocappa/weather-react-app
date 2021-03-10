import React from 'react';
import { ICityWeatherData } from '../../common/types';

const CardData = ({ data }: { data: ICityWeatherData }): JSX.Element => (
    <div className="card-data">
        <div>
            <p>
                Temperature: <span>{data?.temp} Celcius</span>
            </p>
            <p>
                Apparent temperature: <span>{data?.app_temp} Celcius</span>
            </p>
            <p>
                Relative humidity: <span>{data?.rh}%</span>
            </p>

            <p>
                Weather description:
                <span>{data?.weather?.description}</span>
            </p>
        </div>
        <div>
            <p>
                Last observation time: <span>{data?.ob_time}</span>
            </p>
            <p>
                Timezone: <span>{data?.timezone}</span>
            </p>
            <p>
                Pressure: <span>{data?.pres} mb</span>
            </p>
            <p>
                Wind Speed: <span>{data?.wind_spd} m/s</span>
            </p>
            <p>
                Wind Direction: <span>{data?.wind_dir} Degrees</span>
            </p>
        </div>
    </div>
);

export default CardData;
