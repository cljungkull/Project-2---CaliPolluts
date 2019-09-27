function buildCharts(sample) {
    d3.csv(sample)
        .then(function(response) {

          // @TODO: Build a Bubble Chart using the sample data
          console.log('who trynna build some charts?');
          console.log(response.length)

          var traffic = response.map(function(d){return d["Traffic Pctl"]})
          var rent = response.map(function(d){return d["median_gross_rent"]})
          var pollution = response.map(function(d){return d["Pollution Burden Pctl"]})
          var zip = response.map(function(d){return d["ZIP"]})
          var city = response.map(function(d){return d["Nearby City"]})

          var zipcity = new Array(response.length);
          var arrayLength = zipcity.length;
          for (var i = 0; i < arrayLength; i++) {
            zipcity[i] = city[i] + ', CA, ' + zip[i] + ": " + pollution[i];
          }

          // var shade = new Array(response.length);
          // var arrayLength = shade.length
          // for (var i = 0; i < arrayLength; i++) {
          //   if (80 < pollution[i] < 100) {
          //     shade[i] = 'rgb(197,66,0)';
          //   } else if (60 < pollution[i] < 80) {
          //     shade[i] = 'rgb(204,136,0)';
          //   } else if (40 < pollution[i] < 60) {
          //     shade[i] = 'rgb(210,210,0)';
          //   } else if (20 < pollution[i] < 40) {
          //     shade[i] = 'rgb(114,216,0)';
          //   } else {
          //     shade[i] = 'rgb(74,223,0)';
          //   }
          // }

          // console.log(shade)
  
          // Create a 'payload' to feed to the chart function
          var ChartData = [
            {
              'x': traffic,
              'y': rent,
              'text': zipcity,
              'mode': 'markers',
              'marker': {
                // color: shade,
                size: pollution
              }
            }
          ];
  
          // Create a layout for the bubble chart
          var ChartLayout = {
            'xaxis': { 'title': 'tracts by traffic (x axis), rent (y-axis), pollution (size), zip code'},
            'height': 1200,
            'width': 1200
          };
  
          // build the bubble chart
          Plotly.plot('chart', ChartData, ChartLayout);
  
          console.log('bubble chart built')

        })
}

buildCharts("../dense_tracts_2.csv");