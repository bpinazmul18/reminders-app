import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Reminder from '../models/reminder'

interface ReminderProps {
    items: Reminder[],
    onRemoveReminder: (id: number) => void
}

export default function ReminderList({items, onRemoveReminder}: ReminderProps) {
  return (
    <ListGroup>
        {items.map(item => (
            <ListGroup.Item key={item.id}>
                {item.title}
                <Button onClick={() => onRemoveReminder(item.id)} variant="outline-danger" className='mx-2 rounded-pill'>Delete</Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
