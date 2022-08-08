import React, { useState } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {id: 1, title: 'Reminder 1'}
  ])

  return (
    <div className='container py-5'>
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
