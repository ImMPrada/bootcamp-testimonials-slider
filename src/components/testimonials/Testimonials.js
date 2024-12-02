import './styles.scss';
import buttons from '../buttons/buttons';

function testimonials() {
  return (
    `
      <div class="testimonials">
        <div class="testimonials-card">
          <div class="quote" id="quoteContainer"></div>
          ${buttons()}
          <div class="photo" id="photoContainer"></div>
        </div>
      </div>
    `
  );
}

export default testimonials;
