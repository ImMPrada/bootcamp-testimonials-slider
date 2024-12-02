import './styles.scss';
import photo from '../photo/photo';
import quote from '../quote/quote';
import buttons from '../buttons/buttons';

function testimonials() {
  const quoteArgs = quote(
    {
      content: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
      name: 'Tanya Sinclair',
      role: 'UX Engineer'
    }
  );

  return (
    `
      <div class="testimonials">
        <div class="testimonials-card">
          ${quoteArgs}
          ${buttons()}
          ${photo()}
        </div>
      </div>
    `
  );
}

export default testimonials;
