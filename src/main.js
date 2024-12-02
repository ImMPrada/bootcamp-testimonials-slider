import './styles/main.scss';
import testimonials from './components/testimonials/testimonials.js';
import { state } from './scripts/state.js';
import { buildAction, addListenerToButton, renderTestimonial } from './scripts/actions.js';

document.querySelector('#app').innerHTML = testimonials();
renderTestimonial(state);

const changeTestimonialsIndex = buildAction(state);

addListenerToButton(state, 'prevButton', () => {
  changeTestimonialsIndex(-1);
  console.log(state);
  renderTestimonial(state);
});

addListenerToButton(state, 'nextButton', () => {
  changeTestimonialsIndex(1);
  console.log(state);
  renderTestimonial(state);
});
