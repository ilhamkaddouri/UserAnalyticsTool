import React, {useState, useEffect} from 'react'
import { getVisitsRoute } from '../../services/logsService'
import PageviewIcon from '@material-ui/icons/Pageview';
interface PagesProps {

}

type page = {
    _id: {
        "url": "/hello",
        "method": "GET"
    },
    responseTime: Number,
    numberOfRequests: Number
}

export const Pages: React.FC<PagesProps> = ({}) => {
    const [pages, setPages] = useState([])

    useEffect(()=>{
        const getPages = async ()=>{
            const result = await getVisitsRoute();
            if(result && result.data){
                setPages(result.data.statsPerRoute)
            }
        }
        getPages()
    },[])
    return (
        <div className="page__container">
        <div className="element__container">
            <span className='visitors__element__title'>Pages</span>
            <div>
            {pages && pages.map((page: page)=>(
                <div className='visit'>
                    <p><PageviewIcon fontSize='inherit' /><b> Page : </b>{page._id.url}</p>
                    <p> <b>Method: </b>{page._id.method}</p>
                    <p><b>numberOfRequests:</b> {page.numberOfRequests}</p>
                    <p><b>responseTime: </b>{page.responseTime}</p>
                </div>
            ))}
            <div className='graph__options'>
            
            </div>
            </div>
        </div>
    </div>
    );
}