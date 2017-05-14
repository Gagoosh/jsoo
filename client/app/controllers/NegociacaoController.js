class NegociacaoController {
	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputdata = $("#data");
		this._inputqtd = $("#quantidade");
		this._inputvalor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($("#negociacoesView"));
		this._negociacoesView.update(this._listaNegociacoes);
	}

	adiciona(e){
		e.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes);
		this._limpaForm();
	}

	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textToDate(this._inputdata.value),
			this._inputqtd.value,
			this._inputvalor.value);
	}

	_limpaForm(){
		this._inputdata.value = "";
		this._inputqtd.value = 1;
		this._inputvalor.value = 0.0;
		this._inputdata.focus();
	}
}
