let hr = $(".hr");
let min = $(".min");
let sec = $(".sec");

function updateTime(){
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    let hRotation = 30*hour + minute/2 ;
    let mRotation = 6*minute;
    let sRotation = 6*seconds;

    $(".hr").css("transform","rotate("+hRotation+"deg)");
    $(".min").css("transform","rotate("+mRotation+"deg)");
    $(".sec").css("transform","rotate("+sRotation+"deg)");
}

setInterval(updateTime,1000);