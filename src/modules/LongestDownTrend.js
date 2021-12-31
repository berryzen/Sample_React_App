
export function longestdowntrend(dataset) {
  var downtrend = 0
  var downtrend_record = 0
  var datalenght = Object.keys(dataset["total_volumes"]).length;

  for (let i = 0; i < datalenght-1; i++){
    
    const trend = dataset["prices"][i+1][1]/dataset["prices"][i][1]
    if (trend < 1.0){
      downtrend += 1
      if (downtrend > downtrend_record){
        downtrend_record = downtrend
      }
    }
    else {
      if (downtrend > downtrend_record){
        downtrend_record = downtrend
      }
        downtrend = 0
    }
  }
  
  return downtrend_record
}