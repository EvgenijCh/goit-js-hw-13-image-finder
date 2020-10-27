
import imageItemTpl from '../template/img-item.hbs';
import refs from './refs';

function updatePicsMarkup(pics){
	const markup = imageItemTpl(pics.hits);
	refs.galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default updatePicsMarkup;