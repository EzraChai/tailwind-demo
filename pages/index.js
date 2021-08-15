import Head from 'next/head'

const Home = () => {
return (
<>
  <Head>
    <title>Home</title>
  </Head>
  <div className="bg-gray-300">
    <div className="bg-gray-100 flex">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-2/5 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <div className="flex items-center">
            <img className="flex items-center h-16" src="https://i.ibb.co/tQxBCnd/47d3130237592a4b0622802b500cd082.png"
              alt="logo" />
            <h1 className="text-3xl font-sans font-bold tracking-wide text-indigo-500">Workation</h1>
          </div>
          <div>
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-4 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="https://i.ibb.co/vsXT4B6/post-pandemic-vacation-jpg-lll-LViv-B.jpg" alt="vacation" />
            <h1 className="mt-5 text-xl font-extrabold text-gray-900 leading-tight sm:mt-8 sm:text-3xl xl:text-4xl">You
              can work from anywhere. <br className="hidden sm:inline" /><span className="text-indigo-500">Take
                advantage of it.</span> </h1>
            <p className="mt-2 text-gray-600 text-base sm:mt-4 sm:text-xl">Workations helps you find work-friendly
              rentals in beautiful locations so you can enjoy some nice weather even you're not on vacation.</p>
            <div className="mt-4 sm:mt-5">
              <a href="#" className="btn bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white">Book your
                escape</a>
              <a href="#" className="btn mt-2 ml-3 bg-gray-300 hover:bg-gray-200 active:bg-gray-400 text-grey-800">Learn
                more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-3/5 lg:relative">
        <img
          className="absolute mt-auto ml-auto mr-auto mb-auto inset-0 shadow-lg rounded-lg lg:max-w-full object-cover object-center"
          src="https://i.ibb.co/vsXT4B6/post-pandemic-vacation-jpg-lll-LViv-B.jpg" alt="vacation" />
      </div>
    </div>
  </div>
</>
)
}

export default Home;