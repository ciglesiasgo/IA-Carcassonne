//Granja

puntosGranja = function(ficha,prohibido){
		var granjeros= [];
		var fichas = [];
		var fichasciudad = [];
		var granjero;
		var ciudad = 0;

		var granja = function(ficha){
			fichas.push({x:ficha.x, y:ficha.y});
//CAMPO
			if(ficha.arriba== "Campo" && prohibido != "arriba"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.y-1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});
				if(_.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){		
					if (ficha2.lleno){
						if (ficha2.derecha == "Rue" && ficha2.izda == "Rue"){		  
							if (granjero != undefined){if (granjero.n == 3 || granjero.n == 4 || granjero.n == 5){granjeros.push(granjero)}}
						}else if (ficha2.arriba == "Rue" && ficha2.derecha == "Rue"){
							if (granjero != undefined){if (granjero.n != 0 && granjero.n != 1 && granjero.n != 2){granjeros.push(granjero)}}	
							granja(ficha2);					
						}else if (ficha2.arriba == "Rue" && ficha2.izda == "Rue"){	   
							if (granjero != undefined){if (granjero.n != 0 && granjero.n != 6 && granjero.n != 7){granjeros.push(granjero)}}	
							granja(ficha2);					
						}else{
							if (granjero != undefined){if (granjero){granjeros.push(granjero)}}
							granja(ficha2);
						}
					}
				}
			}
			if(ficha.izda== "Campo" && prohibido != "izda"){
				ficha2=Tablero.buscarxcoor(ficha.x-1,ficha.y);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});
				if(_.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){			
					if (ficha2.lleno ){
						if (ficha2.abajo == "Rue" && ficha2.arriba == "Rue"){
							if (granjero != undefined){if (granjero.n == 1 || granjero.n == 2 || granjero.n == 3){granjeros.push(granjero)}}
						}else if (ficha2.abajo == "Rue" && ficha2.izda == "Rue"){
							if (granjero != undefined){if (granjero.n != 6 && granjero.n == 5 && granjero.n == 4){granjeros.push(granjero)}}	
							granja(ficha2);					
						}else if (ficha2.arriba == "Rue" && ficha2.izda == "Rue"){
							if (granjero != undefined){if (granjero.n != 6 && granjero.n == 7 && granjero.n == 0){granjeros.push(granjero)}}	
							granja(ficha2);					
						}else{
							if (granjero != undefined){if (granjero){granjeros.push(granjero)}}
							granja(ficha2);
						}
					}
				}
			}
			if(ficha.derecha== "Campo" && prohibido != "derecha"){
				ficha2=Tablero.buscarxcoor(ficha.x+1,ficha.y);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});

				if(_.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.lleno ){
						if (ficha2.abajo == "Rue" && ficha2.arriba == "Rue"){
							if (granjero != undefined){if (granjero.n == 5 || granjero.n == 6 || granjero.n == 7){granjeros.push(granjero)}}
						}else if (ficha2.abajo == "Rue" && ficha2.derecha == "Rue"){
							if (granjero != undefined){if (granjero.n != 2 && granjero.n != 3 && granjero.n != 4){granjeros.push(granjero)}}
							granja(ficha2);					
						}else if (ficha2.arriba == "Rue" && ficha2.derecha == "Rue"){
							if (granjero != undefined){if (granjero.n != 2 && granjero.n != 3 && granjero.n != 4){granjeros.push(granjero)}}	
							granja(ficha2);					
						}else{
							if (granjero != undefined){if (granjero){granjeros.push(granjero)}}
							granja(ficha2);
						}
					}
				}
			}
			if(ficha.abajo== "Campo" && prohibido != "abajo"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.y+1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});

				if(_.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.lleno){
							if (ficha2.derecha == "Rue" && ficha2.izda == "Rue"){
								if (granjero != undefined){if (granjero.n == 7 || granjero.n == 0 || granjero.n == 1){granjeros.push(granjero)}}
							}else if (ficha2.abajo == "Rue" && ficha2.izda == "Rue"){
								if (granjero != undefined){if (granjero.n != 4 && granjero.n != 5 && granjero.n != 6){granjeros.push(granjero)}}	
								granja(ficha2);					
							}else if (ficha2.abajo == "Rue" && ficha2.derecha == "Rue"){
								if (granjero != undefined){if (granjero.n != 2 && granjero.n != 3 && granjero.n != 4){granjeros.push(granjero)}}	
								granja(ficha2);					
							}else{
								if (granjero != undefined){if (granjero){granjeros.push(granjero)}}
								granja(ficha2);
							}
						}
				}
			}
