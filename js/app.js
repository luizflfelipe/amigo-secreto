let Amigos = [];

function adicionar(){
    let amigoSecreto = document.getElementById('nome-amigo').value; // Pega o nome do amigo que foi inserido pelo usuário :)
    if (amigoSecreto.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos'); //Nomes da lista de amigos incluídos :)
    Amigos.push(amigoSecreto);


    if (listaAmigos.textContent == ''){ // Se lista de amigos estiver vazia
        listaAmigos.textContent = amigoSecreto;     //Coloque o nome da pessoa digitado
    }else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigoSecreto;  //Mantendo os nomes ja colocados e colocando os novos nomes :)
    }

    if (Amigos.includes(amigoSecreto)){ //Se o array Amigos tiver o nome do amigoSecreto
        alert('Amigo já incluído na Lista'); // Mensagem que já possui o mesmo nome
        return;
    }
    
    
}amigoSecreto.textContent = ''; // Limpa o campo do nome do amigo, para colocar outros nomes :(


function sortear(){
    if (Amigos.length < 2) { //Verifica quantos nomes tem no Array(Lista), se tiver menos que 2
        alert('Adicione pelo menos 2 amigos!'); //O codigo pede para adicionar pelo menos 2 amigos 
        return;
    }
    embaralha(Amigos);     //Recebeu a função de embaralhar Array(Amigos)
    let sorteio = document.getElementById('lista-sorteio');         //Pega o campo no HTML que mostra a lista de Nomes sorteados;

    for (let index = 0; index < Amigos.length; index++) {       // Documentação pronta, porém o for é quase igual em todas as ocasiões, let recebe index que pode ser usado como i; logo após ele pega a variavel i e percorre o Array inteiro, e depois ele incrementa mais um na variavel original index = 0;
        if (index == Amigos.length - 1){ //Se o index (valor selecionado) for igual ao comprimento do Array, tire o nome da lista
        sorteio.innerHTML = sorteio.innerHTML + Amigos[index] + '--->' + Amigos[0] + '<br>' //Adiciona os nomes já sorteados com os nomes que serao sorteados logo depois                  Array Amigo[Nome sorteado]
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


//Vamos aprender POO agora!!