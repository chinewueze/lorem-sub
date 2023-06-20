import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
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
export default function AddOnsYr() {
    const navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const handleProductSelect = (productId) => {
        const isSelected = selectedProducts.includes(productId);
        let updatedProducts;
        if (isSelected) {
            updatedProducts = selectedProducts.filter((id) => id !== productId);
        } else {
            updatedProducts = [...selectedProducts, productId];
        }
        setSelectedProducts(updatedProducts);
    };
    const products = [
        { id: 1, name: 'Online service', price: 1, description: 'Access to multiplayer games' },
        { id: 2, name: 'Larger storage', price: 2, description: 'Extra 1 TB of cloud save' },
        { id: 3, name: 'Customizable profile', price: 2, description: 'Custom theme on your profile' },
    ].map((product) => ({
        ...product,
        selected: false,
    }));
    useEffect(() => {
        const storedSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
        if (storedSelectedProducts) {
            setSelectedProducts(storedSelectedProducts);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    }, [selectedProducts]);
    const handleNextClick = () => {
        if (selectedProducts.length === 0) {
            alert('Please select at least one add-on.');
        } else {
            localStorage.setItem('selectedProducts', JSON.stringify(products.filter(product => selectedProducts.includes(product.id))));
            navigate('/summary-mn');
        }
    };
    return (
        <div>
            <Helmet>
                <title> pick add-ons </title>
            </Helmet>
            <div className="lg:flex sm:hidden">
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
                        <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium `}> <span className="mx-3 my-2 text-primary-marineblue"> 3 </span> </div>
                        <div><h3>STEP 3</h3> <h1 className="font-bold text-lg"> ADD-ONS </h1></div>
                    </div>
                    <div className={`flex mx-12 mb-9 `}>
                        <div className={`border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3 my-2 text-primary-marineblue"> 4 </span> </div>
                        <div><h3>STEP 4 </h3> <h1 className="font-bold text-lg"> SUMMARY </h1></div>
                    </div>
                </div>
                <div className='mx-auto my-14 py-14 w-3/5 '>
                    <h1 className='font-bold text-3xl text-primary-marineblue mx-12 mb-3.5'> Pick add-ons</h1>
                    <h2 className='font-bold text-neutral-coolgray mx-12 mb-11'> Add-ons help enhance your gaming experience </h2>
                    <div >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className=
                                {`flex border-solid border-2 rounded-lg w-auto h-28 p-7 mx-14 my-5 hover:border-primary-pastelblue relative cursor-pointer ${selectedProducts.includes(product.id) ? ' bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
                            >
                                <input
                                    type="checkbox" className="w-7"
                                    checked={selectedProducts.includes(product.id)}
                                    onChange={() => handleProductSelect(product.id)}
                                    onClick={() => handleProductSelect(product.id)}
                                />
                                <div className="mx-5 my-2">
                                    <h1 className='font-bold text-xl text-primary-marineblue '> {product.name} </h1>
                                    <h2 className='text-neutral-coolgray font-semibold'> {product.description} </h2>
                                </div>
                                <h3 className="absolute right-4 my-5 text-primary-purplishblue font-semibold"> +${product.price}/mo </h3>
                            </div>
                        ))}
                    </div>
                    <div className=" relative mt-80" >
                        <Link to="/plan" className="font-semibold text-xl text-neutral-coolgray ml-7">
                            Go Back
                        </Link>
                        <button
                            onClick={handleNextClick}
                            className={`bg-primary-marineblue text-white p-2.5 rounded-lg absolute right-5`}
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
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
                            <div className={`bg-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 3 </span> </div>
                            <div className={` border-2 border-solid border-primary-lightblue  w-12 h-12 rounded-full p-1 py-1.5 mr-4 text-2xl font-medium`}> <span className="mx-3  text-primary-marineblue"> 4 </span> </div>
                        </div>
                    </div>
                    <div className=" rounded-lg p-4 mx-11 my-24 bg-white border-2 border-solid">
                        <h1 className="font-extrabold text-4xl font-mono mb-3"> Pick add-ons </h1>
                        <p className="text-neutral-coolgray text-xl">
                            Add-ons help enhance your gaming experience
                        </p>
                        <div >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className=
                                    {`flex border-solid border-2 rounded-lg w-full h-28 p-2.5 mx-auto my-5 hover:border-primary-pastelblue relative cursor-pointer ${selectedProducts.includes(product.id) ? ' bg-primary-pastelblue opacity-80 border-4 border-solid border-primary-lightblue' : ''}`}
                                >
                                    <input
                                        type="checkbox" className="w-7"
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={() => handleProductSelect(product.id)}
                                        onClick={() => handleProductSelect(product.id)}
                                    />
                                    <div className="mx-5 my-2">
                                        <h1 className='font-bold text-xl text-primary-marineblue '> {product.name} </h1>
                                        <h2 className='text-neutral-coolgray font-semibold'> {product.description} </h2>
                                    </div>
                                    <h3 className="absolute right-4 bottom-1 my-5 text-primary-purplishblue font-semibold ml-5"> +${product.price}/mo </h3>
                                </div>
                            ))}
                            <div className=" relative mt-36 mb-9" >
                                <Link to="/plan" className="font-semibold text-xl text-neutral-coolgray mt-5">
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
        </div>
    )
}