//TIERRA
			if (ficha.arriba == "Tierra" && prohibido != "arriba"){
				if(_.find(fichasciudad ,function(obj){return (obj.x == ficha.x && obj.y == ficha.y)}) == undefined){
					fichastierra = Tablero.cierraCastillo(ficha);			
					fichasciudad = fichasciudad.concat(fichastierra[2]);
					if (fichastierra[0]== true){ciudad++}
				}	
			}
			if (ficha.izda == "Tierra" && prohibido != "izda"){
				if(_.find(fichasciudad ,function(obj){return (obj.x == ficha.x && obj.y == ficha.y)}) == undefined){
					fichastierra = Tablero.cierraCastillo(ficha);		
					fichasciudad = fichasciudad.concat(fichastierra[2]);
					if (fichastierra[0]== true){ciudad++}
				}
			}
			if (ficha.derecha == "Tierra" && prohibido != "derecha"){
				if(_.find(fichasciudad ,function(obj){return (obj.x == ficha.x && obj.y == ficha.y)}) == undefined){
					fichastierra = Tablero.cierraCastillo(ficha);			
					fichasciudad = fichasciudad.concat(fichastierra[2]);
					if (fichastierra[0]== true){ciudad++}
				}
			}
			if(ficha.abajo == "Tierra" && prohibido != "abajo"){
				if(_.find(fichasciudad ,function(obj){return (obj.x == ficha.x && obj.y == ficha.y)}) == undefined){
					fichastierra = Tablero.cierraCastillo(ficha);	
					fichasciudad = fichasciudad.concat(fichastierra[2]);
					if (fichastierra[0]== true){ciudad++}
				}
			}	
//CARRETERA
			if (ficha.arriba == "Rue"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.y-1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});

				if (ficha2.lleno && _.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.arriba == "Rue" && ficha2.abajo == "Rue"){
						if (prohibido== "izda" && (granjero.n == 1 || granjero.n == 2 || granjero.n == 3)){granjeros.push(granjero);
							granja(ficha,prohibido);
						}else if (prohibido== "derecha" && (granjero.n == 5 || granjero.n == 6 || granjero.n == 7)){granjeros.push(granjero);
							granja(ficha,prohibido);}
					}
				}
			}
			if (ficha.izda == "Rue"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.x-1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});

				if (ficha2.lleno && _.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.arriba == "Rue" && ficha2.abajo == "Rue"){
							if (prohibido== "arriba" && (granjero.n == 3 || granjero.n == 4 || granjero.n == 5)){granjeros.push(granjero);
								granja(ficha,prohibido);
							}else if (prohibido== "abajo" && (granjero.n == 7 || granjero.n == 0 || granjero.n == 1)){granjeros.push(granjero);
								granja(ficha,prohibido);}
					}						
				}
			}
			if (ficha.derecha == "Rue"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.x+1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});

				if (ficha2.lleno && _.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.arriba == "Rue" && ficha2.abajo == "Rue"){
							if (prohibido== "arriba" && (granjero.n == 3 || granjero.n == 4 || granjero.n == 5)){granjeros.push(granjero);
								granja(ficha,prohibido);
							}else if (prohibido== "abajo" && (granjero.n == 7 || granjero.n == 0 || granjero.n == 1)){granjeros.push(granjero);
								granja(ficha,prohibido);}
					}
				}
			}
			if(ficha.abajo == "Rue"){
				ficha2=Tablero.buscarxcoor(ficha.x,ficha.y+1);
				granjero =_.find(ficha2.seguidores,function(obj){return (obj.t=="Granjero")});
				if (ficha2.lleno && _.find(fichas ,function(obj){return (obj.x == ficha2.x && obj.y == ficha2.y)}) == undefined){
					if (ficha2.arriba == "Rue" && ficha2.abajo == "Rue"){
						if (prohibido== "izda" && (granjero.n == 1 || granjero.n == 2 || granjero.n == 3)){granja(ficha,prohibido);granjeros.push(granjero)
							
						}else if (prohibido== "derecha" && (granjero.n == 5 || granjero.n == 6 || granjero.n == 7)){granjeros.push(granjero);
							granja(ficha,prohibido);}
					}
				}		
			}		
		}

		granjero = _.find(ficha.seguidores,function(obj){return (obj.t=="Granjero")});
		granjeros.push(granjero);
		if (granjero.n == 3 || granjero.n == 4 || granjero.n == 5){ 
			if (ficha.izda == "Rue" && ficha.derecha == "Rue"){granja(ficha,"arriba");} 		// prohibido arriba
		}else if(granjero.n == 1 || granjero.n == 2 || granjero.n == 3){ 
			if (ficha.arriba == "Rue" && ficha.abajo == "Rue"){granja(ficha,"izda");} 			// prohibido izquierda
		}else if(granjero.n == 5 || granjero.n == 6 || granjero.n == 7){ 
			if (ficha.arriba == "Rue" && ficha.abajo == "Rue"){granja(ficha,"derecha");}		// prohibido derecha
		}else if(granjero.n == 7 || granjero.n == 0 || granjero.n == 1){ 
			if (ficha.izda == "Rue" && ficha.derecha == "Rue"){granja(ficha,"abajo");}
			granja(ficha);	return [ciudad, granjeros];		// prohibido abajo	
		}else{granja(ficha);}
		
	};
