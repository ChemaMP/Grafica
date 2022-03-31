google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Años', 'Ventas', 'Gastos'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Desempeño de la compañia',
          hAxis: {title: 'Año',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart'));
        chart.draw(data, options);
      }