/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Hermengardo",
				Photo: "senior_mayor.jpg",
				Quote: "Primero trabajas y después descansas",
				Age: 67,
				Occupation: "Jubilado",
				Family: "Una esposa y tres hijos",
				Location: "Málaga (Torremolinos)",
				Character: "Le gusta ir al bar a tomar whisky con hielo y fumar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Pasar un buen rato con los colegas del bar", "Darle un buen uso a su huerta particular", "Ir a pescar con más regularidad"],
				Frustrations: ["Tiene un smartphone, pero le da poco uso porque no lo acaba de entender", "Las rentas de jubilado le parece que son insuficientes para lo que ha aportado", "Siente desconexión con sus hijos. Rara vez habla con ellos porque no le llaman y él tampoco los llama a ellos"],
				Bio: "Es natural de Málaga y ha vivido allí toda su vida. Ha trabajado como fontanero durante 41 años y siempre ha tratado de ser competente en su trabajo. Es una persona estricta, pero comprensiva en aquello donde da su brazo a torcer. Le gusta hacer las cosas a su manera y detesta a los aduladores.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos: "Se le ha averiado el coche y lo necesita para desplazarse, especialmente al extrarradio, donde se encuentra su huerta",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Ana González",
				Photo: "jovencita.jpg",
				Quote: "Para no arrepentirte de lo que no has hecho, hazlo",
				Age: 21,
				Occupation: "Estudiante de enfermería",
				Family: "Un padre y una madre. Hija única",
				Location: "Madrid",
				Character: "Le gusta ir a la sierra en los fines de semana",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Le gustaría ser capaz de ayudar a las personas", "Quiere sacarse la carrera con matrícula", "Necesita dinero para poder viajar a donde le gustaría"],
				Frustrations: ["No le gusta arrepentirse, especialmente de lo que no ha hecho", "A veces siente ansiedad por la cantidad de trabajo que tiene que hacer", "Tiene que ahorrar, porque su familia es relativamente pobre", "Tiene poco tiempo libre"],
				Bio: "Es una chica inteligente y responsable que siempre se ha esforzado por llevar bien sus estudios. Tiene amigos de toda la vida y muchos conocidos, con los que se lleva bien. Le gustan las caminatas en la montaña y viajar adonde pueda con el poco dinero que tiene a su disposición. A pesar de tener un don para hacer amigos, se le hace difícil entablar relaciones románticas con los hombres. debido a su ajetreada vida y el poco tiempo que puede dedicarles.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "No tiene coche y quiere poder desplazarse, ahorrándose lo que sea posible, a los distintos lugares que ofrecen las cercanías de la Comunidad de Madrid" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
