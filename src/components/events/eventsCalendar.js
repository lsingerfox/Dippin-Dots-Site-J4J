import React,  { useState ,useEffect} from "react";
import Calendar from "react-calendar";

export function EventCalendar() {
    const [value, setValue] = useState(null)
    const [date, setDate] = useState(null)

    const onChange=()=> {
        setDate(new Date())
    }
    return (
        <div>
            <Calendar
            onChange = {onChange}
            value = {date}
            />
        </div>
    );
}