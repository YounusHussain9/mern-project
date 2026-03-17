const { parse } = require("csv-parse");
const fs = require("fs");
const habitAblePlanets = [];

function isHabitAblePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.366 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
fs.createReadStream("data/kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    }),
  )
  .on("data", (data) => {
    if (isHabitAblePlanet(data)) {
      habitAblePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(`${habitAblePlanets.length} habitable planets found`);
  });

module.exports = {
  planet: habitAblePlanets,
};
