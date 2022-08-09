import React, { useEffect, useState } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import { fetchReminders, deleteReminder } from './services/reminders';
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const response = await fetchReminders()
    setReminders(response.data)
  }

  const handleReminder = async (id: number) => {
    try {
       const newReminders = reminders.filter((reminder) => reminder.id !== id)
       setReminders(newReminders)

       await deleteReminder(id)
   } catch (ex) {
      //  if (ex.response && ex.response.status === 404)
      //      console.log('This post already been deleted!')

      //   if (ex.response && ex.response.status === 403)
      //       console.log(ex.response.data)

       setReminders(reminders)
   }
}

  return (
    <div className='container py-5'>
        <NewReminder/>
      <ReminderList items={reminders} onRemoveReminder={handleReminder}/>
    </div>
  );
}

export default App;
