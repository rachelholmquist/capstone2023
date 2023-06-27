import {useState} from 'react'

const Form = () => {
const [breakfastTime, setBreakfastTime] = useState('')
const [lunchTime, setLunchTime] = useState('')
const [dinnerTime, setDinnerTime] = useState('')



return (
    <form className='add-trip-details'>
        Breakfast Time: <input type='radio' name='breakfast' value={breakfastTime('08:00:00')} onChange={e => setBreakfastTime(e.target.value)}/>
        <input type='radio' name='breakfast' value={breakfastTime('09:00:00')} onChange={e => setBreakfastTime(e.target.value)}/>
        <input type='radio' name='breakfast' value={breakfastTime('10:00:00')} onChange={e => setBreakfastTime(e.target.value)}/>
    </form>
)
}

export default Form