import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Shirt",
      price: 199.99,
      image: "/category/shirt.jpeg",
      category: "Clothing",
      isNew: true,
    },
    {
      id: 2,
      name: "Yellow Vans",
      price: 89.99,
      image: "/category/shoes.jpeg",
      category: "Clothing",
      isNew: true,
    },
    {
      id: 3,
      name: "Sweat Pants",
      price: 129.99,
      image: "/category/pantlon.jpeg",
      category: "Clothing",
      isNew: false,
    },
    {
      id: 4,
      name: "Yellow Cap",
      price: 249.99,
      image: "/category/cap.jpeg",
      category: "Clothing",
      isNew: false,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-amber-500">Products</span>
          </h2>
          <Button variant="link" className="text-amber-500 hover:text-amber-600">
            View All Products
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {product.isNew && (
                <div className="absolute top-2 left-2 z-10 bg-amber-400 text-black text-xs font-bold px-2 py-1 rounded">
                  NEW
                </div>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-fit group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-amber-400">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-amber-400">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${star <= 4 ? "text-amber-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

