import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Reminder from '../models/reminder'

interface ReminderProps {
    items: Reminder[]
}

export default function ReminderList({items}: ReminderProps) {
  return (
    <ListGroup>
        {items.map(item => (
            <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
        ))}
    </ListGroup>
  )
}
