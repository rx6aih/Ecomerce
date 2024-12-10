import { useState } from 'react'
import Navbar from "./Components/UI Components/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./Context/index.js";
import AppRouter from "./Routing/AppRouter.jsx";
import {NextUIProvider} from "@nextui-org/react";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(true);
  return (
    <NextUIProvider>
      <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
        <BrowserRouter>
          <Navbar isSale={true} saleTitle={"Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!\n" +
              "ShopNow"}/>
            <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </NextUIProvider>
  )
}

export default App
