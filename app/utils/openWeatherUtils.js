import axios from 'axios'

const API_KEY = '7ce0cf5b94872c8e85c0a6eb1894927c'
const API_DOMAIN = 'api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml'

const get5daysForecast = (city) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&APPID=${API_KEY}&cnt=5`).then((response) => {
    return response.data
  })
}

const openWeatherUtils = {
  getForecast (city) {
    return get5daysForecast(city)
  },
  getDate: getDate,
  convertTemp: function (kelvin) {
    return parseInt(((kelvin - 273.15) * 1.8000 + 32.00), 10)
  }
}

var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
}

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
}

function getDate (unixTimestmap) {
  var date = new Date(unixTimestmap * 1000)
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate()
  return day + ', ' + month
}

export default openWeatherUtils
