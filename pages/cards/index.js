import PropertyCard from "../../components/PropertyCard";
import Navbar from "../../components/Navbar";

const Cards=()=> {

    const data= {
        properties: {
            imageUrl:
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                imageAlt: "white and grey concrete building near swimming pool under clear sky during daytime",
                beds: 3,
                baths: 2,
                title: "Modern home in city center of the greatest city : Los Angeles",
                priceInCents: 190000,
                formattedPrice: "$1,900.00",
                reviewCount: 34,
                rating: 4,
        }
    }

    return (
        <div className="text-gray-900">
            <Navbar></Navbar>
            <div className="bg-gray-200 min-h-screen p-8 max-w-7xl m-auto gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
                <PropertyCard data={data}></PropertyCard>
                <PropertyCard data={data}></PropertyCard>
                <PropertyCard data={data}></PropertyCard>
                <PropertyCard data={data}></PropertyCard>
            </div>
        </div>
    );
}

export default Cards;