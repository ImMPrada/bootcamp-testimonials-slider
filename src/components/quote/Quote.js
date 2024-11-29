import './styles.scss';

function Quote(args) {
  const { content, name, role } = args;

  return (
    `
      <div class="quote">
        <p>
          ${content}
        </p>
        <p class="quote-author">
          ${name} <span>${role}</span>
        </p>
      </div>
    `
  );
}

export default Quote;
