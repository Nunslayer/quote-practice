import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRotate} from '@fortawesome/free-solid-svg-icons'

const Quote = ({quote, author, isRefresh, setIsRefresh, color, secondColor}) => {
    const refresh = <FontAwesomeIcon icon={faRotate} />
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
                <button className='btnChange' 
                        onClick={()=>setIsRefresh(!isRefresh)} 
                        style={{color:`${color}`, backgroundColor:`${secondColor}`}}
                >
                    {refresh}
                </button>
            </div>
        </>
    )
}

export default Quote;