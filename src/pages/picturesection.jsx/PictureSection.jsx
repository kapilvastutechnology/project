
export default function PictureSection() {
  return (
    <div className="grid grid-cols-[minmax(300px,2fr)_minmax(100px,1fr)] gap-3 bg-gray-500">
      <div>
        <div className="bg-white w-[850px]  m-4 py-4">
            <div className="text-center py-8 font-bold">
            <h1 className=" text-3xl" >TITLE HEADING</h1>
            <h1 className="mt-3 text-2xl">Title description, <span className="text-gray-400 text-2xl">May 2 2016</span></h1>
            </div>


            <div className="w-full bg-gray-100 flex flex-col items-center p-4">
            <img
                src="https://www.w3schools.com/w3images/girl_hat.jpg"
                alt="Jane"
                className="w-[800px] object-cover mb-4"
            />

            <p className="max-w-[800px] text-gray-800">
                <strong>More hats!</strong>
                " I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
            </p>
            </div>




        </div>
      </div>


      <div>box2</div>
      <div>box3</div>
      <div>box4</div>
      <div>box5</div>
      <div>box6</div>
      <div>box7</div>
      <div>box8</div>
    </div>
  )
}
