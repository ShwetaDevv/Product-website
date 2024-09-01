import { useState, useEffect } from 'react';

const Products = () => {
  // Retrieve and parse the token from localStorage
  const storedUser = localStorage.getItem("user");
  const authtoken = storedUser ? JSON.parse(storedUser).token : null;
  
  // State variables
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8;

  // Fetch product and user data from API
  useEffect(() => {
    const fetchProductsAndUser = async () => {
      if (!authtoken) {
        window.location.href = '/login';
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      try {
        // Fetch user data
        const userResponse = await fetch('https://intern-task-api.bravo68web.workers.dev/auth/login', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authtoken}`,
            'Content-Type': 'application/json'
          }
        });

        // if (!userResponse.ok) {
        //   throw new Error(`User fetch error: ${userResponse.statusText}`);
        // }

        const userData = await userResponse.json();
        setUser(userData.user);

        // Fetch product data
        const productResponse = await fetch('https://intern-task-api.bravo68web.workers.dev/api/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authtoken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!productResponse.ok) {
          throw new Error(`Product fetch error: ${productResponse.statusText}`);
        }

        const productData = await productResponse.json();

        if (Array.isArray(productData)) {
          setProducts(productData);
        } else {
          throw new Error('Invalid product data format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndUser();
  }, [authtoken]);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Event handlers
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="min-h-screen bg-gray-400 p-8">
      <div className="flex justify-center items-center">
        <p className="text-center text-xl m-2 font-bold">Logged in as: {user ? user.sub : 'Loading...'}</p>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="block mb-4 p-2 rounded w-full border-2 border-black"
      />
      {loading ? (
        <p className="text-center text-lg font-semibold mt-8">Loading...</p>
      ) : error ? (
        <p className="text-center text-lg font-semibold mt-8 text-red-500">Error: {error}</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-lg font-semibold mt-8">No data found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map(product => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-2xl border-2 border-black relative">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2 rounded" />
              <p className="text-lg font-bold text-red-500 absolute bottom-10 right-4">{`$${product.price.toFixed(2)}`}</p>
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-600' : 'bg-white text-blue-500'}`}
        >
          &lt; Prev
        </button>

        {pageNumbers.map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            className={`px-3 py-1 border rounded mx-1 ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-600' : 'bg-white text-blue-500'}`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
