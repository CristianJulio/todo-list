import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivities } from './activitiySlice'
import Activity from './Activity'

function ActivitiesList() {  
  const activities = useSelector(selectActivities)

  if(!activities.length) return <p>Nothing to show...</p>
  
  return (
    <div>
      <ul>
        {activities.map(a => (
          <Activity key={a.id} activity={a} />
        ))}
      </ul>
    </div>
  )
}

export default ActivitiesList
