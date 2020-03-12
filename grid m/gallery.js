Gallery = document.getElementsByClassName("gallery")[0]

function Generatediv([h , v])
{
    return `<div class="item h${h} v${v}">
    
                <div class="overlay-item">
                    <button>
                        viwe
                    </button>
                    
                </div>
                <img src="images/${randomnumber(12)}.jpg">
                
            </div>`
}
function randomnumber(limit)
{
    return Math.floor((Math.random()*limit)+1);
}

const digits = Array.from({ length: 50 }, () => [randomnumber(4), randomnumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])
console.log(digits);
const html = digits.map(Generatediv).join('');
Gallery.innerHTML = html;