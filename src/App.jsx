import { useState } from "react";
import "./App.css";


function App() {
  const [sliderValue, setSliderValue] = useState(3)
  const [barColorWidth, setBarColorWidth] = useState('50');
  const [selectedBilling, setSelectedBilling] = useState('monthly')
  const [displayPrices, setDisplayPrices] = useState(['100K',16])

  const PRICES = [['10K',8],['50K',12],['100K',16],['500K',24],['1M',36]]


  const sliderBarHandler = e => {
    const value = e.target.value;
    setSliderValue(value);
    if (selectedBilling === 'monthly'){
      setDisplayPrices(PRICES[value-1])
    } else {
      setSelectedBilling('yearly')
      let arr = []
      arr.push(PRICES[value-1][0])
      const yearlyPrice = PRICES[value-1][1]*12
      const discountedPrice = yearlyPrice - yearlyPrice*0.25
      arr.push(discountedPrice)
      setDisplayPrices(arr)
    }
    let widthPtg = ''
    switch (value) {
      case "2":
        widthPtg = '25';
        break;
      case "3":
        widthPtg = '50';
        break;
      case "4":
        widthPtg = '75';
        break;
      case "5":
        widthPtg = '100';
        break;
      default:
        widthPtg = '0';
        break;
    }
    setBarColorWidth(widthPtg)
  }

  const checkHandler = e => {
    if (e.target.checked){
      setSelectedBilling('yearly')
      let arr = []
      arr.push(PRICES[sliderValue-1][0])
      const yearlyPrice = PRICES[sliderValue-1][1]*12
      const discountedPrice = yearlyPrice - yearlyPrice*0.25
      arr.push(discountedPrice)
      setDisplayPrices(arr)
    } else {
      setSelectedBilling('monthly')
      setDisplayPrices(PRICES[sliderValue-1])
    }
  }

  return (
    <div className="min-w-[90vw] min-h-[100lvh] bg-background-pattern bg-no-repeat bg-top-4 bg-[#fafbff] text-[#858fad] flex flex-col items-center justify-center md:justify-start font-Body">
      <div className="w-full h-full flex flex-col items-center justify-center text-center mb-10">
        <div className="w-full min-h-52 flex flex-col justify-center mt-10 md:my-4 mx-4 text-center items-center bg-pattern-circles bg-no-repeat bg-center">
          <h1 className="text-xl md:text-4xl text-[#293356] font-Title mb-4">
            Simple, traffic-based pricing
          </h1>
          <p className="text-sm md:text-base font-semibold text-[#858fad]">
            Sign-up for our 30-day trial.
            <br className="md:hidden" />
            No credit card required.
          </p>
        </div>

        <div className="w-[90%] max-w-[400px] md:w-[600px] md:max-w-[600px] rounded-lg bg-white shadow-lg">
          <div className="py-10 px-2">
            <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 md:items-center px-2 md:px-10">
              <div className="col-span-1 col-start-1 row-start-1 md:text-left">
                <p className="uppercase text-xs md:text-base font-Title tracking-[0.15rem]">
                  {displayPrices[0]} pageviews
                </p>
              </div>
              <div className="md:col-span-2 row-start-2 md:mb-6">
                <input
                  className="slider rounded-lg"
                  style={{
                    backgroundImage: `linear-gradient(to right, #a5f3eb ${barColorWidth}%, #eaeefb 1px)`,
                  }}
                  type="range"
                  defaultValue={3}
                  min={1}
                  max={5}
                  onInput={sliderBarHandler}
                />
              </div>

              <div className="col-span-1 row-start-1">
                <p className="flex flex-row items-center justify-center md:justify-end text-base md:text-xl mt-6 mb-10 md:my-auto">
                  <span className="mr-2 text-[#293356] text-[2rem] md:text-5xl font-Title">
                    ${displayPrices[1].toFixed(2)}
                  </span>{" "}
                  /{selectedBilling === "monthly" ? "month" : "year"}
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center md:ml-16">
              <p className="text-xs md:text-sm font-Body">Monthly Billing</p>

              <label className="toggle-switch md:mx-3">
                <input type="checkbox" onChange={checkHandler} />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>

              <p className="text-xs md:text-sm font-Body">Yearly Billing</p>

              <div className="flex flex-col justify-center items-center px-2 pt-1 mb-1 ml-1 md:ml-2 bg-[#feece7] rounded-lg">
                <p className="text-[0.75rem] font-Title text-[#ff8c66]">
                  <span className="inline-block md:hidden">-</span>25%{" "}
                  <span className="hidden md:inline-block">discount</span>
                </p>
              </div>
            </div>
          </div>
          <div className="separator w-full h-[2px] bg-[#edeff9]" />
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center p-8 md:px-12 md:py-10">
            <div className="flex flex-col items-start">
              <div className="flex flex-row justify-center items-center gap-2 md:gap-6 mb-3">
                <img src="/icon-check.svg" />
                <p className="text-xs md:text-sm md:tracking-wide">
                  Unlimited websites
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 md:gap-6 mb-3">
                <img src="/icon-check.svg" />
                <p className="text-xs md:text-sm md:tracking-wide">
                  100% data ownership
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 md:gap-6">
                <img src="/icon-check.svg" />
                <p className="text-xs md:text-sm md:tracking-wide">
                  Email reports
                </p>
              </div>
            </div>
            <button className="mt-6 md:mt-2 px-12 pt-3 pb-2 md:pt-3 md:pb-3 md:px-16 text-xs md:text-sm rounded-full bg-[#293356] text-[#bdccff] cursor-pointer hover:text-white transition-colors ease-in duration-150">
              Start my trial
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Juan Miranda</a>.
      </div>
    </div>
  );
}

export default App;
