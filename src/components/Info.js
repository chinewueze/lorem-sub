import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
export default function Info() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
            setError(true);
        } else {
            setError(false);
            setName('');
            setEmail('');
            setPhoneNumber('');
            navigate('/plan');
        }
    };
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
    return (
        <div>
            <Helmet>
                <title> Register </title>
            </Helmet>
            <div className="lg:flex bg-white sm:hidden">
                <div className={`w-1/3 h-screen m-12 rounded-3xl p-6 pt-14 text-white  `}
                    style={{
                        background: `url("data:image/svg+xml,${encodedSvgImage}")`,
                        backgroundSize: "cover",
                        backgroundPosition: " center"
                    }}
                >
                    <div className={`flex mx-12 mb-9 `}>
                        <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 1 </span> </div>
                        <div><h3>STEP 1</h3> <h1 className="font-bold text-lg"> YOUR INFO </h1></div>
                    </div>
                    <div className={`flex mx-12 mb-9 `}>
                        <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 2 </span> </div>
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
                <div className="mx-auto my-40">
                    <h1 className="font-extrabold text-4xl font-mono mb-3"> Personal info </h1>
                    <p className="text-neutral-coolgray">
                        Please provide your name, email address and phone number.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="my-6">
                        <label className="flex flex-col">
                            <p> Name {error && name.trim() === '' && <span className="text-red-500 ml-44 ">This field is required </span>} </p>
                            <input type="text" name="userName"
                                value={name}
                                onChange={handleNameChange}
                                className={`w-96 h-12 mb-6 border-2 border-solid  cursor-pointer rounded-lg focus:border-primary-pastelblue outline-none  ${error && name.trim() === '' ? 'border-red-500' : ''}`} />
                        </label>
                        <label className="flex flex-col">
                            <p> Email Address  {error && email.trim() === '' && <span className="text-red-500 ml-32">This field is required </span>} </p>
                            <input type="email"
                                value={email}
                                onChange={handleEmailChange}
                                name="userMail" className={`w-96 h-12 mb-6  border-2 border-solid  ${error && email.trim() === '' ? 'border-red-500' : ''} cursor-pointer rounded-lg focus:border-primary-pastelblue outline-none `} />
                        </label>
                        <label className="flex flex-col">
                            <p> Phone Number  {error && phoneNumber.trim() === '' && <span className="text-red-500 ml-32">This field is required </span>} </p>
                            <input
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                type="tel" name="userTel" className={`w-96 h-12 border-2 border-solid  ${error && phoneNumber.trim() === '' ? 'border-red-500' : ''} cursor-pointer rounded-lg  focus:border-primary-pastelblue outline-none `} />
                        </label>
                        <button type="submit" className="mx-64 bg-primary-marineblue text-white rounded-md w-32 h-9 my-72">
                            Next Step
                        </button>
                    </form>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='w-screen h-80 '
                    style={{
                        background: `url("data:image/svg+xml,${encodedSvgMob}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="flex">
                        <div className='flex mt-16 mx-auto'>
                            <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 1 </span> </div>
                            <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 2 </span> </div>
                            <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 3 </span> </div>
                            <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 4 </span> </div>
                        </div>
                    </div>
                    <div className=" rounded-lg p-4 mx-11 my-24 bg-white overflow-x-hidden">
                        <h1 className="font-extrabold text-4xl font-mono mb-3"> Personal info </h1>
                        <p className="text-neutral-coolgray text-xl">
                            Please provide your name, email<br /> address and phone number.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="my-6">
                            <label className="flex flex-col">
                                <p> Name {error && name.trim() === '' && <span className="text-red-500 ml-20 ">This field is required </span>} </p>
                                <input type="text" name="userName"
                                    value={name}
                                    onChange={handleNameChange}
                                    className={`w-full h-12 mb-6 border-2 border-solid  cursor-pointer rounded-lg focus:border-primary-pastelblue outline-none  ${error && name.trim() === '' ? 'border-red-500' : ''}`} />
                            </label>
                            <label className="flex flex-col">
                                <p> Email Address  {error && email.trim() === '' && <span className="text-red-500 ml-7">This field is required </span>} </p>
                                <input type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    name="userMail" className={`w-full h-12 mb-6  border-2 border-solid  ${error && email.trim() === '' ? 'border-red-500' : ''} cursor-pointer rounded-lg focus:border-primary-pastelblue outline-none `} />
                            </label>
                            <label className="flex flex-col">
                                <p> Phone Number  {error && phoneNumber.trim() === '' && <span className="text-red-500 ml-7">This field is required </span>} </p>
                                <input
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    type="tel" name="userTel" className={`w-full h-12 border-2 border-solid  ${error && phoneNumber.trim() === '' ? 'border-red-500' : ''} cursor-pointer rounded-lg  focus:border-primary-pastelblue outline-none `} />
                            </label>
                            <button className="mx-40 bg-primary-marineblue text-white rounded-md w-32 h-9 my-64">
                                Next Step
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}