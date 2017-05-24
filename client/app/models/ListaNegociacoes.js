class ListaNegociacoes {

	constructor(trap) {
		this._negociacoes = [];
		this._trap = trap;
	}

	adiciona(n){
		this._negociacoes.push(n);
		this._trap(this);
	}

	get negociacoes(){
		return [].concat(this._negociacoes); //retorna uma cópia da lista, seguro!
	}
	esvazia(){
		this._negociacoes = [];
		this._trap(this);
	}
}
