export function hourstodays(dataset) {
  var i=0
  var d_i = 0
  var size = Object.keys(dataset["prices"]).length;
  const daily_volume = [,]
  const daily_price = [,]
  
  while(i<=size) {
    daily_price[d_i] = [dataset["prices"][i][0], dataset["prices"][i][1]]
    daily_volume[d_i] = [dataset["total_volumes"][i][0], dataset["total_volumes"][i][1]]
    d_i = d_i+1
    i=i+24
  }

  let daily_dataset = {total_volumes: daily_volume, prices: daily_price  }
  return daily_dataset
}

  