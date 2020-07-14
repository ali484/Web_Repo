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
    document.querySelectorAll('.section').forEach(item => (item.dataset.nav === this.dataset.nav) ? item.style.display = 'block' : item.style.display = 'none');
}

document.querySelector('.comment-submit').addEventListener('click',submit_comment);

function submit_comment()
{
    console.log('adsvoansvo');
    let textComment = document.querySelector('.comment-box').value;
    let textnode = document.createTextNode(`${textComment}`);
    let first_div = document.createElement('div');
    first_div.classList.add('each-comment');
    let divider = document.createElement('hr');
    divider.classList.add('between-items');
    let image = document.createElement('img');
    image.classList.add('profile-pic');
    image.setAttribute('src','../images/profile pic.jpg')
    let div_inside = document.createElement('div');
    div_inside.classList.add('name-comment');
    let name = document.createElement('p');
    name.classList.add('name');
    let testnode = document.createTextNode("mr.robot");
    name.appendChild(testnode);
    let comment = document.createElement('p');
    comment.classList.add('comment')
    comment.appendChild(textnode);
    
    let child_count = document.querySelectorAll('[data-nav = comments]')[1].childElementCount;
    document.querySelectorAll('[data-nav = comments]')[1].insertBefore(divider,document.querySelectorAll('[data-nav = comments]')[1].children[child_count - 1]);
    div_inside.appendChild(name);
    div_inside.appendChild(comment);
    first_div.appendChild(image);
    first_div.appendChild(div_inside);
    
    
    document.querySelectorAll('[data-nav = comments]')[1].insertBefore(first_div,document.querySelectorAll('[data-nav = comments]')[1].children[child_count ]);
}