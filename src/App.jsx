import "./assets/css/index.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/home';
// import SendPayments from "./pages/products/payments";
// import ContactUs from "./pages/company/contact";
// import AboutUsPage from "./pages/company/about";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/products/payments" element={<SendPayments />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
