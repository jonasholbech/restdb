fetch("https://frontendspring21-b266.restdb.io/rest/superheroes", {
  method: "get",
  headers: {
    "x-apikey": "63e94375478852088da680b0",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
