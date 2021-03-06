export default class LoadMoreBtn {
	constructor({selector, hidden = false}){
		this.refs = this.getRefs(selector);
		hidden && this.refs.button.classList.add('is-hidden');
		this.refs.button = document.querySelector(selector);
		this.refs.label = this.refs.button.querySelector('.label');
		this.refs.spinner = this.refs.button.querySelector('.spinner');
	}

	getRefs(selector) {
		const refs = {};
		refs.button = document.querySelector(selector);
		refs.label = refs.button.querySelector('.label');
		refs.spinner = refs.button.querySelector('.spinner');
		return refs;
	}

	enable() {
		this.refs.button.disabled = false;
		this.refs.label.textContent = 'Показать ещё';
		this.refs.spinner.classList.add('is-hidden');
	}

	disable() {
		this.refs.button.disabled = true;
		this.refs.label.textContent = 'Загружаем...';
		this.refs.spinner.classList.remove('is-hidden');
	}

	noMore(){
		his.refs.button.disabled = true;
		this.refs.button.classList.add('is-hidden');
		this.refs.spinner.classList.add('is-hidden');
	}

	show(){
		this.refs.button.classList.remove('is-hidden');
	}

};