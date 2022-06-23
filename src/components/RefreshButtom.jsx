import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRotate} from '@fortawesome/free-solid-svg-icons'

const RefreshButtom = ({isRefresh, setIsRefresh, color, secondColor}) => {
    const refreshIcon = <FontAwesomeIcon icon={faRotate} />
    return (
        <>
            <button className='btnChange'
                    onClick={()=>setIsRefresh(!isRefresh)}
                    style={{color:`${color}`, backgroundColor:`${secondColor}`}}>
                {refreshIcon}
            </button>
        </>
    )
}

export default RefreshButtom