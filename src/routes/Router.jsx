import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home"
import Services from "../pages/Services";
import Layout from "../Layout/Layout"

export default function Router() {
    return (
        <>

            <Routes >
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </Route>

            </Routes>

        </>
    )
}
