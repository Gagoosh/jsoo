class ListaNegociacoes {

	constructor() {
		this._negociacoes = [];
	}

	adiciona(n){
		this._negociacoes.push(n);
	}

	get negociacoes(){
		return [].concat(this._negociacoes); //retorna uma cópia da lista, seguro!
	}
	esvazia(){
		this._negociacoes = [];
	}
}
