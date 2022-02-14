import React, { useState, useEffect } from 'react'
//import logo from './logo.svg';
import './mainbcal.css';
import WeekdayComponent from './b.js'

function App() {
  const [showyear, setShowyear] = useState("2016")
  const [weekdays, setWeekdays] = useState({})
  const [data, setdata] = useState([
    
      {
        "name": "Tyrion Lannister",
        "birthday": "12/02/1978"
      }, {
        "name": "Cersei Lannister",
        "birthday": "11/30/1975"
      }, {
        "name": "Daenerys Targaryen",
        "birthday": "11/24/1991"
      }, {
        "name": "Arya Stark",
        "birthday": "11/25/1996"
      }, {
        "name": "Jon Snow",
        "birthday": "12/03/1989"
      }, {
        "name": "Sansa Stark",
        "birthday": "08/15/1992"
      }, {
        "name": "Jorah Mormont",
        "birthday": "12/16/1968"
      }, {
        "name": "Jaime Lannister",
        "birthday": "12/06/1975"
      }, {
        "name": "Sandor Clegane",
        "birthday": "11/07/1969"
      }, {
        "name": "Tywin Lannister",
        "birthday": "10/12/1951"
      }, {
        "name": "Theon Greyjoy",
        "birthday": "12/31/1989"
      }, {
        "name": "Samwell Tarly",
        "birthday": "12/07/1990"
      }, {
        "name": "Joffrey Baratheon",
        "birthday": "06/12/1992"
      }, {
        "name": "Catelyn Stark",
        "birthday": "12/03/1962"
      }, {
        "name": "Bran Stark",
        "birthday": "12/02/1995"
      }, {
        "name": "Petyr Baelish",
        "birthday": "11/20/1974"
      }, {
        "name": "Robb Stark",
        "birthday": "11/28/1986"
      }, {
        "name": "Brienne of Tarth",
        "birthday": "11/27/1985"
      }, {
        "name": "Margaery Tyrell",
        "birthday": "12/02/1989"
      }, {
        "name": "Stannis Baratheon",
        "birthday": "09/14/1971"
      }, {
        "name": "Davos Seaworth",
        "birthday": "02/13/1973"
      }, {
        "name": "Tormund Giantsbane",
        "birthday": "12/14/1974"
      }, {
        "name": "Jeor Mormont",
        "birthday": "11/01/1955"
      }, {
        "name": "Eddard Stark",
        "birthday": "12/02/1963"
      }, {
        "name": "Khal Drogo",
        "birthday": "12/05/1980"
      }, {
        "name": "Ramsay Bolton",
        "birthday": "12/05/1976"
      }, {
        "name": "Robert Baratheon",
        "birthday": "12/02/1965"
      }, {
        "name": "Daario Naharis",
        "birthday": "12/02/1985"
      }, {
        "name": "Viserys Targaryen",
        "birthday": "12/06/1984"
      }
  

  ])

  useEffect(() => {
    parseData()
  }, [data, showyear]);


  const parseData = () => {
    const mon = []
    const tue = []
    const wed = []
    const thus = []
    const fri = []
    const sat = []
    const sun = []

    for (let i = 0; i < data.length; i++) {
      var date = new Date(data[i].birthday.substring(6, 10))
      let changeyear = new Date(data[i].birthday.substring(0, 6) + showyear)
      // console.log(changeyear)
      // console.log(data[i].birthday.substring(0,6))
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var day = weekday[changeyear.getDay()]
      let initials = data[i].name.split(' ').reduce((acc, subname) =>
        acc + subname[0], '')
      // console.log(initials)
      if (day === "Monday") {
        mon.push({ date, initials })
      }
      else if (day === "Tuesday") {
        tue.push({ date, initials })
      }
      else if (day === "Wednesday") {
        wed.push({ date, initials })
      }
      else if (day === "Thursday") {
        thus.push({ date, initials })
      }
      else if (day === "Friday") {
        fri.push({ date, initials })
      }
      else if (day === "Saturday") {
        sat.push({ date, initials })
      }
      else if (day === "Sunday") {
        sun.push({ date, initials })
      }
    }
    setWeekdays({
      Mon: mon.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Tue: tue.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Wed: wed.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Thus: thus.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Fri: fri.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Sat: sat.sort((a, b) => (a.date < b.date) ? 1 : -1),
      Sun: sun.sort((a, b) => (a.date < b.date) ? 1 : -1)
    })

  }

  const handleYearChange = (e) => {
    setShowyear(e.target.value)
    console.log(showyear)
  }

  const handleDataChange = (event) => {
      try {
          setdata(JSON.parse(event.target.value));
      } catch(e) {
        console.log("error")
      }

    // console.log('val', val)
    // setdata(JSON.parse(val))
   
  }
  return (
    <div className="App app">
      <h1 className="app__header">Birthday Cal &ndash; Work Area</h1>
      <div className="app__content">
        <div id="work-area">
          <div className="calendar-container">

            <WeekdayComponent weekData={weekdays} />

          </div>

          <div className="app__inputs">
            <textarea className="app__txt js-json" id='json-input' value={JSON.stringify(data, null,5)} onChange={(event) => { handleDataChange(event) }} placeholder="Paste the json here." />

            <div className="app__actions">
              <label>Year</label>
              <select className="js-year-input" value={showyear} onChange={(e) => { handleYearChange(e) }}>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016" selected>2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="border-line app__border" />

      </div>
    </div>
  );
}

export default App;
