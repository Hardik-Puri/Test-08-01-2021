function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown(time) {

   console.log(time + " Minutes Remaining");
   let ntime = time - 1;
   for (var i = 58; i > 0; i -= 2) {
      await sleep(2000);
      console.log(ntime + " Minutes " + i + " Seconds remaining");
   }

   if (ntime == 0 && i == 0)
      console.log("!!!!!TIME-OUT !!!!!!");

   if (ntime > 0)
      countdown(ntime);

}

let time = 2;
countdown(time);
