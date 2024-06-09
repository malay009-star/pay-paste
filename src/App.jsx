import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './component/layout/defaultLayout'
import PayPaste from './pages/payPaste'
import GenratePayment from './pages/genratePayment'
import Processed from './pages/processed'
import ConfirmPayment from './pages/confirmPayment'
import ErrorPage from './pages/errorPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <DefaultLayout>
            <PayPaste />
          </DefaultLayout>
        } />
        <Route path='/pay-paste' element={
          <DefaultLayout>
            <PayPaste />
          </DefaultLayout>
        } />
        <Route path='/genrate-payment' element={
          <DefaultLayout>
            <GenratePayment />
          </DefaultLayout>
        } />
        <Route path='/processed' element={
          <DefaultLayout>
            <Processed />
          </DefaultLayout>
        } />
        <Route path='/confirm-payment' element={
          <DefaultLayout>
            <ConfirmPayment />
          </DefaultLayout>
        } />
        <Route path='*' element={
          <DefaultLayout>
            <ErrorPage />
          </DefaultLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
