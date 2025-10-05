import React from 'react'

const Products = () => {
    const products = [
        {
            id: 1,
            
            description: "Latest collection",
            image: "https://media.istockphoto.com/id/1212710606/photo/young-handsome-man-with-beard-wearing-casual-t-shirt-standing-over-white-background-looking.jpg?s=612x612&w=0&k=20&c=TqO46wTlF5ZA3lFpIfNq2br-ruuKpdZXSegCkHNoqMo="
        },
        {
            id: 2,
            
            description: "Trendy styles",
            image: "https://media.istockphoto.com/id/1804028024/photo/portrait-of-happy-casual-handsome-man-smiling-mid-adult-guy-isolated-on-white-background-copy.jpg?s=612x612&w=0&k=20&c=xhjQjf2iUR1yd4hs60sa798vUzX0ZdmiLFarg876Bb8="
        },
        {
            id: 3,
            
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/1142213111/photo/front-of-long-sleeve-sweatshirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=8YJ--Tv22JmK8tCi7Jh64wsMAMZ2eivB4cjtQo4W__c="
        },
        {
            id: 4,
            
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/539817006/photo/fashion-brown-shoes.jpg?s=612x612&w=0&k=20&c=dvH9h3k5_i3Blp6xdgZBn2AoaUQ6aNIcKm2Nd5iUSkk="
        },
        {
            id: 5,
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/1362495225/photo/mens-long-sleeve-shirt.jpg?s=612x612&w=0&k=20&c=FVfFGMm1oBKJtQKi6ItmTuZvpT875oNl0O60SUp5lcg="
        },
        {
            id: 6,
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/2208965620/photo/new-mans-shirt-isolated-over-a-white-background.jpg?s=612x612&w=0&k=20&c=zlxyX4kY0QxxCl7_HMGZyOubOvRJ--HWeWYWZgpcn24="
        },
        {
            id: 7,
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/2196713407/photo/denim-shirt-with-faded-texture-and-snap-buttons.jpg?s=612x612&w=0&k=20&c=15_EpyuBO4waNqqN772kVUkdXz_oLYBcYUyTLZiDmZA="
        },
        {
            id: 8,
            description: "Premium beauty",
            image: "https://media.istockphoto.com/id/2208965615/photo/new-mans-shirt-isolated-over-a-white-background.jpg?s=612x612&w=0&k=20&c=kCj7EeQP20rcDakN6GP-_tekXkTy1pdgkPWJHUXYljQ="
        }
    ]

        const product = [
        {
            id: 1,
            
            description: "Latest collection",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/d/r/xl-kurta-91012-a-jagra-original-imaheehmbxydgm4h.jpeg?q=70"
        },
        {
            id: 2,
            
            description: "Trendy styles",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/8/8/l-shortkr1359b-surhi-original-imaha6brduagzywg.jpeg?q=70"
        },
        {
            id: 3,
            
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/s/j/j/5-d-516-onion-doctor-extra-soft-onion-original-imahg2k4krnjhx2n.jpeg?q=70"
        },
        {
            id: 4,
            
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/3/2/s-kt-um-350-38-get-glamr-original-imah8g9v2yknfgdx.jpeg?q=70"
        },
        {
            id: 5,
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/u/7/v/xs-drspinkkinnu-stylum-original-imah5f7v8utzkqrh.jpeg?q=70"
        },
        {
            id: 6,
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/z/q/3xl-msku2022nb-manisukmi-fashion-original-imahdakswnkahtrg.jpeg?q=70"
        },
        {
            id: 7,
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/n/3/xxl-mcaw21d06-35-252-miss-chase-original-imah2v4sawgz6m4z.jpeg?q=70"
        },
        {
            id: 8,
            description: "Premium beauty",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/o/v/m/xs-aa-0158-aayu-original-imahdvh4tupw79nj.jpeg?q=70"
        }
    ]
    return (
        <div className='w-full bg-[#FAFAFA] py-5 px-10'>
            <h1 id='men' className='text-4xl font-[cursive] mt-5 text-center'>Men's</h1><hr className='text-red-300 w-28 mt-2 m-auto mb-10' />

            <div className='mt-5 flex flex-wrap gap-6 justify-center text-center'>
                {products.map((item) => (
                    <div key={item.id} className='w-full md:w-62 rounded-lg overflow-hidden shadow-md'>
                        <img className='w-full h-82 object-cover' src={item.image} alt={item.title} />
                        <div className='p-4'>
                            <p className='text-gray-700 mt-2'>{item.description}</p>
                            <div>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-half-s-fill"></i>

                            </div>
                            <h1 className='mt-2 font-semibold'>₹299</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-5'>
                <h1 id='women' className='text-4xl font-[cursive] text-center mt-10'>Women's</h1><hr className='text-red-300 w-40 mt-2 mb-10 m-auto' />
                            <div className='mt-5 flex flex-wrap gap-6 justify-center text-center'>
                {product.map((item) => (
                    <div key={item.id} className='w-full md:w-62 rounded-lg overflow-hidden shadow-md'>
                        <img className='w-full h-82 object-cover' src={item.image} alt={item.title} />
                        <div className='p-4'>
                            <p className='text-gray-700 mt-2'>{item.description}</p>
                            <div>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-s-fill"></i>
                                <i className="text-[#E3C01C] ri-star-half-s-fill"></i>

                            </div>
                            <h1 className='mt-2 font-semibold'>$299</h1>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
        
    )
}

export default Products
