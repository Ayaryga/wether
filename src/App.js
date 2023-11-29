import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [town, setTown] = useState("");
  const key = "5998041cc0cddb361e717eea5d0be21a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

  const cearchWeather = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        });
      setTown("");
    }
  };

  return (
    <div className="app">
      <div className="inp-field">
        <input
          type="text"
          value={town}
          onChange={(event) => setTown(event.target.value)}
          placeholder="Введіть назву міста en"
          onKeyDown={cearchWeather}
        />
      </div>
      <div className="conteiner">
        <div className="header">
          <div className="city">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="temp">
          {data.main ? (
            <h1>
              {data.main.temp.toFixed()}
              °C
            </h1>
          ) : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      {data.name !== undefined && (
        <div className="footer">
          <div className="fills">
            {data.main ? (
              <p className="bold">
                {data.main.feels_like.toFixed()}
                °C
              </p>
            ) : null}
             <p>Відчувається як</p>
          </div>
          <div className="humidity">
          {data.main ? (
              <p className="bold">
                {data.main.humidity}
                %
              </p>
            ) : null}
             <p>Вологість</p>
          </div>
          <div className="wind">
          {data.main ? (
              <p className="bold">
                {`${data.wind.speed} `}
                M/C
              </p>
            ) : null}
             <p>Швидкість вітру</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
