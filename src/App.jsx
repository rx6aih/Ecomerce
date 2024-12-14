import { useState } from 'react'
import Navbar from "./Components/UI Components/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./Context/index.js";
import AppRouter from "./Routing/AppRouter.jsx";
import {NextUIProvider} from "@nextui-org/react";
import {Provider} from "react-redux";
import {store} from "./Store/store.jsx"
import Footer from "./Components/UI Components/Footer.jsx";
function App() {
    const [isAuthorized, setIsAuthorized] = useState(true);

  return (
      <Provider store={store}>
        <NextUIProvider>
          <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
            <BrowserRouter>
                <Navbar isSale={true} saleTitle={"Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow"}/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
          </AuthContext.Provider>
        </NextUIProvider>
      </Provider>
  )
}

export default App
