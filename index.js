import React from 'react'
import ReactDom from 'react-dom'

const monthNames = ['','','','','Máj', 'Jún', 'Júl', 'August']

const dayContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  width: 220,
}

const dayStyle = {
  flexGrow: 0,
  flexShrink: 0,
  width: 30,
  height: 21,
  border: '#999 1px solid',
  marginRight: -1,
  marginBottom: -1,
  color: '#999',
  textAlign: 'center',
  paddingTop: 9,
  fontSize: 9,
}

const monthTitleStyle = {
  width: 218,
  height: 25,
  textAlign: 'center',
  paddingTop: 5,
  color: '#333',
}

function getWeekDay(year, month, day) {
  let d = new Date(year, month-1, day).getDay()
  if (d === 0) d = 7
  return d-1
}


const App = React.createClass({
  render() {
    let months = [5,6,7,8]
    let numOfDays = (year, month) => (new Date(year, month,0)).getDate()
    let monthBlocks = months.map(i => {

      let days = Array.from(Array(numOfDays(2016,i)).keys())
      if (i === 5) days = days.filter(i => i >= 22)
      let dayBlocks = days.map(i => <div style={dayStyle}>{i+1}</div>)
      let firstDayOfWeek = getWeekDay(2016, i, days[0]+1)
      if (firstDayOfWeek > 0) {
        dayBlocks.unshift(<div style={{width: firstDayOfWeek * 31}}></div>)
      }
      return <div>
        <div style={monthTitleStyle}>{monthNames[i-1].toUpperCase()}</div>
        <div style={dayContainer}>
          {dayBlocks}
        </div>
      </div>
    })
    return (<div style={{width: '100%'}}>
      <div>{monthBlocks}</div>
    </div>)
    }
})

ReactDom.render(<App />, document.getElementById('content'))
