const tableTop20 = document.querySelector("#top20");
const tableOther = document.querySelector("#otherPL");

const top20 = [...tableTop20.rows].filter((_, idx) => idx !== 0).map(it => {
  return {
    position: Number(it.cells[0].textContent),
    name: it.cells[3].textContent,
    rating: it.cells[4].textContent
  };
});

const other = [...tableOther.rows].filter((_, idx) => idx !== 0).map(it => {
  return {
    position: Number(it.cells[0].textContent),
    name: it.cells[1].textContent,
    rating: it.cells[2].textContent
  };
});

console.log(JSON.stringify([...top20, ...other]));
