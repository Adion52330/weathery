import React from "react";

const WeatherCard = (props: any) => {
  // create a function to change image according to the weather report
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

  const changeToFarhenreit = (celcius: string) => {
    const farhenreit = (parseInt(celcius) * 9) / 5 + 32;
    return farhenreit.toFixed(0);
  };

  return (
    <div className="bg-[#1E213A] p-5 flex flex-col w-[120px] justify-between text-white shadow-lg rounded-md">
      {/* Day */}
      <h5 className="text-center justify-self-start">{props.date}</h5>
      {/* Image */}
      <img src={changeImage(props.weather)} className="mx-auto " alt="" />
      {/* Min and max temp */}
      <div className="flex justify-between justify-self-end">
        <p className="text-lg text-[#E7E7EB]">
          {props.celcius ? props.minTemp : changeToFarhenreit(props.minTemp)}°
          {props.celcius ? "C" : "F"}
        </p>
        <p className="text-lg text-[#A09FB1]">
          {props.celcius ? props.maxTemp : changeToFarhenreit(props.maxTemp)}°
          {props.celcius ? "C" : "F"}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
