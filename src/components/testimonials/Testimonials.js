import './styles.scss';
import patternCurve from '../../images/pattern-curve.svg';

function Testimonials() {
  return (
    `
      <div class="testimonials">
        <h1>Hello Vite!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
      </div>
      <div class="background">
        <img src="${patternCurve}" alt="" />
      </div>
    `
  );
}

export default Testimonials;
