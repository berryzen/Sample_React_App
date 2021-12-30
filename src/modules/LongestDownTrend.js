//Tehtävä A
    //laskun ja nousun voi laskea: cur_price/next_price. Sisältää aina alku ja loppupäivän
    //eli minimi on 1 laskupäivä

    export function longestdowntrend(dataset) {
      var downtrend = 0
      var downtrend_record = 0
      var datalenght = Object.keys(dataset["total_volumes"]).length;

      //TÄSSÄ ON JOKU PÄIVÄMÄÄRÄ JUTTU VIELÄ VÄÄRIN
      console.log("LONGESTDOWNTREND")
      console.log(dataset["prices"][0][1])
      for (let i = 0; i < datalenght-1; i++){
        const trend = dataset["prices"][i+1][1]/dataset["prices"][i][1]
        //Ota ensimmäisestä downtrendistä päivä ylös i ja loppupäivä i+1 
        console.log(trend)
      if (trend < 1.0){
        downtrend += 1
        }
        else {
            if (downtrend > downtrend_record){
            downtrend_record = downtrend}
            downtrend = 0
       }
     }
    console.log("LONGEST DOWNTREND")
    console.log(downtrend_record)
    return downtrend_record
    }