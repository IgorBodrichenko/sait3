window.addEventListener('DOMContentLoaded', function() {

/* -------------------------------------------------timer----------------------------------------- */

    const deadLine = ['2021-11-17' , '2021-11-14'];

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours =  Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(salector, endtime){
        const timer = salector/* document.querySelector(salector) */,
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            timeInterval = setInterval(updateClock, 1000);
        
        console.log(timer)
        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }






    const allTimer = document.querySelectorAll('.timer');
    for(let i = 0;i < allTimer.length; i++){
        
        setClock(allTimer[i], deadLine[i]);
    }
        
        

/* -----------------------heart-click----------------------------- */

    let hearts = document.querySelectorAll('.heart');

    for(let i = 0; i < hearts.length; i++){
        hearts[i].addEventListener('click', function(){
            hearts[i].classList.toggle('heart-activ');
        })
    }



})

