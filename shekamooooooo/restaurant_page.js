var plusButtons = document.querySelectorAll('[data-type = plus]');

var minusButtons = document.querySelectorAll('[data-type = minus]');

plusButtons.forEach(item => item.addEventListener('click',addorder));

minusButtons.forEach(item => item.addEventListener('click',reduceorder));

function addorder()
{
    // console.log('hey');
    let count = parseInt(this.parentNode.dataset.count);
    count++;
    console.log(count);
    this.parentNode.setAttribute('data-count' , `${count}`);
    this.parentNode.childNodes[3].innerHTML = count;
}

function reduceorder()
{
    let count = parseInt(this.parentNode.dataset.count);
    count--;
    console.log(count);
    this.parentNode.setAttribute('data-count' , `${count}`);
    this.parentNode.childNodes[3].innerHTML = count;
}