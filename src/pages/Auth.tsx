import { ChangeEvent, useState } from "react";

export default function Auth() {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formInput.email}
          onChange={onChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formInput.password}
          onChange={onChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
