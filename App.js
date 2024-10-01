
function showTime(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    document.getElementsByTagName('h1')[0].innerText=hrs;
    document.getElementsByTagName('h1')[1].innerText=min;
    document.getElementsByTagName('h1')[2].innerText=sec;

    setInterval(showTime,1000);
}