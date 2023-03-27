new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() { 
            alert("Alerta do botão")
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})