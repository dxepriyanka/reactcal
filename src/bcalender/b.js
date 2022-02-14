
import React from 'react'

const WeekdayComponent = (props) => {

    const weekDaysName = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];
    console.log(props.weekData)


    return (
        <>
            <div className='container'>
                {weekDaysName.map((weekday, index) => {
                    const a = Math.ceil(Math.sqrt(props.weekData[weekday]?.length))
                    const cal = a === 0 ? 120 : 120 / a
                    console.log(cal)

    return (
            <div>
            <div key={index} className='day'>{weekday}</div>
            <div className='initails-wrapper' style={{ height: "120px", width: "120px", gridTemplateColumns: `repeat(${a}, 1fr)`  }}>
            {props.weekData[weekday] && props.weekData[weekday].map((person) => {
                                                   return <div style={{ height: cal + "px", width: cal + "px"}}>{person.initials}</div>
                                })}
                            </div>
                        </div>)
                })}
            </div>

        </>
    )
}
export default WeekdayComponent