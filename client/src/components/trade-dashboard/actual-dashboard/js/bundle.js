if(document.getElementById('depthchart')){
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("depthchart", am4charts.XYChart);

  // Add data
  chart.dataSource.url = "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50";
  chart.dataSource.reloadFrequency = 30000;
  chart.dataSource.adapter.add("parsedData", function(data) {
    
    // Function to process (sort and calculate cummulative volume)
    function processData(list, type, desc) {

      // Convert to data points
      for(var i = 0; i < list.length; i++) {
        list[i] = {
          value: Number(list[i][0]),
          volume: Number(list[i][1]),
        }
      }

      // Sort list just in case
      list.sort(function(a, b) {
        if (a.value > b.value) {
          return 1;
        }
        else if (a.value < b.value) {
          return -1;
        }
        else {
          return 0;
        }
      });

      // Calculate cummulative volume
      if (desc) {
        for(var i = list.length - 1; i >= 0; i--) {
          if (i < (list.length - 1)) {
            list[i].totalvolume = list[i+1].totalvolume + list[i].volume;
          }
          else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.unshift(dp);
        }
      }
      else {
        for(var i = 0; i < list.length; i++) {
          if (i > 0) {
            list[i].totalvolume = list[i-1].totalvolume + list[i].volume;
          }
          else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.push(dp);
        }
      }

    }

    // Init
    var res = [];
    processData(data.bids, "bids", true);
    processData(data.asks, "asks", false);

    return res;
  });

  // Set up precision for numbers
  chart.numberFormatter.numberFormat = "#,###.####";

  // Create axes
  var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  xAxis.dataFields.category = "value";
  //xAxis.renderer.grid.template.location = 0;
  xAxis.renderer.minGridDistance = 50;
  xAxis.title.text = "Price (BTC/ETH)";

  var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.title.text = "Volume";

  // Create series
  var series = chart.series.push(new am4charts.StepLineSeries());
  series.dataFields.categoryX = "value";
  series.dataFields.valueY = "bidstotalvolume";
  series.strokeWidth = 2;
  series.stroke = am4core.color("#0f0");
  series.fill = series.stroke;
  series.fillOpacity = 0.1;
  series.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

  var series2 = chart.series.push(new am4charts.StepLineSeries());
  series2.dataFields.categoryX = "value";
  series2.dataFields.valueY = "askstotalvolume";
  series2.strokeWidth = 2;
  series2.stroke = am4core.color("#f00");
  series2.fill = series2.stroke;
  series2.fillOpacity = 0.1;
  series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

  var series3 = chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.categoryX = "value";
  series3.dataFields.valueY = "bidsvolume";
  series3.strokeWidth = 0;
  series3.fill = am4core.color("#000");
  series3.fillOpacity = 0.2;

  var series4 = chart.series.push(new am4charts.ColumnSeries());
  series4.dataFields.categoryX = "value";
  series4.dataFields.valueY = "asksvolume";
  series4.strokeWidth = 0;
  series4.fill = am4core.color("#000");
  series4.fillOpacity = 0.2;

  // Add cursor
  chart.cursor = new am4charts.XYCursor();
}

var options = {
  bezierCurve : true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      }
    }],
    yAxes: [{
      gridLines: {
          display: false,
          drawBorder: false,
      },
      ticks: {
        display: false,
        beginAtZero: true,
      }
    }]
  },
  elements: {
      point:{
          radius: 0
      }
  }
};

var charts = document.getElementsByClassName("crypt-marketcap-canvas");
if(charts.length > 0){
  for( let chart of charts ){
    let data = JSON.parse(chart.dataset.charts);
    let bg = chart.dataset.bg;
    let border = chart.dataset.border;

    let canvas = chart.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 70);
      gradient.addColorStop(0, "transparent" );
      gradient.addColorStop(1, "transparent");
    let lineChartData = {
      labels : ["1","2","3","4","5","6","7","8","9"],
      datasets : [
          {
              backgroundColor : gradient,
              borderColor : '#' + border,
              data : data,
              bezierCurve : true
          }
      ]  
    }
    new Chart(ctx, {
      type:"line",
      data:lineChartData,
      options:options
    });
  }
}


var optionsForIndiv = {
  bezierCurve : true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      }
    }],
    yAxes: [{
      gridLines: {
          display: false,
          drawBorder: false,
      },
      ticks: {
        display: false,
        beginAtZero: true,
      }
    }]
  },
  elements: {
      point:{
          radius: 0
      }
  }
};

var chartsIndiv = document.getElementsByClassName("crypt-individual-marketcap");
if(chartsIndiv.length > 0){
  for( let chart of chartsIndiv ){
    let data = JSON.parse(chart.dataset.charts);
    let bg = chart.dataset.bg;
    let border = chart.dataset.border;

    let canvas = chart.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, "#" + bg);
      gradient.addColorStop(1, "transparent");
    let lineChartData = {
      labels : ["1","2","3","4","5","6","7","8","9"],
      datasets : [
          {
              backgroundColor : gradient,
              borderColor : '#' + border,
              data : data,
              bezierCurve : true
          }
      ]  
    }
    new Chart(ctx, {
      type:"line",
      data: lineChartData,
      options: optionsForIndiv
    });
  }
}
/*
Name: Main Js file for Crypterio Template
Date: 20 January 2019
Themeforest TopHive : https://themeforest.net/user/tophive
*/


'use strict';
jQuery(document).ready(function() {
  jQuery(document).on('click', '.crypt-header i.menu-toggle', function(){
    jQuery('.crypt-mobile-menu').toggleClass('show');
    jQuery(this).toggleClass('open')
  });

  jQuery(document).on('hover', '.crypt-mega-dropdown-toggle', function(){
    jQuery('.crypt-mega-dropdown-menu-block').toggleClass('shown');
  });
  jQuery(document).on('click', '.crypt-mega-dropdown-toggle', function(e){
    e.preventDefault();
    jQuery('.crypt-mega-dropdown-menu-block').toggleClass('shown');
  });
  jQuery('[data-toggle="tooltip"]').tooltip();

  jQuery('#crypt-tab a').on('click', function (e) {
      
      e.preventDefault();

      var x = jQuery(this).attr('href');
    jQuery(this).parents().find('.crypt-tab-content .tab-pane').removeClass('active');
    jQuery(this).parents().find('.crypt-tab-content .tab-pane' + x).addClass('active');
  });

  jQuery(document).on( 'click', '.crypt-coin-select a', function(e){
    e.preventDefault();
    var div = jQuery(this).attr('href');
    jQuery('.crypt-dash-withdraw').removeClass('d-block').addClass('d-none');
    jQuery(div).removeClass('d-none').addClass('d-block');
  });
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

   jQuery('ul.crypt-heading-menu > li > a').each(function() {
      if (this.href === path) {
         jQuery(this).parent('li').addClass('active');
      }else{
         jQuery(this).parent('li').removeClass('active');
      }
      jQuery('.crypt-box-menu').removeClass('active');
   });
   if(document.getElementById('crypt-candle-chart')){
     new TradingView.widget(
       {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "rgba(0, 0, 0, 1)",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "crypt-candle-chart"
      }
      );
   }
});