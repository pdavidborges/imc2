function calcularIMC(){
    
    //Seleção de DOM (Data Objerct Model)
    //Selecionando elementos do HTML
    
    var peso = document.querySelector('#peso');
    var altura = document.querySelector('#altura');

    //console.log(peso.value);
    //console.log(altura.value);

    //se o valor do peso E o valor da altura forem diferentes (!=) de vazio ''
    if(peso.value != '' && altura.value != ''){

        var imc = (peso.value / (altura.value*altura.value)).toFixed(2);

        if(imc < 18.5){
            alert(`IMC: ${imc } - Você está abaixo do peso`);
        }

        else if(imc <= 24.9){
            alert(`IMC: ${imc } - Normal`);
        }

        else if(imc <= 29.9){
            alert(`IMC: ${imc } - Sobrepeso`);
        }

        else{
            alert(`IMC: ${imc } - Obesidade`);
        }    

    }

    else{
        alert('Preencha todos os campos!');
    }

}//fim da função

