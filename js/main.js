    
    let end = new Date('12/31/2020 1:29 PM');
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    
    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {
            //  let contenedor = document.getElementsByClassName("container-contador");
            // contenedor.classList.toggle("container-contador");
            clearInterval(timer);
            document.getElementById('reset-contador').innerHTML = `<h2 class="titulo-visualizar">Ahora podrás visualizar<br> la trasmisión</h2>`;
            // setTimeout(() => {
                
            //     location.href = "trasmision.html";
            // }, 3000);
            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        let dias;
        let horas;
        let minutos;
        let segundos;

        if(days<=9){
            dias='0'+days;
        }else{
            dias=days;
        }
        if(hours<=9){
            horas='0'+hours;
        }else{
            horas=hours;
        }
        if(minutes<=9){
            minutos='0'+minutes;
        }else{
            minutos=minutes;
        }
        if(seconds<=9){
            segundos='0'+seconds;
        }else{
            segundos=seconds;
        }

        document.getElementById('contador').innerHTML = `<div class="contador">
        <p class="contador-numero" id="c-dias">`+dias+`:</p>
        <p class="description">Días</p></div>`;
        document.getElementById('contador').innerHTML += `<div class="contador">
        <p class="contador-numero" id="c-dias">`+horas+`:</p>
        <p class="description">Horas</p></div>`;
        document.getElementById('contador').innerHTML += `<div class="contador">
        <p class="contador-numero" id="c-dias">`+minutos+`:</p>
        <p class="description">Minutos</p></div>`;
        document.getElementById('contador').innerHTML += `<div class="contador-segundo">
        <p class="contador-numero" id="c-dias">`+segundos+`</p>
        <p class="description c-segundos">Segundos</p></div>`;
    }

    timer = setInterval(showRemaining, 1000);