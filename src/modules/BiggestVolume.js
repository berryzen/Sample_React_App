//B) tulosta datasetistä korkein volyymi ja sen päivämäärä
export function biggestvolume(dataset) {
    var biggest_volume = 0
    var biggest_volume_day = null
    var datalenght = Object.keys(dataset["total_volumes"]).length;
    for (let i = 0; i < datalenght; i++){
     if (dataset["total_volumes"][i][1] > biggest_volume){
       biggest_volume = dataset["total_volumes"][i][1]
       biggest_volume_day = dataset["total_volumes"][i][0]
    }
  }
      const dateObject = new Date(biggest_volume_day)
      const biggest_volume_day_to_date = dateObject.toLocaleString()   
      return [biggest_volume_day_to_date, biggest_volume]

}