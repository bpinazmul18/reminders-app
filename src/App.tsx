import React, { useEffect, useState } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import { fetchReminders } from './services/reminders';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const response = await fetchReminders()
    setReminders(response.data)
  }

  return (
    <div className='container py-5'>
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
