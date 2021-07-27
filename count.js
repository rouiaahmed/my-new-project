
(function () {

    const seconds = 1000;
          minutes = seconds * 60;
          hours = minutes * 60;
         days = hours * 24;
          // if (days<10) {days = "0" + days;}
          //   if (hours<10) {hours = "0" + hours;}
          //   if (minutes<10) {minutes = "0" + minutes;}
          //   if (seconds<10) {seconds = "0" + seconds;}

        const currentYear = new Date ().getFullYear();
        let newYear= new Date ("Jan 01 ,2022 00:00:00");

        countDown = new Date(newYear).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              diff = countDown - now; 

           document.getElementById("days").innerText = Math.floor(diff / (days));
             document.getElementById("hours").innerText = Math.floor((diff % (days)) / (hours));
            document.getElementById("minutes").innerText = Math.floor((diff % (hours)) / (minutes));
            document.getElementById("seconds").innerText = Math.floor((diff % (minutes)) / seconds);
            
            if (days<10) {days = "0" + days;}
            if (hours<10) {hours = "0" + hours;}
             if (minutes<10) {minutes = "0" + minutes;}
             if (seconds<10) {seconds = "0" + seconds;}
          }, 0)
    }());
