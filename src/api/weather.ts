const baseUrl = 'https://api.weatherbit.io/v2.0/';

export const fetchWeatherData = (city: string, country: string): Promise<any> =>
    fetch(
        `${baseUrl}current?city=${city}&country=${country}&key=${process.env.REACT_APP_RAPID_API_KEY}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

export const fetchForecastData = (
    city: string,
    country: string,
): Promise<any> =>
    fetch(
        `${baseUrl}forecast/daily?city=${city}&country=${country}&key=${process.env.REACT_APP_RAPID_API_KEY}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
