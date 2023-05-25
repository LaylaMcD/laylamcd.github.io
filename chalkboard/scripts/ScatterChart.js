var scatterCanvas = document.getElementById("scatterChart");

Chart.defaults.font.family = "Helvetica Neue";
Chart.defaults.font.size = 18;

const data = {
    datasets: [{
      label: 'Country Population',
      data: [{
        x: 100,
        y: 0,
      }, {
        x: 60,
        y: 30,
      }, {
        x: 40,
        y: 60,
      }, {
        x: 80,
        y: 80,
      }, {
        x: 20,
        y: 30,
      }, {
        x: 0,
        y: 100,
      }],
      backgroundColor: "#800000"
    }]
};

var scatterChart = new Chart(scatterCanvas, {
    type: 'scatter',
    data: popData
});


