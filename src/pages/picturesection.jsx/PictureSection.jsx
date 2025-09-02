import React from "react";
import { Button } from "@/components/ui/button"
import { FaLongArrowAltUp } from "react-icons/fa";
import { useState } from "react";
// import { AiFillLike } from "react-icons/ai";
// import { RiNumber1 } from "react-icons/ri";


export default function PictureSection() {
    const [isFollowed, setIsFollowed] = React.useState(false)
  return (
    <>
    <div className=" grid grid-cols-[2fr_1fr] grid-flow-row gap-3 max-sm:grid-cols-1 bg-gray-100">
           <div>
            <div className=" p-4 bg-white max-sm:order-1">
             <h1 className="text-2xl font-bold text-center">TITLE HEADING</h1>
            <p className="font-bold text-center">Title description  <span className="text-gray-400" >,May 2, 2016</span></p>

             <div className="flex justify-center mt-4">
             <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="" className="w-[100%]" />
            </div>

              <div className="mt-4 space-y-4">
                  <p><span className="font-bold"> More Hats!  </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deleniti modi natus consequuntur saepe magni earum nulla! Recusandae illo, officiis ducimus maxime quod culpa beatae aut ut assumenda esse est?</p>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>

              <div className="flex justify-between mt-4 ">
                
                <Button
                  variant={isFollowed ? "outline" : "default"}
                  className={isFollowed ? "text-foreground border border-border bg-transparent" : ""}
                  onClick={() => setIsFollowed(!isFollowed)}>
                  {isFollowed ? "Liked" : "Like"}
                </Button>
                 
              </div>
            </div>
           </div>

          <div className="max-sm:order-5 ">
            <div className="w-1fr border-black  m-4">
               <div className="flex justify-center">
             <img src="https://www.w3schools.com/w3images/avatar_girl2.jpg" alt="" className="w-[100%]" />
            </div>
            <div className="bg-black text-white space-y-4">
              <h1 className="mx-4 text-2xl max-sm:text-lg font-bold">My Name</h1>
              <p className="mx-4 font-bold pb-4">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
            </div>
          </div>

          <div>
          <div>
            <div className=" p-4 bg-white max-sm:order-2">
             <h1 className="text-2xl font-bold text-center">TITLE HEADING</h1>
            <p className="font-bold text-center">Title description  <span className="text-gray-400" >,April 23, 2016</span></p>

             <div className="flex justify-center mt-4">
             <img src="https://www.w3schools.com/w3images/man_hat.jpg" alt="" className="w-[100%]" />
            </div>

              <div className="mt-4 space-y-4">
                  <p><span className="font-bold"> Hats!  </span>The trend this summer is hats for men!</p>
                  <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              </div>

              <div className="flex justify-between mt-4 ">
                  <Button
                    variant={isFollowed ? "outline" : "default"}
                    className={isFollowed ? "text-foreground border border-border bg-transparent" : ""}
                    onClick={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? "Liked" : "Like"}
                  </Button>
              </div>
            </div>
           </div>
          </div>


          <div className="max-sm:order-6 m-4">
            <div className="bg-black text-white p-4 text-4xl max-sm:text-lg">
              <h1>Popular Posts</h1>
            </div>
            <div>
              <div></div>
            </div>
          </div>


          <div>
             <div>
            <div className=" p-4 bg-white max-sm:order-3">
             <h1 className="text-2xl font-bold text-center">TITLE HEADING</h1>
            <p className="font-bold text-center">Title description  <span className="text-gray-400" >,April 7, 2016</span></p>

             <div className="flex justify-center mt-4">
             <img src="https://www.w3schools.com/w3images/runway.jpg" alt="" className="w-[100%]" />
            </div>

              <div className="mt-4 space-y-4">
                  <p><span className="font-bold"> Donot Miss!  </span>The runway in New York City this weekend is gonna be legendary!</p>
                  <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              </div>

              <div className="flex justify-between mt-4 ">
                {/* <Button className={`hover:bg-red-600 bg-white border-2 text-black`}> <AiFillLike /> Likes</Button> 
                 <Button className={`hover:bg-green-500`}>Replies</Button> */}

                  <Button
                    variant={isFollowed ? "outline" : "default"}
                    className={isFollowed ? "text-foreground border border-border bg-transparent" : ""}
                    onClick={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? "Liked" : "Like"}
                  </Button>
              </div>


            </div>
           </div>
          </div>


          <div className="max-sm:order-7 m-4 bg-white">
            <div className="bg-black text-white p-4 text-4xl max-sm:text-lg">
              <h1 className="text-3xl max-sm:lg">Adevertise</h1>
            </div>
            <div className=" flex justify-center items-center h-[300px] bg-gray-200 m-4">
                <h1>Your AD Here</h1>
              </div>
          </div>


          <div className="max-sm:order-8 m-4">
             <div className="bg-black text-white p-4 text-4xl max-sm:text-lg">
              <h1 className="text-3xl max-sm:lg">Adevertise</h1>
            </div>
            <div className=" flex justify-around items-center  gap-4 m-4 w-full  flex-wrap">
                <div className="bg-black p-3 text-white" >Fashion</div>
                <div className="bg-gray-200 p-3" >New York</div>
                <div className="bg-gray-200 p-3" >London</div>
                <div className="bg-gray-200 p-3" >Hats</div>
                <div className="bg-gray-200 p-3" >Norway</div>
                <div className="bg-gray-200 p-3" >Sweaters</div>
                <div className="bg-gray-200 p-3" >Ideas</div>
                <div className="bg-gray-200 p-3" >Deals</div>
                <div className="bg-gray-200 p-3" >Accessories</div>
              </div>
          </div>

      </div>

        <div className="bg-gray-500 p-5">
          <Button className="rounded-[xl] p-3 "><FaLongArrowAltUp />To the top</Button>
          <p className="mt-8 text-white">Power by Anuj</p>
        </div>
    
      </>
  )
}
