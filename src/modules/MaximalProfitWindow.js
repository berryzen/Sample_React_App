//Search begin and end date for biggest for biggest profit. Return also advice to trade or not
export function maximalprofitwindow(dataset) {    
    
    var datalenght = Object.keys(dataset["total_volumes"]).length;
    var day_highest_price = null
    var highest_price = 0
    var global_day_lowest_price = null
    var global_day_highest_price = null
    var biggest_profit = 0
    var lowest_price = dataset["prices"][0][1]
    var day_lowest_price = dataset["prices"][0][0]
    var trade_or_not = true
    
    
    for (var i = datalenght-1; i >= 0; i--) {        
        if (dataset["prices"][i][1] > highest_price  ){
            highest_price = dataset["prices"][i][1]
            day_highest_price = dataset["prices"][i][0]

            for (var z = 0; z < i; z++){
                if (dataset["prices"][z][1] < lowest_price  ){ 
                    lowest_price = dataset["prices"][z][1]
                    day_lowest_price = dataset["prices"][z][0]

                }
                if (biggest_profit < (highest_price-lowest_price)){
                biggest_profit = highest_price-lowest_price
                global_day_lowest_price = day_lowest_price
                global_day_highest_price = day_highest_price

                }   
                lowest_price = dataset["prices"][0][1]
                day_lowest_price = dataset["prices"][0][0]
            }
        }
    }
    const global_day_lowest_price_converted = new Date(global_day_lowest_price).toLocaleString()
    const global_day_highest_price_converted = new Date(global_day_highest_price).toLocaleString()

    if (biggest_profit === 0){
        trade_or_not = false
    }

    return [global_day_lowest_price_converted, global_day_highest_price_converted, trade_or_not]
}