export default function AuthForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
