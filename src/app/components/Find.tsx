
import Image from "next/image";

export default function Find() {
  return (
    <section className="relative mx-20">
  
     

       {/* Header */}
       <header className="text-center py-10 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 shadow-md rounded-md ">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Find Exactly What You are Looking For</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our range of modern, timeless designs and discover the pieces that will transform your home.
        </p>
      </header>

      <div className="flex justify-center space-x-4 text-sm text-gray-600 py-6 bg-white shadow">
        <button
          className="px-6 py-2 rounded-lg font-medium text-white"
          style={{ backgroundColor: '#007580' }}
        >
          All Rooms
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          All Materials
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          All Prices
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          All Colors
        </button>
        <button className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          Sort by Popular
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* velvet sofa Section */}
        <section className="h-[37.5rem]">
          <div className="relative bg-green-700 rounded overflow-hidden h-full rounded-full">
            <Image
              src={'/1.jpg'}
              alt="PlayStation 5"
              layout="fill"
              objectFit="cover"
            />
            <div className="text-white absolute bottom-0 m-8 w-full text-center">
              <h3 className="font-semibold text-2xl mb-4"> Velvet Couch</h3>
              <p className="text-sm mb-4">
                Black and White version of the the sofa coming out on sale.
              </p>
              <p className="font-medium text-base underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </section>

        {/* Collections and Products Section */}
        <section>
          {/* Women’s Collection */}
          <div className="relative bg-green-700 mb-8 rounded-full overflow-hidden h-[17.75rem] ">
            <Image
              src={'/white-foam-chair.png'}
              alt="Women&apso;s Collections"
              layout="fill"
              objectFit="cover"
            />
            <div className="text-white absolute bottom-0 m-8 w-full text-center">
              <h3 className="font-semibold text-2xl mb-4">white fomic Couch</h3>
              <p className="text-sm mb-4">
                Featured best collections that give you another vibe.
              </p>
              <p className="font-medium text-base underline cursor-pointer">Shop Now</p>
            </div>
          </div>

   
          <div className="grid lg:grid-cols-2 gap-8">
            {/* One seater */}
            <div className="relative bg-green-600 rounded-full overflow-hidden h-[17.75rem]">
              <Image
                src={'/Image (1).png'}
                alt="One Seater"
                layout="fill"
                objectFit="cover"
              />
              <div className="text-white absolute bottom-0 m-8 w-full text-center">
                <h3 className="font-semibold text-2xl mb-4">One Seater</h3>
                <p className="text-sm mb-4">Amazon Best One Seater </p>
                <p className="font-medium text-base underline cursor-pointer">Shop Now</p>
              </div>
            </div>

            {/* Chair */}
            <div className="relative bg-green-600 rounded-full overflow-hidden h-[17.75rem]">
              <Image
                src={'/2.jpg'}
                alt="Couch"
                layout="fill"
                objectFit="cover"
              />
              <div className="text-white absolute bottom-0 m-8 w-full text-center">
                <h3 className="font-semibold text-2xl mb-4">Chair</h3>
                <p className="text-sm mb-4">GUCCI INTENSE Chair</p>
                <p className="font-medium text-base underline cursor-pointer">Shop Now</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}