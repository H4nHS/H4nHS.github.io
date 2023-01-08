const API_KEY = "ca5f60bd157f658bd9f391cfd42b547f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("당신의 위치를 불러올 수 없어요! 날씨서비스 이용이 불가능합니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
