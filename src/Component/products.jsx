import { useState } from 'react';

const Products = () => {

  const user ={
    "user": {
      "sub": "hi@b68.dev",
      "exp": 1722387952395,
      "iat": 1722384352
    }
  }
  const productData = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "price": 9.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "price": 19.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "price": 14.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "price": 12.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "price": 8.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "price": 49.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "price": 129.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "price": 89.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "price": 69.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "price": 79.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
    },
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "price": 1899.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "price": 2499.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "price": 299.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "price": 499.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "price": 799.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
    },
    {
      "id": 16,
      "title": "Apple",
      "price": 1.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "price": 12.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "price": 8.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "price": 9.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png"
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "price": 4.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
    },
    {
      "id": 21,
      "title": "Cucumber",
      "price": 1.49,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
    },
    {
      "id": 22,
      "title": "Dog Food",
      "price": 10.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png"
    },
    {
      "id": 23,
      "title": "Eggs",
      "price": 2.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png"
    },
    {
      "id": 24,
      "title": "Fish Steak",
      "price": 14.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png"
    },
    {
      "id": 25,
      "title": "Green Bell Pepper",
      "price": 1.29,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png"
    },
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png"
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png"
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49,
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png"
    }
  ]

  // State for pagination, search query, and filtered products
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8;

  // Filter products based on search query
  const filteredProducts = productData.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Determine the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page whenever search query changes
  };

  // Go to the previous page
  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Go to the next page
  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  // Go to a specific page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="min-h-screen bg-gray-400 p-8">
      <div className="flex justify-center items-center">
      {user && <p className="text-center text-xl m-2 font-bold">Logged in as: {user.user.sub}</p>}
    </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="block mb-4 p-2  rounded w-full border-2 border-black"
      />
      {filteredProducts.length === 0 ?(
        <p className="text-center text-lg font-semibold mt-8">No data found</p>
      ):(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        {currentProducts.map(product => (
          <div key={product.id} className="bg-white p-4  shadow-md rounded-2xl border-2 border-black">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2 rounded "/>
            <p className="text-lg font-bold end-12 text-red-500 transform py-8">{`$${product.price.toFixed(2)}`}</p>
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
