import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Contact Name" />
        </label>
        <label>
          <p>Phone</p><input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="\d{2}-\d{4}-\d{4}" required placeholder="Contact Phone" />
        </label>
        <label>
          <p>E-Mail</p><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Contact E-Mail" />
        </label>
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};
