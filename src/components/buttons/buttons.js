import './styles.scss';
import prevButtonIcon from '../../images/icon-prev.svg';
import nextButtonIcon from '../../images/icon-next.svg';

function buttons() {
  return (
    `
      <div class="buttons">
        <button class="button button--prev">
          <img src="${prevButtonIcon}" alt="Previous" />
        </button>
        <button class="button button--next">
          <img src="${nextButtonIcon}" alt="Next" />
        </button>
      </div>
    `
  );
}

export default buttons;
