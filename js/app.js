let Amigos = [];

function adicionar(){
    let amigoSecreto = document.getElementById('nome-amigo').value; // Pega o nome do amigo que foi inserido pelo usuário :)
    if (amigoSecreto.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos'); //Nome na lista de amigos incluídos :)
    Amigos.push(amigoSecreto);


    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = amigoSecreto;
    }else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigoSecreto;  //Modifica os amigos incluídos colocando os novos nomes :)
    }

    if (Amigos.includes(amigoSecreto)){
        alert('Amigo já incluído na Lista');
        return;
    }
    
    
}amigoSecreto.textContent = ''; // Limpa o campo do nome do amigo, para colocar outros nomes :(


function sortear(){
    if (Amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos!');
        return;
    }
    embaralha(Amigos);     //Recebeu a função de embaralhar a Amigos (um Array)
    let sorteio = document.getElementById('lista-sorteio');         //Pega o campo no HTML que mostra a lista de Nomes sorteados;

    for (let index = 0; index < Amigos.length; index++) {       // Documentação pronta, porém o for é quase igual em todas as ocasiões, let recebe index que pode ser usado como i; logo após ele pega o i e percorre o Array inteiro, e depois ele incrementa mais um no index original index = 0;
        if (index == Amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + Amigos[index] + '--->' + Amigos[0] + '<br>'
        }else {
            sorteio.innerHTML = sorteio.innerHTML + Amigos[index] + '--->' + Amigos[index + 1] + '<br>'   //Pega a Lista de Nomes sorteados, e modifica, colocando o primeiro nome sorteado, depois adicionando o proximo nome sorteado Amigos[index + 1] (Amigos é o Array)
        }
        
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {     //Algoritmo Fisher–Yates, pego no cangaceirojavaScript, formato pronto;

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}


function reiniciar(){
    Amigos = []
    document.getElementById('lista-amigos').innerHTML = '';;      //Pegamos a lista de amigos;
    document.getElementById('lista-sorteio').innerHTML = '';;
}
