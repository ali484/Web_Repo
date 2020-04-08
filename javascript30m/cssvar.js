var inputs = document.querySelectorAll('.control input');
inputs.forEach((input)=>input.addEventListener('change' , Update));
inputs.forEach((input)=> input.addEventListener('mousemove' , Update));
function Update()
{
    var suffix = this.dataset.sizing ||'';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

