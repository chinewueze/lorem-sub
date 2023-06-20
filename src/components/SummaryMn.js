import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
const encodedSvgMob = encodeURIComponent(svgMob);
const encodedSvgImage = encodeURIComponent(svgImage);
export default function SummaryMn() {
  const selectedPlan = localStorage.getItem('selectedPlan');
  const selectedPlanPrice = localStorage.getItem('selectedPlanPrice');
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
  const navigate = useNavigate()
  const prev = () => {
    navigate(-2)
  }
  const addonPrev = () => {
    navigate(-1)
  }
  const handleClick = () => {
    navigate("/success")
  }
  const sumOfIntegers = selectedProducts.reduce(
    (sum, product) => sum + parseInt(product.price),
    parseInt(selectedPlanPrice)
  );
  return (
    <div>
      <Helmet>
        <title> Summary/Checkout </title>
      </Helmet>
      <div className={` lg:flex sm:hidden`} >
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
            <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 2 </span> </div>
            <div><h3>STEP 2</h3> <h1 className="font-bold text-lg"> SELECT PLAN </h1></div>
          </div>
          <div className={`flex mx-12 mb-9 `}>
            <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 3 </span> </div>
            <div><h3>STEP 3</h3> <h1 className="font-bold text-lg"> ADD-ONS </h1></div>
          </div>
          <div className={`flex mx-12 mb-9 `}>
            <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium `}> <span className="mx-3 my-2 text-primary-marineblue"> 4 </span> </div>
            <div><h3>STEP 4 </h3> <h1 className="font-bold text-lg"> SUMMARY </h1></div>
          </div>
        </div>
        <div className="mx-auto w-3/5 p-5 ">
          <h1 className='text-primary-marineblue font-bold text-3xl  mt-24 mb-3 '> Finishing up </h1>
          <h2 className='text-neutral-coolgray text-base font-semibold mb-4'> Double-check everything looks OK before confirming </h2>
          <div className=' relative px-1.5 rounded-2xl bg-neutral-magnolia'>
            <div className=' flex h-15 w-full pt-4 px-2'>
              <div>
                <h1 className='text-primary-marineblue font-semibold text-lg'>{selectedPlan} (Monthly)</h1>
                <Link onClick={prev} className='underline'> Change </Link>
              </div>
              <h1 className='absolute right-5 text-primary-marineblue font-semibold text-lg'> +${selectedPlanPrice}/mo </h1>
            </div>
            <div className='border-2 mx-9 my-3'> </div>
            <div className="  w-4/5">
              {selectedProducts.map((product) => (
                <div key={product.id} >
                  <div className="flex px-1.5 mt-2.5 mb-4 pb-2">
                    <h2 className='text-neutral-coolgray font-semibold text-base'>{product.name} </h2>
                    <h2 className='absolute right-5 text-primary-marineblue font-semibold text-base'> +${product.price}/mo </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=' flex px-5 my-5'>
            <h1 className='text-neutral-coolgray text-base font-semibold'>
              Total(per month)
            </h1>
            <h1 className='absolute right-14 text-primary-purplishblue font-bold text-2xl'> ${sumOfIntegers}/mo </h1>
          </div>
          <div className=" relative mt-96" >
            <Link onClick={addonPrev} className="font-semibold text-xl text-neutral-coolgray ml-7">
              Go Back
            </Link>
            <button
              onClick={handleClick}
              className={`bg-primary-purplishblue text-white p-2.5 rounded-lg absolute right-5`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
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
              <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 2 </span> </div>
              <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 3 </span> </div>
              <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 4 </span> </div>
            </div>
          </div>
          <div className=" rounded-lg p-4 mx-11 my-24 bg-white ">
            <h1 className="font-extrabold text-4xl font-mono mb-3"> Finishing up </h1>
            <p className="text-neutral-coolgray text-xl">
              Double-check everything looks OK before confirming
            </p>
            <div className={`flex flex-col mt-11`}>
              <div className=' relative px-1.5 rounded-2xl bg-neutral-magnolia'>
                <div className=' flex h-15 w-full pt-4 px-2'>
                  <div>
                    <h1 className='text-primary-marineblue font-semibold text-lg'>{selectedPlan} (Monthly)</h1>
                    <Link onClick={prev} className='underline'> Change </Link>
                  </div>
                  <h1 className='absolute right-5 text-primary-marineblue font-semibold text-lg'> +${selectedPlanPrice}/mo </h1>
                </div>
                <div className='border-2 mx-9 my-3'> </div>
                <div className="  w-4/5">
                  {selectedProducts.map((product) => (
                    <div key={product.id} >
                      <div className="flex px-1.5 mt-2.5 mb-4 pb-2">
                        <h2 className='text-neutral-coolgray font-semibold text-base'>{product.name} </h2>
                        <h2 className='absolute right-5 text-primary-marineblue font-semibold text-base'> +${product.price}/mo </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=' flex px-5 my-6'>
                <h1 className='text-neutral-coolgray text-base font-semibold'>
                  Total(per month)
                </h1>
                <h1 className='absolute right-14 text-primary-purplishblue font-bold text-2xl'> ${sumOfIntegers}/mo </h1>
              </div>
            </div>
            <div className=" relative mt-60 mb-9" >
              <Link onClick={addonPrev} className="font-semibold text-xl text-neutral-coolgray mt-5">
                Go Back
              </Link>
              <button
                onClick={handleClick}
                className="bg-primary-purplishblue text-white p-2.5 rounded-lg absolute right-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}