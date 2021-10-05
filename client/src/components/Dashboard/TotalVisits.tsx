import React, {useState, useEffect} from 'react'
import {getVisitsData} from '../../services/logsService'
interface totalVisitsProps {

}

export const TotalVisits: React.FC<totalVisitsProps> = ({ }) => {
    const [selected, setSelected] = useState<string>("Visits");
    const [uniPageViews, setuniPageViews] = useState(0);
    const [uniVisitors, setUniVisitors] = useState(0);
    const [visits, setVisits] = useState(0);
    const changeSelectOptionHandler = (event: any) => {
        setSelected(event.target.value);
    };

    useEffect(()=>{
        const getData = async ()=>{
            const result = await getVisitsData()
            if(result){
                setUniVisitors(result.data.uniVisitors);
                setuniPageViews(result.data.pageViews);
                setVisits(result.data.visits);
            }
        }
        getData()
    },[])

    const algorithm = [
        "Searching Algorithm",
        "Sorting Algorithm",
        "Graph Algorithm",
    ];
    const language = ["C++", "Java", "Python", "C#"];
    const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

    /** Type variable to store different array for different dropdown */
    let type = null;

    /** This will be used to create set of options that user will see */
    let options = null;
    if (selected === "Unique PageViews") {
        type = {name: 'Unique PageViews', value: uniPageViews};
    } else if (selected === "Unique Visitors") {
        type ={name: 'Unique Visitors', value: uniVisitors};
    } else if (selected === "Visits") {
        type ={name: 'Visits', value: visits};
    } else if (selected === "Avg Page load") {
        type = {name: 'Unique PageViews', value: uniPageViews};
    }

    /** If "Type" is null or undefined then options will be null,
     * otherwise it will create a options iterable based on our array
     */
    // if (type) {
    //     options = type.map((el) => <option key={el}>{el}</option>);
    // }
    return (
        <div
            style={{
                padding: "16px",
                margin: "16px",
            }}
        >
            <form>
                <div>
                    {/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
                    <select onChange={changeSelectOptionHandler}>
                        <option>Visits</option>
                        <option>Unique Visitors</option>
                        <option>Unique PageViews</option>
                        <option>Avg Page Load</option>
                    </select>
                </div>
                <div>

                    {type?.value} {type?.name}


                </div>
            </form>
        </div>
    );
}