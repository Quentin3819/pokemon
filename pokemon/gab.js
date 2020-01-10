function charger(){
    fetch ('https://pokeapi.co/api/v2/pokemon')
        .then (
            function(response){
                return response.json()
            }
        )
        .then (
            function(data){
                for (let i = 0; i <= 19 ;i++) {
                    var divp = document.createElement("div");
                    divp.setAttribute("id", "aligne" + i)
                    divp.innerHTML= " ";
                    var parent = document.getElementById("pokemons");
                    parent.appendChild(divp);
                    var pokemonf = document.createElement("p");
                    pokemonf.innerHTML=data.results[i].name;
                    divp.appendChild(pokemonf);
                    var infof = document.createElement("p");
                    infof.innerHTML= "voir les stats";
                    infof.addEventListener("click", function(){infopoke(data.results[i].name)})
                    divp.appendChild(infof);
                }
            }
        )
}
function infopoke(name){
    var visible = document.getElementById("infos");
    visible.className= "vue"
    fetch ('https://pokeapi.co/api/v2/pokemon/' + name)
        .then (
            function(response){
                return response.json()
            }
        )
        .then (
            function(data){
                var parent = document.getElementById("infos");
                parent.innerHTML= " ";
                var idt = document.createElement("h3");
                idt.innerHTML= "Id";
                
                parent.appendChild(idt);
                var id = document.createElement("p");
                id.innerHTML= data.id;
                
                parent.appendChild(id);
                var nomt = document.createElement("h3");
                nomt.innerHTML= "Nom";
                
                parent.appendChild(nomt);
                var nom = document.createElement("p");
                nom.innerHTML= data.name;
                
                parent.appendChild(nom);
                var hauteurt = document.createElement("h3");
                hauteurt.innerHTML= "Hauteur";
                
                parent.appendChild(hauteurt);
                var hauteur = document.createElement("p");
                hauteur.innerHTML= data.height;
                
                parent.appendChild(hauteur);
                var imaget = document.createElement("h3");
                imaget.innerHTML= "Image";
                
                parent.appendChild(imaget);
                var image = document.createElement("img");
                image.setAttribute("src", data.sprites.front_default);
                
                parent.appendChild(image);
            }
        )
}