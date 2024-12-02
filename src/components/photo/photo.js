import './styles.scss';
import tanya from '../../images/image-tanya.jpg';
import john from '../../images/image-john.jpg';
import mattie from '../../images/image-mattie.jpg';
import william from '../../images/image-william.jpg';

function photo(args) {
  const images = {
    'tanya': tanya,
    'john': john,
    'mattie': mattie,
    'william': william
  };

  const { src, name } = args;

  return (
    `
      <img src="${images[src]}" alt="${name}" />
    `
  );
}

export default photo;
