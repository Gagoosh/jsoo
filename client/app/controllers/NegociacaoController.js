class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputdata = $("#data");
		this._inputqtd = $("#quantidade");
		this._inputvalor = $("#valor");
		//Object.freeze(this);
	}
	adiciona(event) {
		event.preventDefault();

		let data = new Date(...this._inputdata.value
			.split('-')
			.map((item, indice) => item - indice % 2)
		)

		let negociacao = new Negociacao(
			data,
			this._inputqtd.value,
			this._inputvalor.value
		);

		console.log(negociacao);
	}
}
