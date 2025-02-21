import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline"

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (
    <div className="w-56 max-w-sm p-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    {/* Product Card */}
    <article>
      {/* Product Image */}
      <figure className="relative h-28 w-32 mx-auto">
        <img
          src={img}
          alt={title}
          className="w-32 h-full object-contain max-h-24 mt-1"
          loading="lazy"
        />
      </figure>

      {/* Product Details */}
      <div className="p-1 space-y-2 flex flex-col justify-end">
        {/* Product Title */}
        <h3 className="text-md font-semibold text-gray-900">{title}</h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 text-amber-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{reviews}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900">{newPrice}</span>
            <del className="text-sm text-gray-500">{prevPrice}</del>
            <span className="text-sm font-medium text-lime-600">33% off</span>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-yellow-800 hover:bg-zinc-600 text-white px-2 py-1 rounded-full active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ShoppingBagIcon className="w-4 h-4 stroke-2" />
          </button>
        </div>
      </div>
    </article>
  </div>
  )
}

export default Card