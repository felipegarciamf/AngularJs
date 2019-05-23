angular.module('alurapic').
		controller('FotosController', function($scope, $http){

			// scope é retornado para tela
			$scope.fotos = [];

			// ajax do angular
			// http cria uma promessa de trazer os dados de forma mais simplificada
			var promise = $http.get('v1/fotos')
			.success(function(fotos){
				$scope.fotos = fotos;
			})
			.error(function(erro){
				console.log("erro");
			});


			/*
			// ajax do angular
			// http cria uma promessa de trazer os dados
			var promise = $http.get('v1/fotos');
			// se a promessa for cumprida, então ele retorna os dados para scope
			promise.then(function(retorno){
				$scope.fotos = retorno.data;
			})
			// caso de error
			.catch(function(error){

				console.log("erro");
			});
			*/


		});