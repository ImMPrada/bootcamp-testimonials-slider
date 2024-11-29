import './styles.scss';
import patternCurve from '../../images/pattern-curve.svg';
import Photo from '../photo/Photo';

function Testimonials() {
  return (
    `
      <div class="testimonials">
        ${Photo()}

        <div class="testimonials-background">
          <img src="${patternCurve}" alt="" />
        </div>
      </div>
    `
  );
}

export default Testimonials;
