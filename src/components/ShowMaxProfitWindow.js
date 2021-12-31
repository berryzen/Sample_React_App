import './Component.css'

function ShowMaxProfitWindow(props) {    
    return (
        <div>
            <h1 className='title'>Maximal profit window </h1>
            <h3 className='outputdata'>Start date: {props.maximalProfit[0] } GMT +0200</h3>
            <h3 className='outputdata'>End date: {props.maximalProfit[1] } GMT +0200</h3>
            <h3 className='outputdata'>Should you trade? : {(props.maximalProfit[2]==true) ? "Yes, trade" : "Don't trade" } </h3>
        </div>
    )
}

export default ShowMaxProfitWindow
