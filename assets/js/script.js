// Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(chart_senior) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'County');
        data.addColumn('number', 'Wins');
        data.addRows([
          ['Kilkenny', 2],
          ['Galway', 2],
          ['Cork', 9],
          ['Wexford', 4],
          ['Tipperary', 4]
        ]);

        // Set chart options
        var options = {'title':'Senior Camogie All-Ireland Champions 2000-2019',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_senior'));
        chart.draw(data, options);
      }

      function drawChart(chart_minor) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'County');
        data.addColumn('number', 'Wins');
        data.addRows([
          ['Kilkenny', 6],
          ['Galway', 3],
          ['Cork', 2],
          ['Limerick', 1],
          ['Tipperary', 2]
        ]);

        // Set chart options
        var options = {'title':'Minor Camogie All-Ireland Champions 2000-2019',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_minor'));
        chart.draw(data, options);
      }
      function drawChart(chart_u16) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'County');
        data.addColumn('number', 'Wins');
        data.addRows([
          ['Kilkenny', 4],
          ['Galway', 8],
          ['Cork', 3],
          ['Dublin', 1],
          ['Tipperary', 3]
        ]);

        // Set chart options
        var options = {'title':'Minor Camogie All-Ireland Champions 2000-2019',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_u16'));
        chart.draw(data, options);
      }
      function drawChart(chart_college) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'County');
        data.addColumn('number', 'Wins');
        data.addRows([
          ['Kilkenny', 9],
          ['Galway', 2],
          ['Cork', 4],
          ['Waterford', 1],
          ['Wexford', 1],
          ['Tipperary', 1]
        ]);

        // Set chart options
        var options = {'title':'Minor Camogie All-Ireland Champions 2000-2019',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_u16'));
        chart.draw(data, options);
      }