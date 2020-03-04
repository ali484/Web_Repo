Gallery = document.getElementsByClassName("gallery")[0];

function funcGenerateHTML([h, v]) {
    return `<div class="item h${h} v${v}">
                <div class="overlay">
                    <button class="overlay">view</button>
                </div>
                <img src="https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 320)}">
            </div>`;
}
function funcRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
const digits = Array.from({ length: 50 }, () => [funcRandomNumber(4), funcRandomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);
console.log(digits);
const html = digits.map(funcGenerateHTML).join('');
// console.log(typeof html);
// console.log(html);
Gallery.innerHTML = html;