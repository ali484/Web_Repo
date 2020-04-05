function setDate()
{
    var now = new Date();


    var seconds = now.getSeconds();
    var secondsdeg = ((seconds / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsdeg}deg)`

    var mins = now.getMinutes();
    var minsdeg = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    document.querySelector('.min-hand').style.transform = `rotate(${minsdeg}deg)`;


    var hours = now.getHours();
    var hoursdeg = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursdeg}deg)`;
}
setInterval(setDate , 1000);
