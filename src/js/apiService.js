import { alert, notice, info, success, error } from '@pnotify/core';
const apiKey = '18602870-de8ca2cc828b7c2a44ec2be3c';

export default {
	searchQuery: '',
	page: 1,
	perPage: 12,
	fetchPics(){
		 const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}`;

		return fetch(url)
		.then(res => res.json())
		.then( ({hits, total}) => {

			if(!total){
				error('Сделайте более специфичный запрос!');
				return;
			} 

			return {hits, total};
		})
		.catch(console.log);
	},
	resetPage() {
		this.page = 1;
		this.loadCount = 0;
	},
	incrementPage() {
		this.page += 1;
	},
	get query() {
		return this.searchQuery;
	},
	set query(value) {
		this.searchQuery = value;
	},
}