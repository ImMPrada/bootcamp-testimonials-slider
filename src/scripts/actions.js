import quote from '../components/quote/quote';
import photo from '../components/photo/photo';

export function buildAction(state) {

  const action = (delta) => {
    console.log(delta);
    const index = state.testimonialsIndex;

    if (index + delta < 0) {
      state.testimonialsIndex = state.testimonialsAmount - 1;
    } else if (index + delta === state.testimonialsAmount) {
      state.testimonialsIndex = 0;
    } else {
      state.testimonialsIndex = index + delta;
    }
  };

  return action;
}

export function addListenerToButton(id, onClickAction) {
  const button = document.getElementById(id);

  button.addEventListener('click', onClickAction);
}

export function renderTestimonial(state) {
  const data = state.data[state.testimonialsIndex];

  const quoteContainer = document.getElementById('quoteContainer');
  const photoContainer = document.getElementById('photoContainer');

  quoteContainer.innerHTML = quote(data);
  photoContainer.innerHTML = photo(data);
}
