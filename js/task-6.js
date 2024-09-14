function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  document.getElementById('boxes').append(...boxes);
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';

}

const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount);
    }
    
    input.value = '';
  });

  destroyButton.addEventListener('click', destroyBoxes);
