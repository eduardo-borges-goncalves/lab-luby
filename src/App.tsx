import { Router } from "./routes";
import { GlobalStyle } from "./style/global";

import { useAuthentication } from "./context/Authentication";

export const App = () => {
  const { loading } = useAuthentication()

  return (
    loading ?
      <div></div>
      :
      <>
        <Router/>
        <GlobalStyle/>
      </>
  );
}

