import React from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';

const reminders: Reminder[] = [
  {id: 1, title: 'Reminder 1'}
]

function App() {
  return (
    <div className='container py-5'>
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
