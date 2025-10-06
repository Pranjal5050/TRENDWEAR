import React from 'react'

const TrendingProduct = () => {
    return (
        <div className=''>
            <div className='w-full py-2 bg-[#FAFAFA] flex flex-wrap'>
                <div className='flex gap-2 p-10'>
                    <i className="ri-truck-fill text-4xl text-[#CA1515]"></i>
                    <div>
                        <h1 className='font-bold text-1xl'>Free Shipping</h1>
                        <p className='font-light'>For all order over $399</p>
                    </div>
                </div>
                <div className='flex gap-2 p-10'>
                    <i className="ri-wallet-3-fill text-4xl text-[#CA1515]"></i>
                    <div>
                        <h1 className='font-bold text-1xl'>Money Back Guarantee</h1>
                        <p className='font-light'>If good have Problems</p>
                    </div>
                </div>
                <div className='flex gap-2 p-10'>
                    <i className="ri-customer-service-2-line text-4xl text-[#CA1515]"></i>
                    <div>
                        <h1 className='font-bold text-1xl'>Online Support 24/7</h1>
                        <p className='font-light'>Dedicated support</p>
                    </div>
                </div>
                <div className='flex gap-2 p-10'>
                    <i className="ri-secure-payment-line text-4xl text-[#CA1515]"></i>
                    <div>
                        <h1 className='font-bold text-1xl'>Payment Secure</h1>
                        <p className='font-light'>100% secure payment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProduct
