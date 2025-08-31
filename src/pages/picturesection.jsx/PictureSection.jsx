
export default function PictureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-200 p-4 ">
      {/* Left Column */}
      <div className="flex justify-center">
        <div className="bg-white w-full max-w-[850px] p-4">
          <div className="text-center py-8 font-bold">
            <h1 className="text-3xl">TITLE HEADING</h1>
            <h1 className="mt-3 text-2xl">
              Title description,{" "}
              <span className="text-gray-400 text-2xl">May 2 2016</span>
            </h1>
          </div>

          <div className="bg-gray-100 flex flex-col items-center p-4">
            <img
              src="https://www.w3schools.com/w3images/girl_hat.jpg"
              alt="Jane"
              className="w-full max-w-[800px] object-cover mb-4"
            />

            <p className="max-w-[800px] text-gray-800">
              <strong>More hats!</strong>
              " I am crazy about hats these days. Some text about this blog
              entry. Fashion fashion and mauris neque quam, fermentum ut nisl
              vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
              placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus
              at. Phasellus sed ultricies mi non congue ullam corper. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
              porta lectus vitae, ultricies congue gravida diam non fringilla."
            </p>

            <p className="mx-2 my-4">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center items-start p-4">
        <img
          src="https://www.w3schools.com/w3images/avatar_girl2.jpg"
          alt="Jane"
          className="w-full max-w-[500px] object-cover"
        />
      </div>

      {/* Optional more boxes below */}
      <div className="bg-red-300 p-4">box3</div>
      <div className="bg-blue-300 p-4">box4</div>
      <div className="bg-green-300 p-4">box5</div>
      <div className="bg-purple-300 p-4">box6</div>
      <div className="bg-yellow-300 p-4">box7</div>
      <div className="bg-pink-300 p-4">box8</div>
    </div>
  );
}







