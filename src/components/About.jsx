const features = [
    // { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    // { name: 'Material', description: 'Used high Quality of Fabaric ' },
    // { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    // { name: 'Finish', description: 'Great finishing from great Designer' },
    // { name: 'Includes', description: 'By shoping more then 3 Times you Get a 1 T-Shirt from us FREE' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function About() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid  grid-cols-1 gap-y-16 px-4 py-32 sm:px-6 sm:py-4 text-2xl">
          <div>
            <h2 className="text-center text-4xl font-serif tracking-tight text-gray-900 sm:text-5xl">
              ABOUT US
            </h2>
            <p className="mt-4 text-gray-500 font-serif">
              "At Moreshware Advertisements, we specialize in creating beautiful and personalized designs, along with high-quality printing services, to make your special moments unforgettable.
              Whether it's a birthday celebration, a wedding, or the grand opening of your shop, our custom-made designs are crafted with care and printed with precision to reflect your unique style and vision.
              With a passion for creativity, attention to detail, and top-notch printing, we bring your ideas to life in every project we undertake.
              Let us help you celebrate your milestones with designs and prints that truly stand out."
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  