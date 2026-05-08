import { useState } from "react"
import ProductFetch from "./ProductFetch"
import ProductDisplay from "./ProductDisplay"
function ProductList() {
    const [data, setData] = useState([]);
    return (
        <>
            <ProductFetch setData={setData} />
            <ProductDisplay data={data} />
        </>
    )
}
export default ProductList;