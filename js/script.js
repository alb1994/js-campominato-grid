


//creo funzione per singolo quadrato

function singoloQuadrato(){
    let quadrato = document.createElement("div"); //creo <div></div>
    quadrato.classList.add("quadrato");// inserisco classe dentro il <div></div>
    return quadrato;
}

// recupero elemento dell' html
let griglia = document.getElementById("griglia");

// con cliclo for creo singoli quadratini 
for(let i = 0; i<100; i++){
    let quadrato =singoloQuadrato();
    

    //creo bottone per iniziare gioco

    document.getElementById("bottone").addEventListener("click", function(){
        
    //appendo quadrati nel dom 
    griglia.append(quadrato);
    
    //aggiungo bottone per colorare e decorare in quadratino
    quadrato.addEventListener("click", function(){
    quadrato.innerText = i + 1
    this.classList.toggle("azzurro")
    

    })

    })
}


