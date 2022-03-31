google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ['Champiñones', 2, "#b87333"],
        ['Cebollas', 1, "silver"],
        ['Aceitunas', 1, "gold"],
        ['Queso', 2, "color: #e5e4e2"],
        ['Pepperoni', 1, "#d63384"],
        ['Piña', 1, "#6610f2"],
        ['Jamón', 2., "#20c997"],
        ['Frijoles', 0, "#ffc107"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "¿Cuanta pizza comiste en estos días?",
        width: 400,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }