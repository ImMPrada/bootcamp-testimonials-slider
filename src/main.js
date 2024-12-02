import './styles/main.scss';
import testimonials from './components/testimonials/testimonials.js';
import { state } from './scripts/state.js';
import { buildAction, addListenerToButton, renderTestimonial } from './scripts/actions.js';

document.querySelector('#app').innerHTML = testimonials();
renderTestimonial(state);

const changeTestimonialsIndex = buildAction(state);

const renderPrev = () => {
  changeTestimonialsIndex(-1);
  console.log(state);
  renderTestimonial(state);
};

const renderNext = () => {
  changeTestimonialsIndex(1);
  console.log(state);
  renderTestimonial(state);
}

addListenerToButton('prevButton', () => renderPrev() );

addListenerToButton('nextButton', () => renderNext());

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') { renderPrev(); }

  if (event.key === 'ArrowRight') { renderNext(); }
});