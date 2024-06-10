import { Link } from 'react-router-dom'
import HeroSection from "../component/heroSec"
import PasteBg from '../assets/images/pasteBg.png'
import TextAreaBtn from '../component/textAreaBtn'
import SuccessInput from "../component/successInput"
import PaymentBtn from "../component/paymentBtn"
import PrimaryBtn from '../component/primaryBtn'
import LightBtn from '../component/lightBtn'

const PayPaste = () => {
  return (
    <div>
      <div>
        <HeroSection img={PasteBg} title="Paste Your Content Here" />
      </div>
      <div className="mainContainer">
        <div className="subContainer">
          <h3 className='md-heading'>Paste Your Content Here </h3>
          <TextAreaBtn placeholdText='Enter Your content here...' />
          <p>With <Link className='font-bold'>PayPaste.com</Link> generating secure payment links for your valuable content has never been easier.</p>
          <SuccessInput placeholdText='Enter Price:' />
          <div>
            <PaymentBtn />
          </div>
          <div>
            <select className='w-full p-3 focus:outline-none border border-lightBlue'>
              <option>Expiration Time</option>
              <option>1 Hour</option>
              <option>6 Hour</option>
              <option>24 Hour</option>
            </select>
          </div>
          <div className='grid grid-cols-2 gap-2 sm:gap-4'>
            <PrimaryBtn text='Create My Link' />
            <LightBtn text='Generate Secure Link' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayPaste
