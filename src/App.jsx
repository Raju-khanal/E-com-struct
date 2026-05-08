import Router from "./routes/Router"
import ProductList from "./products/ProductList"
function App() {
  return (
    <div className="w-full min-h-screen">

      {/* Navbar */}
      <Router />

      {/* Page content */}
      <div className="w-full">
        <ProductList />
      </div>

    </div>
  );
}

export default App;