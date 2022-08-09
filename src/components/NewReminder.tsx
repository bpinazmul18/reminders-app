import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

function NewReminder (): JSX.Element {
    const [title, setTitle] = useState('')
    return (
        <Form className="mb-4">
            <Form.Label htmlFor="title">Email address</Form.Label>
            <Form.Control type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} id="title" className="mb-3" placeholder="Enter title..." />
            <Button variant="primary" type="submit" className="rounded-pill">
                Add Reminder
            </Button>
        </Form>
    )
}

export default NewReminder