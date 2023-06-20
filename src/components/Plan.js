import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Switch } from '@headlessui/react'
const svgImage = `
<svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568">
  <rect width="274" height="568" fill="#483EFF" rx="10"/>
  <mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
    <rect width="274" height="568" fill="#fff" rx="10"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/>
    <path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/>
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/>
    <path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/>
  </g>
</svg>
`;
const svgMob =
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use xlink:href="#a" fill="#483EFF"/><g mask="url(#b)"><g transform="translate(-151.029 -133.957)"><path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373"/><path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>`
const arcade = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23FFAF7E'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z'/%3E%3C/g%3E%3C/svg%3E";
const advanced = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="20" fill="%23F9818E"%3E%3C/circle%3E%3Cpath fill="%23FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;
const pro = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="20" fill="%23483EFF"%3E%3C/circle%3E%3Cpath fill="%23FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E`;
const encodedSvgMob = encodeURIComponent(svgMob);
const encodedSvgImage = encodeURIComponent(svgImage);
export default function Plan() {
  const [enabled, setEnabled] = useState(false)
  const [min, setMin] = React.useState(null)
  const [mid, setMid] = React.useState(null)
  const [max, setMax] = React.useState(null)
  const [isText1Active, setIsText1Active] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    setIsToggled((prev) => !prev);
    setIsText1Active((prevIsActive) => !prevIsActive);
  }
  const handlePlanClick = (plan, price) => {
    setSelectedPlan(plan);
    setSelectedPlanPrice(price);
  };
  const handleNextClick = () => {
    if (selectedPlan) {
      localStorage.setItem('selectedPlan', selectedPlan);
      localStorage.setItem('selectedPlanPrice', selectedPlanPrice);
      if (isToggled) {
        navigate('/addons-yr');
      } else {
        navigate('/addons-mn');
      }
    } else {
      alert('Please choose a plan before proceeding⚠️.');
    }
  };

  useEffect(() => {
    const arcadePrice = isToggled ? 90 : 9;
    setSelectedPlanPrice(arcadePrice);
    setMin(
      <div>
        <h2 className='text-primary-marineblue text-lg font-semibold'> Arcade</h2>
        <h3 className='text-neutral-coolgray'>${arcadePrice}/{isToggled ? 'yr' : 'mo'}</h3>
        {isToggled && <h3 className='text-neutral-coolgray'>2 months free</h3>}
      </div>
    );
  }, [isToggled]);
  useEffect(() => {
    const advancedPrice = isToggled ? 120 : 12;
    setSelectedPlanPrice(advancedPrice);
    setMid(
      <div>
        <h2 className='text-primary-marineblue text-lg font-semibold'> Advanced </h2>
        <h3 className='text-neutral-coolgray'>${advancedPrice}/{isToggled ? 'yr' : 'mo'}</h3>
        {isToggled && <h3 className='text-neutral-coolgray'>2 months free</h3>}
      </div>
    );
  }, [isToggled]);
  useEffect(() => {
    const proPrice = isToggled ? 150 : 15;
    setSelectedPlanPrice(proPrice);
    setMax(
      <div>
        <h2 className='text-primary-marineblue text-lg font-semibold'> Pro </h2>
        <h3 className='text-neutral-coolgray'>${proPrice}/{isToggled ? 'yr' : 'mo'}</h3>
        {isToggled && <h3 className='text-neutral-coolgray'>2 months free</h3>}
      </div>
    );
  }, [isToggled]);
  return (
    <div>
      <Helmet>
        <title> Choose your preferred plan </title>
      </Helmet>
      <div className={` lg:flex sm:hidden`}>
        <div className={`w-1/3 h-screen m-9 rounded-3xl p-6 pt-14 text-white  `}
          style={{
            background: `url("data:image/svg+xml,${encodedSvgImage}")`,
            backgroundSize: "cover",
            backgroundPosition: " center"
          }}
        >
          <div className={`flex mx-12 mb-9 `}>
            <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 1 </span> </div>
            <div><h3>STEP 1</h3> <h1 className="font-bold text-lg"> YOUR INFO </h1></div>
          </div>
          <div className={`flex mx-12 mb-9 `}>
            <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium `}> <span className="mx-3 my-2 text-primary-marineblue"> 2 </span> </div>
            <div><h3>STEP 2</h3> <h1 className="font-bold text-lg"> SELECT PLAN </h1></div>
          </div>
          <div className={`flex mx-12 mb-9 `}>
            <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 3 </span> </div>
            <div><h3>STEP 3</h3> <h1 className="font-bold text-lg"> ADD-ONS </h1></div>
          </div>
          <div className={`flex mx-12 mb-9 `}>
            <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 4 </span> </div>
            <div><h3>STEP 4 </h3> <h1 className="font-bold text-lg"> SUMMARY </h1></div>
          </div>
        </div>
        <div className="mx-auto w-3/5  p-5">
          <h1 className='text-primary-marineblue font-bold text-3xl  mt-24 mb-3 '> Select your plan </h1>
          <h2 className='text-neutral-coolgray text-base font-semibold mb-4'> You have the option of monthly or yearly billing</h2>
          <div className={`flex  mt-11`}>
            <div className={`w-2/6 h-52 border-solid border-2 mx-3 p-2 rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Arcade' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''} `}
              onClick={() => handlePlanClick('Arcade', selectedPlanPrice)}
            >
              <img src={arcade} className="mt-4 ml-3 mb-16" alt="arcade-icon" />
              {min}
            </div>
            <div
              className={`w-2/6 h-52 border-solid border-2 p-2 rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Advanced' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
              onClick={() => handlePlanClick('Advanced', selectedPlanPrice)}
            >
              <img src={advanced} className=" mt-4 ml-3 mb-16" alt='advanced-icon' />
              {mid}
            </div>
            <div className={`w-2/6 h-52 border-solid border-2 mx-3 p-2 rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Pro' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
              onClick={() => handlePlanClick('Pro', selectedPlanPrice)}
            >
              <img src={pro} className=" mt-4 ml-3 mb-16" alt='pro-icon' />
              {max}
            </div>
          </div>
          <div className=" px-20 w-96 h-12  my-9 mx-auto bg-neutral-magnolia rounded-lg ">
            {isText1Active ? (
              <span className="text-primary-marineblue mr-3.5 font-bold"> Monthly </span>
            ) : (
              <span className="text-neutral-coolgray mr-3.5 font-bold"> Monthly</span>
            )}
            <Switch
              checked={enabled}
              onChange={setEnabled}
              onClick={handleClick}
              className={` my-2 ${enabled ? 'bg-primary-marineblue' : 'bg-primary-marineblue'}
                relative inline-flex h-[30px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                    pointer-events-none inline-block h-[25px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            {isText1Active ? (
              <span className="text-neutral-coolgray ml-3.5 font-bold"> Yearly </span>
            ) : (
              <span className="text-primary-marineblue ml-3.5 font-bold"> Yearly</span>
            )}
          </div>
          <div className=" relative mt-80" >
            <Link to="/" className="font-semibold text-xl text-neutral-coolgray">
              Go Back
            </Link>
            <button
              onClick={handleNextClick}
              className="bg-primary-marineblue text-white p-2.5 rounded-lg absolute right-5"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className='lg:hidden '>
        <div className='w-screen h-80'
          style={{
            background: `url("data:image/svg+xml,${encodedSvgMob}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex">
            <div className='flex mt-16 mx-auto'>
              <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 1 </span> </div>
              <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 2 </span> </div>
              <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 3 </span> </div>
              <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 4 </span> </div>
            </div>
          </div>
          <div className=" rounded-lg p-4 mx-11 my-24 bg-white ">
            <h1 className="font-extrabold text-4xl font-mono mb-3"> Select your plan </h1>
            <p className="text-neutral-coolgray text-xl">
              You have the option of monthly or yearly billing
            </p>
            <div className={`flex flex-col mt-11`}>
              <div className={`w-full h-28 border-solid border-2 mx-auto my-4 p-2 rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Arcade' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''} `}
                onClick={() => handlePlanClick('Arcade', selectedPlanPrice)}
              >
                <div className="flex ">
                  <img src={arcade} className="mb-5 ml-3 mr-4" alt="arcade-icon" />
                  {min}
                </div>
              </div>
              <div
                className={`w-full h-28 border-solid border-2 p-2 mx-auto rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Advanced' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
                onClick={() => handlePlanClick('Advanced', selectedPlanPrice)}
              >
                <div className='flex'>
                  <img src={advanced} className="mb-5 ml-3 mr-4" alt='advanced-icon' />
                  {mid}
                </div>
              </div>
              <div className={`w-full h-28 border-solid border-2 mx-auto my-4 p-2 rounded-2xl hover:border-primary-pastelblue product ${selectedPlan === 'Pro' ? 'selected bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
                onClick={() => handlePlanClick('Pro', selectedPlanPrice)}
              >
                <div className="flex">
                  <img src={pro} className="mb-5 ml-3 mr-4" alt='pro-icon' />
                  {max}
                </div>
              </div>
            </div>
            <div className=" px-7 w-full h-12  my-11 mx-auto bg-neutral-magnolia rounded-lg ">
              {isText1Active ? (
                <span className="text-primary-marineblue mr-3.5 font-bold"> Monthly </span>
              ) : (
                <span className="text-neutral-coolgray mr-3.5 font-bold"> Monthly</span>
              )}
              <Switch
                checked={enabled}
                onChange={setEnabled}
                onClick={handleClick}
                className={` my-2 ${enabled ? 'bg-primary-marineblue' : 'bg-primary-marineblue'}
                relative inline-flex h-[30px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                    pointer-events-none inline-block h-[25px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              {isText1Active ? (
                <span className="text-neutral-coolgray ml-3.5 font-bold"> Yearly </span>
              ) : (
                <span className="text-primary-marineblue ml-3.5 font-bold"> Yearly</span>
              )}
            </div>
            <div className=" relative my-16" >
              <Link to="/" className="font-semibold text-xl text-neutral-coolgray mt-5">
                Go Back
              </Link>
              <button
                onClick={handleNextClick}
                className="bg-primary-marineblue text-white p-2.5 rounded-lg absolute right-2"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}  