/**
 * Cube - Bootstrap Admin Theme
 * Copyright 2014 Phoonio
 */

function mainCtrl($scope, $uibModal) {
	$('#page-wrapper').removeClass('nav-small');

	let vehicleDetailsExample = {
		name: 'ABCDEIN',
		vin: 'FFFFFF'
	}

	$scope.labels = ["Riesgo Minimo", "Riesgo Moderado", "Riesgo Alto"];
  	$scope.data = [250, 800, 400];


	$scope.openVehicleDetails = function(size) {
		let modalInstance = $uibModal.open({
		animation: true,
		templateUrl: 'VehicleDetailsModal.html',
		controller: 'modalInstanceCtrl'	,
		// size: size,
		size: 'md',
		resolve: {
			vehicleDetails: function() {
				return 	vehicleDetailsExample
			}	
		}

		}) 

	}


	$scope.openVehicleMaintenances = function(size) {
		let modalInstance = $uibModal.open({
		animation: true,
		templateUrl: 'VehicleMaintenanceModal.html',
		controller: 'modalInstanceCtrl'	,
		// size: size,
		size: 'md',
		resolve: {
			vehicleDetails: function() {
				return 	vehicleDetailsExample
			}	
		}

		}) 

	}

	$scope.selectOptions = {
            placeholder: "Selecciona Cliente...",
            dataTextField: "name",
            dataValueField: "id",
            valuePrimitive: true,
            autoBind: false,
            dataSource:[
            {"id":1, "name":"Codelco"},
            {"id":2, "name":"Anglo American"},
            {"id":3, "name":"Escondida"}
            ]
            // dataSource: {
            //     type: "odata",
            //     serverFiltering: true,
            //     transport: {
            //         read:{
            //             url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
            //         }
            //     }
            // }
     };
}

function modalInstanceCtrl($scope, $uibModalInstance, vehicleDetails){
	console.log('Modal Opened');
	$scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  $scope.series = ['Ideal', 'Real'];
  $scope.vehicleDetails = vehicleDetails;
  $scope.close = function(){
	$uibModalInstance.dismiss();
}
  // $scope.data = [
  //   [100, 80, 70, 60, 50, 40, 30],
  //   [100, 70, 70, 50, 40, 20, 20]
  // ];


  $scope.data = [
    [100, 80, 70, 60, 50, 80, 50]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  // $scope.options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         id: 'y-axis-1',
  //         type: 'linear',
  //         display: true,
  //         position: 'left'
  //       },
  //       {
  //         id: 'y-axis-2',
  //         type: 'linear',
  //         display: true,
  //         position: 'right'
  //       }
  //     ]
  //   }
  // };

}

function emailCtrl($scope) {
	if (!$('#page-wrapper').hasClass('nav-small')) {
		$('#page-wrapper').addClass('nav-small');
	}
}

function easyChartCtrl($scope) {

	$scope.percent = 65;
	$scope.options = {
		barColor: '#03a9f4',
		trackColor: '#f2f2f2',
		scaleColor: false,
		lineWidth: 8,
		size: 130,
		animate: 1500,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		},
	};

	$scope.optionsGreen = angular.copy($scope.options);
	$scope.optionsGreen.barColor = '#8bc34a';
	
	$scope.optionsRed = angular.copy($scope.options);
	$scope.optionsRed.barColor = '#e84e40';
	
	$scope.optionsYellow = angular.copy($scope.options);
	$scope.optionsYellow.barColor = '#ffc107';
	
	$scope.optionsPurple = angular.copy($scope.options);
	$scope.optionsPurple.barColor = '#9c27b0';
	
	$scope.optionsGray = angular.copy($scope.options);
	$scope.optionsGray.barColor = '#90a4ae';
};

function getMonthYear(dString) {
	let year = parseInt('20' + dString.substring(0,2)),
		month = parseInt(dString.substring(2));
	return [year, month]
}

