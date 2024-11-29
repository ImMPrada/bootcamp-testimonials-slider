import './styles.scss';
import patternBg from '../../images/pattern-bg.svg';
import tanya from '../../images/image-tanya.jpg';

function Photo() {
  return (
    `
      <div class="photo">
        <img src="${tanya}" alt="Tanya" />
      </div>
    `
  );
}

export default Photo;
