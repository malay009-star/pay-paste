import HeroSection from "../component/heroSec"
import GenerateBg from "../component/../assets/images/generateBg.jpeg"
import Scan from "../component/../assets/images/scan.png"
import LightBlueInput from "../component/lightBlueInput"
import LightBtn from "../component/lightBtn"
import PrimaryBtn from "../component/primaryBtn"

const GenratePayment = () => {
  return (
    <div>
      <div>
        <HeroSection img={GenerateBg} title="Generate Your Payment Address" />
      </div>
      <div className="mainContainer">
        <div className="subContainer">
          <h3 className='md-heading text-center'>Generate Your Payment Address</h3>
          <div className="flex justify-center">
            <img className="" src={Scan} alt="" />
          </div>
          <LightBlueInput value="Waiting for Transactions.... 0/3" primary={true} />
          <div className="flex justify-center">
            <div className="w-4/5">
              <p>Scan the above QR code or enter the Ethereum address below and send exactly the amount shown below.</p>
              <strong className="mt-3 inline-block">Transaction amount: 0.001231 ETH</strong><br />
              <strong>Ethereum Adddress: 0X3949239391DX</strong>
            </div>
          </div>
          <div>
            <p>After payment you will unlock the content behind the locker and it will be emailed to you it you add your email address.</p>
          </div>
          <div>
            <strong className="mb-2 inline-block">Enter your email for notifications:</strong>
            <div className="flex items-center gap-3">
              <input className="primaryInput w-3/5"
                placeholder="Email Address"
                type="text" />
              <div className="w-2/5">
                <LightBtn text="Confirm" />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <span className="inline-block w-2/4"><PrimaryBtn text="Copy Address" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenratePayment
