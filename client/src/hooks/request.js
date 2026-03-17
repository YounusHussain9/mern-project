async function httpGetPlanets() {
  const res = await fetch("http://localhost:8000/planets");
  const s = await res.json()
  console.log(s);
}

export default httpGetPlanets;
