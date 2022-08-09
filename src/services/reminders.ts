import http from "./http";
import Reminder from '../models/reminder';

export const fetchReminders = () => http.get<Reminder[]>('/todos')
export const addReminder = (title: string) => http.post<Reminder>('/todos', { title })
export const fetchReminder = (id: number) => http.get<Reminder>(`/todos/${id}`)
export const updateReminder = (id: number, movie: Reminder) => http.put<Reminder>(`/todos/${id}`, movie)
export const deleteReminder = (id: number) => http.delete(`/todos/${id}`)