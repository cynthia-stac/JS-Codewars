function convertToCelsius (temperature) {
  let celsius = (temperature - 32) * (5/9)
  return celsius
}


function weatherInfo (temp) {
  let c = convertToCelsius(Math.floor(temp))
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}