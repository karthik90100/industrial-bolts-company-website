import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './Pages/HomePage';
import AboutUs from './Pages/AboutUsPage';
import Product from './Pages/ProductPage';
import Fasteners from './Pages/FastenersPage';
import TechnicalSpecificationsPage from './Pages/TechnicalSpecificationsPage';
import ServicesPage from './Pages/ServicesPage';
import ManufacturingPage from './Pages/ManufacturingPage';
import IndustryWeServePage from './Pages/IndustryWeServePage.jsx';
import EventsPage from './Pages/EventsPage.jsx';
import ContactUS from './Pages/ContactUS.jsx'
import Certificates from './Pages/Certificates.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import BlogDeatilsPage from './Pages/BlogDeatilsPage.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
function RoutesManager() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      {/* Parent Layout */}
      <Route path="/" element={<Layout />}>

        {/* Home Page (Hero1) */}
        <Route index element={<Home />} />

        {/* Other Pages (Hero2 inside them) */}
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="fasteners" element={<Fasteners />} />
        <Route path="technical" element={<TechnicalSpecificationsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="manufacturing" element={<ManufacturingPage />} />
        <Route path="industry" element={<IndustryWeServePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactUS />} />
        <Route path="certification" element={<Certificates />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogDeatilsPage />} />

      </Route>

    </Routes>
  )
}

export default RoutesManager;
