import React from 'react'
import ActivitiesList from './features/activities/ActivitiesList'
import AddActivityForm from './features/activities/AddActivityForm'
import Header from './features/header/Header'

function App() {
  return (
    <div>
      <Header />
      <ActivitiesList />
      <AddActivityForm />
    </div>
  )
}

export default App
