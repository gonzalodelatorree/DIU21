/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Hermengardo",
                Photo: "senior_mayor.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere un coche barato para seguir haciendo las cosas que realiza con asiduidad",
                touch1: "Su familia y amigos",
                feel1: "3",
                con1: "Tiene que elegir entre las opciones que le recomiendan sus allegados",
                ima1: "cartoon-looking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Coteja en internet las alternativas que tiene a su disposición",
                touch2: "El ordenador de sobremesa",
                feel2: "3",
                con2: "Hay demasiada información y pierde mucho tiempo",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Escoge tres opciones y llama a los teléfonos para preguntar",
                touch3: "Móvil",
                feel3: "2",
                con3: "Pensar en preguntas adecuadas",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Escucha atentamente a las personas que responden a las llamadas",
                touch4: "Móvil",
                feel4: "3",
                con4: "Memorizar o apuntar las respuestas",
                ima4: "cartoon-writting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se queda con la mejor opción y descarga la aplicación",
                touch5: "Móvil",
                feel5: "1",
                con5: "Manejar una aplicación de smartphone, que no entiende bien cómo funciona",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue finalmente alquilar un coche",
                touch6: "Móvil",
                feel6: "4",
                con6: "Como no tiene experiencia con este tipo de servicio, se siente inseguro sobre cómo llegará el coche a sus manos",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Ana González",
                Photo: "jovencita.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere irse de acampada con sus amigos a la Sierra de Guadarrama",
                touch1: "Móvil (Whatsapp)",
                feel1: "5",
                con1: "Comprobar la disponibilidad de sus amigos",
                ima1: "cartoon-planning.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Les pregunta a sus amigos cuál es la opción más barata para el desplazamiento",
                touch2: "Móvil (Whatsapp)",
                feel2: "4",
                con2: "Preguntarles",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Les echa un ojo a las opciones que le han presentado sus amigos",
                touch3: "Móvil y portátil",
                feel3: "3",
					 con3: "El precio es el parámetro más importante, pero no sabe exactamente qué otras cosas debe tener en cuenta",
                con3: "Tiene que invertir el poco tiempo libre que tiene en una tarea tediosa",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Les pide a sus amigos que le comenten las experiencias que han tenido",
                touch4: "Móvil (Whatsapp)",
                feel4: "3",
                con4: "Tiene que decidir en base a opiniones, que son subjetivas",
                ima4: "cartoon-speaking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Compara precios y opiniones de sus amigos y se descarga la aplicación",
                touch5: "Portátil y móvil",
                feel5: "1",
                con5: "Tiene que invertir el poco tiempo libre que tiene en una tarea tediosa",
                ima5: "cartoon-thinking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva por fin un coche para el fin de semana",
                touch6: "Móvil",
                feel6: "2",
                con6: "Tendrá que contactar con el dueño y confiar en que ha realizado los pasos correctamente",
                ima6: "cartoon-resting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



