function ProductDisplay({ data }) {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">

            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-4 flex flex-col"
                >

                    <div className="h-40 flex items-center justify-center">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full object-contain"
                        />
                    </div>

                    <h2 className="text-sm font-semibold line-clamp-2 mt-2">
                        {item.title}
                    </h2>

                    <p className="text-green-600 font-bold">
                        ${item.price}
                    </p>

                </div>
            ))}

        </div>
    );
}

export default ProductDisplay;