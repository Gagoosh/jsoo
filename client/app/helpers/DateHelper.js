class DateHelper {

	constructor() {
		throw new Error('Esta classe não pode ser instanciada.');
	}
	static dateToText(d){
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	}
	static textToDate(t){
		if(!/\d{4}-\d{2}-\d{2}/.test(t)){
			throw new Error("Formato da data deve ser aaaa-mm-dd.");
		}
		return new Date(...t.split('-').map((item, indice) => item - indice % 2));
	}
}
