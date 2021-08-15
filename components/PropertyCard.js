const PropertyCard = ({data}) => {

const {properties} = data;
const stars = [1,2,3,4,5];

return (
<div className="overflow-hidden">
    <div className=" relative pb-5/6">
        {/* <div className="h-48 bg-cover" style={{backgroundImage: `url(${properties.imageUrl})`}} alt={properties.imageAlt}></div> */}
    <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={properties.imageUrl} alt={properties.imageAlt} />
    </div>
    <div className="relative px-4 -mt-16">
        <div className=" bg-white p-6 rounded-lg shadow-xl">
        <div className="flex items-baseline">
            <span className="bg-yellow-100 text-yellow-500 text-xs px-2 rounded-full inline-block uppercase font-semibold tracking-wide">New</span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">{properties.beds} beds &bull;
                {properties.baths} bathrooms</div>
        </div>
        <h4 className="mt-1 font-semibold text-lg leading-tight truncate">{properties.title}</h4>
        <div className="mt-1">{properties.formattedPrice} <span className="text-gray-600 text-sm"> / week</span></div>
        <div className="mt-2">
            <div className="flex items-center">
                {stars.map((star,index) => (
                <div key={index}>
                    <svg className={ index < properties.rating?"svg text-yellow-400":"svg text-gray-300"}
                        viewBox="0 -10 511.987 511" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M510.652 185.902a27.158 27.158 0 00-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 001.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0010.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 007.98-28.927zm0 0" />
                    </svg>
                </div>
                ))}
                <div className="ml-2 text-sm text-gray-600">{properties.reviewCount} reviews</div>
            </div>
        </div>
    </div>
    </div>
    
</div>
);
}

export default PropertyCard;