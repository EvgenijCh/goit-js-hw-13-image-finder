
import refs from './refs';
import searchFormTpl from '../template/search-form.hbs';

export default function createSearchFormMarkup() {
	const markup = searchFormTpl();
	refs.containerRef.insertAdjacentHTML('beforebegin', markup);
};