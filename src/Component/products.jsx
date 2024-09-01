import { useState, useEffect } from 'react';

const Products = () => {
  // Retrieve and parse the token from localStorage
  const storedUser = localStorage.getItem("user");
  const authtoken = storedUser ? JSON.parse(storedUser).token : null;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8;

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      if (!authtoken) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://intern-task-api.bravo68web.workers.dev/api/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authtoken}`, // Adjust if `Token` is the correct prefix
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Unauthorized: Check your API token or credentials.');
          } else {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [authtoken]); // Dependency array includes authtoken

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
        <p className="text-center text-xl m-2 font-bold">Logged in as: hi@b68.dev</p>
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
