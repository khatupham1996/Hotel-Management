import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:bookingId" element={<Booking />} />
          <Route path="checkin/:bookingId" element={<Checkin />} />
          {/* <Route path="checkout/:bookingId" element={<Checkout />} /> */}
          {/* <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
