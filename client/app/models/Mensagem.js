class Mensagem {
	constructor(texto=''){
		this._texto = texto;
	}

	get texto(){
		return this._texto;
	}

	set texto(t){
		this._texto = t;
	}
}
