const https = require("https");
const url =
"https://api.mapbox.com/geocoding/v5/mapbox.places/kakinada.json?access_token=pk.eyJ1IjoieWFzYXN2eSIsImEiOiJja2JpenQzZjMwazkwMzFwanBjMjZvODJqIn0.AykPNtnL3gLtT4NYNWci7w&limit=1";
const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
