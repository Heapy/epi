# using `var` here to simplify debugging
var tableTop20 =  document.querySelectorAll("table")[0];
var tableOther =  document.querySelectorAll("table")[1];

var top20 = [...tableTop20.rows].filter((_, idx) => idx !== 0).map(it => {
  return {
    position: Number(it.cells[0].textContent),
    name: it.cells[3].textContent,
    rating: it.cells[4].textContent
  };
});

var other = [...tableOther.rows].filter((_, idx) => idx !== 0).map(it => {
  return {
    position: Number(it.cells[0].textContent),
    name: it.cells[1].textContent,
    rating: it.cells[2].textContent
  };
});

console.log(JSON.stringify([...top20, ...other]));
