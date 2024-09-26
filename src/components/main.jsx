import Image from "next/image";
import Link from "next/link";



export default function Main() {
    return (
      <section class="text-gray-600 body-font bg-black">
        <div class="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 class="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Add Your Favourite Library
          </h1>
          <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
            This is react library directory provides useful library to build website with ease.
            <br />
            with Next.js and styled with Tailwind CSS
          </h2>
          <div className="ml-6 text-center">
            <a
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">View All Library</span>
              </div>
            </a>
            <Link
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              href="/add-package"
            >
              <div className="flex text-lg">
                <span className="justify-center">Add Libraries</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
            alt="Placeholder Image"
            src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Most Trending Libraries
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Here is our collection of free to use libraries.
        </p>
          <div className="flex flex-col gap-12 pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          
          <Link class="ktq4 flex flex-row gap-4"
          href='/details/66f3221fd65e67802da63c55'>

            <Image
            src = '/react-router.jpg'
            width={150}
            height={50}
            />
            <div>
            <h3 class=" font-semibold text-3xl text-white">
            React Router Dom
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Enables dynamic routing and navigation in React apps, allowing single-page applications to have a smooth experience without refreshing the page.
            </p>
            </div>
          </Link>
          <Link class="ktq4 flex flex-row gap-4"
          href='/details/66f32d49be307496bbc1590f'>

            <Image
            src = '/farmer.jpg'
            width={150}
            height={50}
            />
            <div>
            <h3 class=" font-semibold text-3xl text-white">
            Framer Motion
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            A powerful animation library offering simple yet expressive APIs for building complex animations and transitions. It supports gestures, drag, hover, and scroll animations.
            </p>
            </div>
          </Link>
          
          <Link class="ktq4 flex flex-row gap-4"
          href='/details/66f32823be307496bbc158fb'>

            <Image
            src = '/axios.jpg'
            width={150}
            height={50}
            />
            <div>
            <h3 class=" font-semibold text-3xl text-white">
            Axios
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            A promise-based HTTP client for making API requests from React apps. Axios is widely used for its ability to handle request and response transformations, interceptors, and timeouts.
            </p>
            </div>
          </Link>
          
        
        </div>
      
        <section class="relative pb-24">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div class="py-24 md:py-36">
              <h1 class="mb-5 text-6xl font-bold text-white">
                Subscribe to our newsletter
              </h1>
              <h1 class="mb-9 text-2xl font-semibold text-gray-200">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autocomplete="email"
                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <a
                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span class="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }