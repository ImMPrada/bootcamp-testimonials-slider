import './styles.scss';
import tanya from '../../images/image-tanya.jpg';

function photo() {
  return (
    `
      <div class="photo">
        <img src="${tanya}" alt="Tanya" />
      </div>
    `
  );
}

export default photo;
