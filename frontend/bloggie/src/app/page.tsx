import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 h-22">
        <div className="shrink-0">
          <br />
        </div>
        <div className="items-center">
          <div className="text-xl font-medium items-center text-black">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Bloggie
          </div>
          <div className="text-xl font-small items-center text-black">
            YOLO! Share your deepest thoughts, bruh!
          </div>
        </div>
      </div>

      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-20">
        <div className="shrink-0">
          <br />
        </div>
        <div className="items-center">
          <div className="text-xl font-small items-center text-black">
            <input
              placeholder="type anything"
              className="text-xl font-small max-w-xl text-black mx-auto w-screen h-20"
            ></input>

            <br />

            <input placeholder="Your name" className="w-1/5"></input>
            <button className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 max-w-l mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-20">
        <div className="shrink-0">
          <br />
        </div>
        <div className="items-center">
          <div className="text-xl font-small items-center text-black">

          </div>
        </div>
      </div>
    </main>
  );
}