function dashboardFlotCtrl($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
	// fetch('http://200.111.253.124/nimbusan/getSingleInfo.php?id=1333095548')
	// 	.then(response => response.json())
	// 	.then(responseObject => console.log(responseObject));
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
// };

	// var data1 = [
	//     [gd(2015, 1, 1), 838], [gd(2015, 1, 2), 749], [gd(2015, 1, 3), 634], [gd(2015, 1, 4), 1080], [gd(2015, 1, 5), 850], [gd(2015, 1, 6), 465], [gd(2015, 1, 7), 453], [gd(2015, 1, 8), 646], [gd(2015, 1, 9), 738], [gd(2015, 1, 10), 899], [gd(2015, 1, 11), 830], [gd(2015, 1, 12), 789]
	// ];

	
	// var data2 = [
	//     [gd(2015, 1, 1), 342], [gd(2015, 1, 2), 721], [gd(2015, 1, 3), 493], [gd(2015, 1, 4), 403], [gd(2015, 1, 5), 657], [gd(2015, 1, 6), 782], [gd(2015, 1, 7), 609], [gd(2015, 1, 8), 543], [gd(2015, 1, 9), 599], [gd(2015, 1, 10), 359], [gd(2015, 1, 11), 783], [gd(2015, 1, 12), 680]
	// ];
	
	// var series = new Array();

	// series.push({
	// 	data: data1,
	// 	color: '#e84e40',
	// 	lines: {
	// 		show : true,
	// 		lineWidth: 3,
	// 	},
	// 	points: { 
	// 		fillColor: "#e84e40", 
	// 		fillColor: '#ffffff', 
	// 		pointWidth: 1,
	// 		show: true 
	// 	},
	// 	label: 'Teorico'
	// });

	// series.push({
	// 	data: data2,
	// 	color: '#e84e40',
	// 	lines: {
	// 		show : true,
	// 		lineWidth: 3,
	// 	},
	// 	points: { 
	// 		fillColor: "#e84e40", 
	// 		fillColor: '#ffffff', 
	// 		pointWidth: 1,
	// 		show: true 
	// 	},
	// 	label: 'Uso Real'
	// });

	// $.plot("#graph-bar", series, {
	// 	colors: ['#03a9f4', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#95a5a6'],
	// 	grid: {
	// 		tickColor: "#f2f2f2",
	// 		borderWidth: 0,
	// 		hoverable: true,
	// 		clickable: true
	// 	},
	// 	legend: {
	// 		noColumns: 1,
	// 		labelBoxBorderColor: "#000000",
	// 		position: "ne"       
	// 	},
	// 	shadowSize: 0,
	// 	xaxis: {
	// 		mode: "time",
	// 		tickSize: [1, "month"],
	// 		tickLength: 0,
	// 		// axisLabel: "Date",
	// 		axisLabelUseCanvas: true,
	// 		axisLabelFontSizePixels: 12,
	// 		axisLabelFontFamily: 'Open Sans, sans-serif',
	// 		axisLabelPadding: 10
	// 	}
	// });

	// var previousPoint = null;
	// $("#graph-bar").bind("plothover", function (event, pos, item) {
	// 	if (item) {
	// 		if (previousPoint != item.dataIndex) {

	// 			previousPoint = item.dataIndex;

	// 			$("#flot-tooltip").remove();
	// 			var x = item.datapoint[0],
	// 			y = item.datapoint[1];

	// 			showTooltip(item.pageX, item.pageY, item.series.label, y );
	// 		}
	// 	}
	// 	else {
	// 		$("#flot-tooltip").remove();
	// 		previousPoint = [0,0,0];
	// 	}
	// });
}

angular
	.module('cubeWebApp')
	.controller('mainCtrl', mainCtrl)
	.controller('emailCtrl', emailCtrl)
	.controller('easyChartCtrl', easyChartCtrl)
	.controller('modalInstanceCtrl', modalInstanceCtrl)
	.controller('dashboardFlotCtrl', dashboardFlotCtrl)
	
