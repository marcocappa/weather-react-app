export interface ICity {
    CITY: string;
    COUNTRY: string;
}

export interface ICityWeatherData {
    rh?: number;
    pod?: string;
    lon?: number;
    pres?: number;
    timezone?: string;
    ob_time?: string;
    country_code?: string;
    clouds?: number;
    ts?: number;
    solar_rad?: number;
    state_code?: string;
    city_name?: string;
    wind_spd?: number;
    wind_cdir_full?: string;
    wind_cdir?: string;
    slp?: number;
    vis?: number;
    h_angle?: number;
    sunset?: string;
    dni?: number;
    dewpt?: number;
    snow?: number;
    uv?: number;
    precip?: 0;
    wind_dir?: number;
    sunrise?: string;
    ghi?: number;
    dhi?: number;
    aqi?: number;
    lat?: number;
    weather?: { icon?: string; code?: number; description?: string };
    datetime?: string;
    temp?: number;
    station?: string;
    elev_angle?: number;
    app_temp?: number;
}

export interface ICityForecastData {
    moonrise_ts?: number;
    wind_cdir?: string;
    rh?: number;
    pres?: number;
    high_temp?: number;
    sunset_ts?: number;
    ozone?: number;
    moon_phase?: number;
    wind_gust_spd?: number;
    snow_depth?: number;
    clouds?: number;
    ts?: number;
    sunrise_ts?: number;
    app_min_temp?: number;
    wind_spd?: number;
    pop?: number;
    wind_cdir_full?: string;
    slp?: number;
    moon_phase_lunation?: number;
    valid_date?: string;
    app_max_temp?: number;
    vis?: number;
    dewpt?: number;
    snow?: number;
    uv?: number;
    weather?: { icon?: string; code?: number; description?: string };
    wind_dir?: number;
    max_dhi?: number;
    clouds_hi?: number;
    precip?: number;
    low_temp?: string;
    max_temp?: number;
    moonset_ts?: number;
    datetime?: string;
    temp: number;
    min_temp?: number;
    clouds_mid?: number;
    clouds_low?: number;
}
