import React, { useEffect } from "react";
import "./App.css";
import HomeMain from "./Home/HomeMain/homeMain";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CategoriesPage from "./Page/CategoryPage/categoryPage";
import Navbar from "./Home/Navbar/navbar";
import Footer from "./Home/Footer/footer";
import NotFound from "./Page/PageNotFound/pageNotfound";
import OffersPage from "./Page/OfferPage/offerPage";
import CategoryMoreDetails from "./Page/categoryMoreDetails/moreDetails";
import AllRestaurantsPage from "./Page/AllRestaurentPage/allRestaurent";
import CartPage from "./Page/AddToCartPage/addToCart";
import SignupPage from "./Log Sign/signPage/sign";
import { ContextProvider } from "./Context/context";
import UserProfile from "./Page/UserProfilePage/userProfile";
import HelpSupport from "./Page/HelpFAQ/helpFaq";
import PrivacyPolicy from "./Page/Privacy_Policy_Page/privacyPolicyPage";
import RestaurantDishes from "./Page/RestoDiseasesPage/restoDishesPage";
import PaymentSuccess from "./Page/Payment Success  page/paymentSuccess ";
import VaultReportPage from "./Page/VaultreportPage/VaultreportPage";
import TransactionVault from "./Page/VaultreportPage/VaultreportPage";
import PaymentMethodPage from "./Page/PaymentMethod/payementMethod";
function App() {
  const { pathname } = useLocation();
  const check = !pathname.includes(["sign"]);
  console.log(check);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <ContextProvider>
        {check && <Navbar />}
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/allcategory" element={<CategoriesPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/restaurants" element={<AllRestaurantsPage />} />
          <Route
            path="/categoryMoreDetails/:id"
            element={<CategoryMoreDetails />}
          />
          <Route path="/sign" element={<SignupPage />} />
          <Route path="/addtocart" element={<CartPage />} />
          <Route path="/useraccount" element={<UserProfile />} />
          <Route path="/restodishes/:id" element={<RestaurantDishes />} />
          <Route path="/ourPrivacyAndPolicy" element={<PrivacyPolicy />} />
          <Route path="/payementSuccess" element={<PaymentSuccess />} />
          <Route path="/walletreport" element={<TransactionVault/>}/>
          <Route path="/chooseMethod" element={<PaymentMethodPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {check && <Footer />}
      </ContextProvider>
    </>
  );
}

export default App;








