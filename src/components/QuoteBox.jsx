import RefreshButtom from './RefreshButtom'

const QuoteBox = ({quote, author, isRefresh, setIsRefresh, color, secondColor}) => {
    
    return (
        <>
            <div className="card-quote" style={{backgroundColor:`${color}`}}>
                <p className="quote-text" style={{color:`${secondColor}`}} >
                    <span className='quote-marks'>“</span> 
                        {quote} 
                    <span className='quote-marks'>”</span>
                </p>
                <p className="quote-author" style={{color:`${secondColor}`}}>
                    ( {author} )
                </p>
                <RefreshButtom isRefresh={isRefresh} 
                        setIsRefresh={setIsRefresh} 
                        color={color} 
                        secondColor={secondColor}
                >
                </RefreshButtom>
            </div>
        </>
    )
}

export default QuoteBox;