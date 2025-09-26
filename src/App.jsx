// // import './App.css'
// // import Navbar from './Navbar'
// // import Header from './Header'
// // import Home from './Home'
// // import Login from './Login'
// // import Sign from './Sign'

// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// // import VideoSection from './VideoSection .jsx'
// // import StoreSection from './StoreSection.jsx'
// // import Template from './Template.jsx'
// // import TemplatePage from './TemplatePage.jsx'   // 👈 naya page import
// // import Domain_Page from './Domain_Page.jsx'
// // import  ProductPage from './ ProductPage .jsx'
// // import AiFeatures from './AiFeatures.jsx'


// // function App() {
// //   return (
// //     <>
// //       {location.pathname !== "/login" && location.pathname !== "/sign" && <Navbar />}

// //       <Router>
// //         <Routes>
// //           <Route path="/" element={
// //             <>
// //               <Header />
// //               <Home />
// //                <VideoSection/>
// //                <StoreSection/>
// //                <Template/>
// //                <Domain_Page/>
// //                <ProductPage/>
// //                <AiFeatures/>
// //             </>
// //           } />
// //           <Route path="/login" element={<Login />} />
// //             <Route path="/sign" element={<Sign />} />
// //            {/* Templates Page */}
// //         <Route path="/templates" element={<TemplatePage />} />
// //          {/* <Route path="/wix_disgn" element={<Wix_Disgn />} /> */}
         
// //         </Routes>
// //       </Router>
// //     </>
// //   )
// // }

// // export default App
// import './App.css'
// import Navbar from './Navbar'
// import Header from './Header'
// import Home from './Home'
// import Login from './Login'
// import Sign from './Sign'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import VideoSection from './VideoSection .jsx'
// import StoreSection from './StoreSection.jsx'
// import Template from './Template.jsx'
// import TemplatePage from './TemplatePage.jsx'
// import Domain_Page from './Domain_Page.jsx'
// import ProductPage from './ ProductPage .jsx'
// import AiFeatures from './AiFeatures.jsx'
// import Wix_Disgn from './Wix_Disgn.jsx'   // 👈 naya page import
// import Testimonials from './Testimonials.jsx'
// import ScrollSections from './ScrollSections.jsx'
// import MarketingSection from './MarketingSection.jsx'

// function App() {
//   return (
//     <Router>
//       {location.pathname !== "/login" && location.pathname !== "/sign" && <Navbar />}

//       <Routes>
//         <Route path="/" element={
//           <>
//             <Header />
//             <Home />
//             <VideoSection/>
//             <StoreSection/>
//             <Template/>
//             <Domain_Page/>
//             <ProductPage/>
//             <AiFeatures/>
//             <Testimonials/>
//             <ScrollSections/>
//             <MarketingSection/>
//           </>
//         } />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign" element={<Sign />} />
//         {/* Templates Page */}
//         <Route path="/templates" element={<TemplatePage />} />
//         {/* Wixel Page */}
//         <Route path="/wix_disgn" element={<Wix_Disgn />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App
import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Sign from './Sign'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import VideoSection from './VideoSection .jsx'
import StoreSection from './StoreSection.jsx'
import Template from './Template.jsx'
import TemplatePage from './TemplatePage.jsx'
import Domain_Page from './Domain_Page.jsx'
import ProductPage from './ ProductPage .jsx'
import AiFeatures from './AiFeatures.jsx'
import Wix_Disgn from './Wix_Disgn.jsx'
import Testimonials from './Testimonials.jsx'
import ScrollSections from './ScrollSections.jsx'
import MarketingSection from './MarketingSection.jsx'
import Dashboard from './Dashboard.jsx'
import Infrastructure from './Infrastructure.jsx'
import Website_Step from './Website_Step.jsx'
import TipsSection from './TipsSection.jsx'
import SupportCards from './SupportCards.jsx'
import FAQSection from './FAQSection.jsx'
import AppFooter from './Footer.jsx'
import Transform from './Transform.jsx'
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  )
}

// ✅ Navbar condition directly yahi handle hoga
function MainApp() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/sign" && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <VideoSection/>
            <StoreSection/>
            <Template/>
            <Domain_Page/>
            <ProductPage/>
            <AiFeatures/>
            <Testimonials/>
            <ScrollSections/>
            <MarketingSection/>
            <Dashboard/>
            <Infrastructure/>
            <Website_Step/>
            <TipsSection/>
            <SupportCards/>
            <FAQSection/>
            <Transform/>
            <AppFooter/>
           
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/wix_disgn" element={<Wix_Disgn />} />
      </Routes>
    </>
  )
}

export default App
