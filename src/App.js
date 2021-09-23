import { UserPovider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserPovider>
        <Router />
      </UserPovider>
    </RecoilRoot>
  );
}
