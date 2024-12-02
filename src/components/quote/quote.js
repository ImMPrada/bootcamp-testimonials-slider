import './styles.scss';

function quote(args) {
  const { content, name, role } = args;

  return (
    `
      <p>
        ${content}
      </p>
      <p class="quote-author">
        ${name} <span>${role}</span>
      </p>
    `
  );
}

export default quote;
