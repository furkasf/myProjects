
function smooth(target,duration){
    var target = document.querySelector(target);
    var targetPossition = target.getBoundingClientRect().top;//it show element current position on browser
    var starPossition = window.pageYOffset;//it show browser position verticly(use ps measure)
    var distance = targetPossition - starPossition;
    var startTime = null;
    
    function animetion(currentTime){
        if(startTime === null){
            startTime = currentTime;//it equal starttime to current time
        }
            var timeElepsed = currentTime - startTime;//we caculete delay on animetion
            var run = ease(timeElepsed, starPossition, distance, duration);
            window.scrollTo(0, run);//scroll direction, and here were start funtion
            if(timeElepsed < duration) requestAnimationFrame(animetion);
        
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animetion);//it make our animetion smoot 
}

smooth(".section2", 1000);