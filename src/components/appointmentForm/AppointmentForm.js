import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Title</p><input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Appointment's title" />
        </label>
        <label>
          <p>Contact</p><ContactPicker name="contact" value={contact} contacts={getContactNames()} onChange={(e) => setContact(e.target.value)} required placeholder="Appointment with:" />
        </label>
        <label>
          <p>Date</p><input type="date" name="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} required placeholder="Appointment's date" />
        </label>
        <label>
          <p>Time</p><input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required placeholder="Appointment's time" />
        </label>
        <input type="submit" value="Add Appointment" />
      </form>
    </div>
  );
};
