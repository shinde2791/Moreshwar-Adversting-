import { Design1 } from "../Images/export"
import { Design2 } from "../Images/export"
import { Design3 } from "../Images/export"
import { Design4 } from "../Images/export"
import { Design5 } from "../Images/export"
import { Design6 } from "../Images/export"
import { Design7 } from "../Images/export"
import { Design8 } from "../Images/export"
import { Design9 } from "../Images/export"
import { Design10 } from "../Images/export"
import { Design11 } from "../Images/export"
import { Design12 } from "../Images/export"
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: `${Design1}`,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Long Sleeve',
    href: '#',
    imageSrc: `${Design2}`,
    imageAlt: "Front of men's Classic Long Sleeve in white.",
    price: '$45',
    color: 'White',
  },
  {
    id: 3,
    name: 'Vintage Jacket',
    href: '#',
    imageSrc: `${Design3}`,
    imageAlt: "Front of men's Vintage Jacket in blue.",
    price: '$85',
    color: 'Blue',
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc: `${Design4}`,
    imageAlt: "Front of men's Slim Fit Jeans in dark blue.",
    price: '$65',
    color: 'Dark Blue',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: `${Design5}`,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Long Sleeve',
    href: '#',
    imageSrc: `${Design6}`,
    imageAlt: "Front of men's Classic Long Sleeve in white.",
    price: '$45',
    color: 'White',
  },
  {
    id: 3,
    name: 'Vintage Jacket',
    href: '#',
    imageSrc:  `${Design7}`,
    imageAlt: "Front of men's Vintage Jacket in blue.",
    price: '$85',
    color: 'Blue',
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc: `${Design12}`,
    imageAlt: "Front of men's Slim Fit Jeans in dark blue.",
    price: '$65',
    color: 'Dark Blue',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: `${Design8}`,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Long Sleeve',
    href: '#',
    imageSrc:`${Design9}`,
    imageAlt: "Front of men's Classic Long Sleeve in white.",
    price: '$45',
    color: 'White',
  },
  {
    id: 3,
    name: 'Vintage Jacket',
    href: '#',
    imageSrc: `${Design10}`,
    imageAlt: "Front of men's Vintage Jacket in blue.",
    price: '$85',
    color: 'Blue',
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc:`${Design11}`,
    imageAlt: "Front of men's Slim Fit Jeans in dark blue.",
    price: '$65',
    color: 'Dark Blue',
  },


  // More products...
]

export default function ownstyle() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-contain lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
