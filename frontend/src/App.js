import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AuthProvider from "./services/providers/AuthProvider/AuthProvider";

import { Provider } from "react-redux";
import { store } from "./services/state/store";
import PrivateRoute from "./services/providers/PrivateRoute";

function App() {
  return (
    <div className="App vh-100">
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
