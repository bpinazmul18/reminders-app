import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

interface NewReminderProps {
    onAddReminder: (title: string) => void
}

function NewReminder ({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('')

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title)return;
        onAddReminder(title)
        setTitle('')
    }
    return (
        <Form onSubmit={submitForm} className="mb-4">
            <Form.Label htmlFor="title">Email address</Form.Label>
            <Form.Control type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} id="title" className="mb-3" placeholder="Enter title..." />
            <Button variant="primary" type="submit" className="rounded-pill">
                Add Reminder
            </Button>
        </Form>
    )
}

export default NewReminder