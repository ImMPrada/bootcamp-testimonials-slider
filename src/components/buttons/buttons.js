import './styles.scss';
import prevButtonIcon from '../../images/icon-prev.svg';
import nextButtonIcon from '../../images/icon-next.svg';

function buttons() {
  return (
    `
      <div class="buttons">
        <button class="button button--prev" id="prevButton">
          <img src="${prevButtonIcon}" alt="Previous" id="prevButton"/>
        </button>
        <button class="button button--next">
          <img src="${nextButtonIcon}" alt="Next" id="nextButton"/>
        </button>
      </div>
    `
  );
}

export default buttons;
