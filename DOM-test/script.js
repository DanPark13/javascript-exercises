const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm red!";
content.style.color = 'red';

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';

const div = document.createElement('div');
// document.getElementById(div).style.border = "thick solid #0000FF"
const div_h1 = document.createElement('h1');
div_h1.textContent = "I'm in a div!"
const p_h1 = document.createElement('p');
p_h1.textContent = "ME TOO!"

div.appendChild(div_h1)
div.appendChild(p_h1)

container.appendChild(content);
container.appendChild(blueText);
container.appendChild(div);