import './styles.scss';
import tanya from '../../images/image-tanya.jpg';
import john from '../../images/image-john.jpg';

function photo(args) {
  const images = {
    'tanya': tanya,
    'john': john
  };

  const { src, name } = args;

  return (
    `
      <img src="${images[src]}" alt="${name}" />
    `
  );
}

export default photo;
