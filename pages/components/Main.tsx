import Head from "next/head";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const changeImage = (weather: string) => {
    if (weather === "Clear") {
      return "/Clear.png";
    } else if (weather === "Light Cloud") {
      return "/LightCloud.png";
    } else if (weather === "Heavy Cloud") {
      return "/HeavyCloud.png";
    } else if (weather === "Shower") {
      return "/Shower.png";
    } else if (weather === "Light Rain") {
      return "/LightRain.png";
    } else if (weather === "Heavy Rain") {
      return "/HeavyRain.png";
    } else if (weather === "Sleet") {
      return "/Sleet.png";
    } else if (weather === "Snow") {
      return "/Snow.png";
    } else if (weather === "Thunderstorm") {
      return "/Thunderstorm.png";
    } else if (weather === "Hail") {
      return "/Hail.png";
    }
  };
  const [celcius, setCelcius] = useState(true);
  const [search, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([
    {
      consolidated_weather: [
        {
          id: 5240159348981760,
          weather_state_name: "Light Cloud",
          weather_state_abbr: "lc",
          wind_direction_compass: "NW",
          created: "2022-01-19T04:33:55.361675Z",
          applicable_date: "2022-01-19",
          min_temp: 13.785,
          max_temp: 24.585,
          the_temp: 20.105,
          wind_speed: 4.718247660937458,
          wind_direction: 319.6670094218673,
          air_pressure: 1015,
          humidity: 58,
          visibility: 11.083397955937325,
          predictability: 70,
        },
        {
          id: 5834798477082624,
          weather_state_name: "Clear",
          weather_state_abbr: "c",
          wind_direction_compass: "NW",
          created: "2022-01-19T04:33:58.648237Z",
          applicable_date: "2022-01-20",
          min_temp: 12.850000000000001,
          max_temp: 25.185000000000002,
          the_temp: 22.435000000000002,
          wind_speed: 3.3111875081338322,
          wind_direction: 305.99173569253674,
          air_pressure: 1013.5,
          humidity: 45,
          visibility: 10.909724707706992,
          predictability: 68,
        },
        {
          id: 6370100752941056,
          weather_state_name: "Light Rain",
          weather_state_abbr: "lr",
          wind_direction_compass: "SSE",
          created: "2022-01-19T04:34:01.378379Z",
          applicable_date: "2022-01-21",
          min_temp: 14.86,
          max_temp: 25.7,
          the_temp: 23.995,
          wind_speed: 2.9770218641719026,
          wind_direction: 161.8423627577074,
          air_pressure: 1013,
          humidity: 58,
          visibility: 10.77240167422254,
          predictability: 75,
        },
        {
          id: 5761137002938368,
          weather_state_name: "Heavy Cloud",
          weather_state_abbr: "hc",
          wind_direction_compass: "SE",
          created: "2022-01-19T04:34:04.745420Z",
          applicable_date: "2022-01-22",
          min_temp: 17.555,
          max_temp: 27.09,
          the_temp: 25.17,
          wind_speed: 2.9452256662053604,
          wind_direction: 127.75187292121157,
          air_pressure: 1011.5,
          humidity: 59,
          visibility: 6.242294997216257,
          predictability: 71,
        },
        {
          id: 4813471259557888,
          weather_state_name: "Light Rain",
          weather_state_abbr: "lr",
          wind_direction_compass: "ESE",
          created: "2022-01-19T04:34:07.361873Z",
          applicable_date: "2022-01-23",
          min_temp: 17.91,
          max_temp: 27.695,
          the_temp: 26.485,
          wind_speed: 4.707365025663459,
          wind_direction: 104.08175408132323,
          air_pressure: 1011.5,
          humidity: 61,
          visibility: 9.522202835441025,
          predictability: 75,
        },
        {
          id: 5055738687782912,
          weather_state_name: "Heavy Rain",
          weather_state_abbr: "hr",
          wind_direction_compass: "ENE",
          created: "2022-01-19T04:34:11.169458Z",
          applicable_date: "2022-01-24",
          min_temp: 17.975,
          max_temp: 24.525,
          the_temp: 22.71,
          wind_speed: 4.410216137755508,
          wind_direction: 69.49999999999999,
          air_pressure: 1012,
          humidity: 81,
          visibility: 9.478396166388292,
          predictability: 77,
        },
      ],
      time: "2022-01-19T11:31:34.857711+05:30",
      sun_rise: "2022-01-19T06:18:41.023984+05:30",
      sun_set: "2022-01-19T17:15:48.873399+05:30",
      timezone_name: "LMT",
      parent: {
        title: "India",
        location_type: "Country",
        woeid: 23424848,
        latt_long: "21.786600,82.794762",
      },
      sources: [
        {
          title: "BBC",
          slug: "bbc",
          url: "http://www.bbc.co.uk/weather/",
          crawl_rate: 360,
        },
        {
          title: "Forecast.io",
          slug: "forecast-io",
          url: "http://forecast.io/",
          crawl_rate: 480,
        },
        {
          title: "HAMweather",
          slug: "hamweather",
          url: "http://www.hamweather.com/",
          crawl_rate: 360,
        },
        {
          title: "Met Office",
          slug: "met-office",
          url: "http://www.metoffice.gov.uk/",
          crawl_rate: 180,
        },
        {
          title: "OpenWeatherMap",
          slug: "openweathermap",
          url: "http://openweathermap.org/",
          crawl_rate: 360,
        },
        {
          title: "Weather Underground",
          slug: "wunderground",
          url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
          crawl_rate: 720,
        },
        {
          title: "World Weather Online",
          slug: "world-weather-online",
          url: "http://www.worldweatheronline.com/",
          crawl_rate: 360,
        },
      ],
      title: "Kolkata",
      location_type: "City",
      woeid: 2295386,
      latt_long: "22.549940,88.371582",
      timezone: "Asia/Kolkata",
    },
  ]);

  const fetchData = async (woeid: number) => {
    const response = await fetch(
      `https://www.metaweather.com/api/location/${woeid.toString()}/`,
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "https://metaweather.com/api/",
        },
      }
    );
    const data = await response.json();
    setData([data]);
  };

  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${searchKey}`,
      // add AccessControlOrigin header
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "https://metaweather.com/api/",
        },
      }
    );
    const data = await response.json();
    setSearch(false);
    setLoading(true);
    setSearchKey("");
    fetchData(data[0].woeid);
    setLoading(false);
  };

  // create a function to change celcius to farhenreit
  const changeToFarhenreit = (celcius: string) => {
    const farhenreit = (parseInt(celcius) * 9) / 5 + 32;
    return farhenreit.toFixed(0);
  };

  useEffect(() => {
    fetchData(44418);
  }, []);

  console.log(data);

  return (
    <div className="flex md:flex-row flex-col">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      {/* Sidebar */}
      <div className="flex-[0.45] bg-[#1E213A] relative min-h-screen text-[#E7E7EB] pt-10">
        {search ? (
          <div className="animate-slide-in animate-slide-out">
            <div
              className="text-6xl cursor-pointer absolute top-0 right-0"
              onClick={() => setSearch(false)}
            >
              &times;
            </div>
            <div className="flex items-center mt-20 justify-center mx-10 space-x-10">
              <div className="border-2 flex items-center pl-2">
                <span className="material-icons opacity-50">search</span>
                <input
                  type="text"
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  placeholder="Search for a place"
                  className="flex-1 outline-none bg-transparent  text-xl p-2"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 bg-[#3C47E9]"
                onClick={(e) => {
                  fetchWeather(e);
                }}
              >
                Search
              </button>
            </div>
          </div>
        ) : (
          <>
            {" "}
            {/* Buttons */}
            <div className="flex items-center justify-around">
              <button
                className="px-4 py-2 bg-[#6E707A] rounded-sm shadow-md hover:opacity-75 active:opacity-90 transition z-50"
                onClick={() => setSearch(true)}
              >
                Search for places
              </button>
              <button className="p-2 rounded-full flex justify-center items-center hover:opacity-75 active:opacity-90 transition bg-[#6E707A] shadow-md">
                <span className="material-icons">place</span>
              </button>
            </div>
            {/* Cloud main report */}
            <div className="flex flex-col justify-center items-center relative mt-10">
              <div className="flex justify-center items-center mx-auto my-auto mb-14">
                <img
                  src="/Cloud-Background.png"
                  className="opacity-10 object-contain absolute "
                  alt=""
                  width="100%"
                />
                {loading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <img
                    src={changeImage(
                      data[0]?.consolidated_weather[0]?.weather_state_name
                    )}
                    alt=""
                  />
                )}
              </div>
              <div className="flex flex-col justify-center items-center space-y-9">
                {loading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <h1 className="text-5xl">
                    <span className="text-7xl font-bold">
                      {celcius
                        ? data[0]?.consolidated_weather[0]?.the_temp.toFixed(0)
                        : changeToFarhenreit(
                            data[0]?.consolidated_weather[0]?.the_temp.toFixed(
                              0
                            )
                          )}
                    </span>
                    °{celcius ? "C" : "F"}
                  </h1>
                )}
                <h2 className="text-3xl text-[#A09FB1]">
                  {data[0]?.consolidated_weather[0]?.weather_state_name}
                </h2>
                <h3 className="text-md text-[#A09FB1]">
                  Today • {data[0]?.consolidated_weather[0]?.applicable_date}
                </h3>
                <h6 className="text-sm flex justify-center items-center text-[#88869D]">
                  <span className="material-icons text-sm">place</span>
                  {data[0]?.title}
                </h6>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Whole report */}
      <div className="flex-1">
        {/* Celcius and Farhenreit */}
        <div className="flex justify-end m-5 p-5">
          <div className="flex space-x-2 justify-center items-center text-white">
            <button
              className={`text-lg p-3 px-5 hover:opacity-50 transition ${
                celcius ? "bg-gray-200" : "bg-gray-500"
              } ${celcius ? "text-black" : "text-white"} rounded-full`}
              onClick={() => setCelcius(true)}
            >
              C°
            </button>
            <button
              className={`text-lg p-3 px-5 hover:opacity-50 transition ${
                celcius ? "bg-gray-500" : "bg-gray-200"
              } ${celcius ? "text-white" : "text-black"} rounded-full`}
              onClick={() => setCelcius(false)}
            >
              F°
            </button>
          </div>
        </div>

        {/* Weather report */}
        <div className="flex flex-wrap items-stretch justify-around space-y-4 space-x-5 md:space-x-5 mx-5">
          <WeatherCard
            data={data}
            date={data[0]?.consolidated_weather[0]?.applicable_date}
            minTemp={data[0]?.consolidated_weather[0]?.min_temp.toFixed(0)}
            maxTemp={data[0]?.consolidated_weather[0]?.max_temp.toFixed(0)}
            weather={data[0]?.consolidated_weather[0]?.weather_state_name}
            celcius={celcius}
            loading={loading}
          />
          <WeatherCard
            data={data}
            date={data[0]?.consolidated_weather[1]?.applicable_date}
            minTemp={data[0]?.consolidated_weather[1]?.min_temp.toFixed(0)}
            maxTemp={data[0]?.consolidated_weather[1]?.max_temp.toFixed(0)}
            weather={data[0]?.consolidated_weather[1]?.weather_state_name}
            celcius={celcius}
            loading={loading}
          />
          <WeatherCard
            data={data}
            date={data[0]?.consolidated_weather[2]?.applicable_date}
            minTemp={data[0]?.consolidated_weather[2]?.min_temp.toFixed(0)}
            maxTemp={data[0]?.consolidated_weather[2]?.max_temp.toFixed(0)}
            weather={data[0]?.consolidated_weather[2]?.weather_state_name}
            celcius={celcius}
            loading={loading}
          />
          <WeatherCard
            data={data}
            date={data[0]?.consolidated_weather[3]?.applicable_date}
            minTemp={data[0]?.consolidated_weather[3]?.min_temp.toFixed(0)}
            maxTemp={data[0]?.consolidated_weather[3]?.max_temp.toFixed(0)}
            weather={data[0]?.consolidated_weather[3]?.weather_state_name}
            celcius={celcius}
            loading={loading}
          />
          <WeatherCard
            data={data}
            date={data[0]?.consolidated_weather[4]?.applicable_date}
            minTemp={data[0]?.consolidated_weather[4]?.min_temp.toFixed(0)}
            maxTemp={data[0]?.consolidated_weather[4]?.max_temp.toFixed(0)}
            weather={data[0]?.consolidated_weather[4]?.weather_state_name}
            celcius={celcius}
            loading={loading}
          />
        </div>

        {/* Today's Highlights */}
        <h1 className="text-2xl text-white mx-5 mt-10">Today's Highlights</h1>
        <div className="grid md:grid-cols-2 md:grid-rows-2 text-white mx-5 mt-5 gap-y-7 md:gap-y-4 justify-items-center items-stretch pb-5">
          <div className="p-5 bg-[#1E213A] rounded-sm justify-center flex items-center flex-col space-y-2 w-[328px]">
            <h4 className="text-sm">Wind Status</h4>
            <h1 className="text-3xl">
              <span className="text-5xl font-bold">
                {data[0]?.consolidated_weather[0]?.wind_speed.toFixed(0)}
              </span>{" "}
              mph
            </h1>
          </div>
          <div className="p-5 bg-[#1E213A] rounded-sm justify-center flex items-center flex-col space-y-2 w-[328px]">
            <h4 className="text-sm">Humidity</h4>
            <h1 className="text-3xl">
              <span className="text-5xl font-bold">
                {data[0]?.consolidated_weather[0]?.humidity}
              </span>{" "}
              %
            </h1>
            <progress
              value={data[0]?.consolidated_weather[0]?.humidity}
              max="100"
            >
              {data[0]?.consolidated_weather[0]?.humidity}%
            </progress>
          </div>
          <div className="p-5 bg-[#1E213A] rounded-sm justify-center flex items-center flex-col space-y-2 w-[328px]">
            <h4 className="text-sm">Visibility</h4>
            <h1 className="text-3xl">
              <span className="text-5xl font-bold">
                {data[0]?.consolidated_weather[0]?.visibility.toFixed(0)}
              </span>{" "}
              miles
            </h1>
          </div>
          <div className="p-5 bg-[#1E213A] rounded-sm justify-center flex items-center flex-col space-y-2 w-[328px]">
            <h4 className="text-sm">Air Pressure</h4>
            <h1 className="text-3xl">
              <span className="text-5xl font-bold">
                {data[0]?.consolidated_weather[0]?.air_pressure}
              </span>{" "}
              mb
            </h1>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-white p-2">
          Created by{" "}
          <a href="https://adion.vercel.app" target="_blank">
            Adion
          </a>{" "}
          - devChallgenges.io
        </div>
      </div>
    </div>
  );
};

export default Main;
