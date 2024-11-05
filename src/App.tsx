import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/auth/signin">로그인</Link>
          </li>
          <li>
            처음이신가요?&nbsp;
            <Link to="/auth">회원가입</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
