google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Horas al día'],
          ['Hacer tareas',     6],
          ['Comer',      1],
          ['Escuchar musica',  3],
          ['Estudiar', 8],
          ['Sleep',    6]
        ]);

        var options = {
          title: 'Mis actividades diarias',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
