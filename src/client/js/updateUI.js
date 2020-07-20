const updateUI = (data) => {
  console.log("Updating UI: " + data);
  let newHTML = `<div class="card">
      <p>
        <strong>Polarity: </strong>
        <span id="polarity">${data.polarity}</span>
      </p>
      <p>
        <strong>Subjectivity: </strong>
        <span id="subjectivity">${data.subjectivity}</span>
      </p>
      <p>
        <strong>Text: </strong>
        <span id="text">${data.text}</span>
      </p>
    </div>`;

  document.querySelector('#results').innerHTML = newHTML;
};

export { updateUI };
