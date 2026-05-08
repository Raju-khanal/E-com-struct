import { useEffect } from "react";

function ProductFetch({ setData }) {

    useEffect(() => {
        Fetching();
    }, []);

    async function Fetching() {
        try {
            console.log("Fetching started");

            let url = "https://fakestoreapi.com/products";
            let res = await fetch(url);

            console.log("Response:", res);

            let dat = await res.json();

            console.log("Data:", dat);

            setData(dat);

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    return null;
}

export default ProductFetch;