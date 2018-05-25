var austin_weather = [{
    date: "2018-02-01",
    low: 51,
    high: 76
  },
  {
    date: "2018-02-02",
    low: 47,
    high: 59
  },
  {
    date: "2018-02-03",
    low: 44,
    high: 59
  },
  {
    date: "2018-02-04",
    low: 52,
    high: 73
  },
  {
    date: "2018-02-05",
    low: 47,
    high: 71
  },
]
// YOUR CODE HERE

/* d3.select("table").selectAll("tbody")
    .each(function (d, i) {
        console.log("element", this);
        console.log("data", d);
        console.log("index", i);
    }); */

d3.select("tbody")
    .selectAll("tr")
    .data(austin_weather)
    .enter()
    .append('tr')
    .html(function (d) {
        return `<td>${d.date}</td><td>${d.low}</td><td>${d.high}</td>`;
    });

