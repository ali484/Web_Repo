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


var joojeh = document.querySelector('[data-nav = jooje]');
var khoresht = document.querySelector('[data-nav = khoresht]');
var drinks = document.querySelector('[data-nav = drinks]');
var sides = document.querySelector('[data-nav = sides]');
var comments = document.querySelector('[data-nav = comments]');

var restaurantNav = document.querySelector('.restaurant-nav');
restaurantNav.childNodes.forEach(item => item.addEventListener('mouseover' , changepage));

function changepage(){
    console.log(this);
    console.log('sssss');
    document.querySelectorAll('.section').forEach(item => (item.dataset.nav === this.dataset.nav) ? item.style.display = 'block' : item.style.display = 'none');
}