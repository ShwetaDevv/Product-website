

function ProductCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://via.placeholder.com/400"
        alt="Product"
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">Product Title</div>
        <p className="text-gray-700 text-base">
          ~
        </p>
        <p className="text-gray-900 text-2xl font-semibold">$99.99</p>
      </div>
    </div>
  );
}

export default ProductCard;
