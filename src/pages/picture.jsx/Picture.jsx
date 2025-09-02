
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
 } from "@/components/ui/alert-dialog"
export default function Picture() {
    
  return (
    <div>
      <div className="max-w-full h-[61vw] max-sm:h-[80vw]  bg-[url('https://www.w3schools.com/w3images/jane.jpg')] bg-cover bg-no-repeat flex items-center">

        <div>
            <h1 className="text-white p-3 px-4 text-2xl">Jan's</h1>
            <h1 className=" text-white p-3 px-4 text-6xl max-sm:text-lg max-md:text-4xl">FAISHON BLOG</h1>

            <div className="mt-3 px-4">
                 <AlertDialog>
                 <AlertDialogTrigger className="text-black p-5 bg-gray-500 hover:bg-white">SUBSCRIBE</AlertDialogTrigger>
                 <AlertDialogContent>
                     <AlertDialogHeader>
                     <AlertDialogTitle>Subscribe</AlertDialogTitle>
                     <AlertDialogDescription>Join my mailing list to receive updates on the latest blog posts and other things.</AlertDialogDescription>
                     <AlertDialogDescription>
                         <input className="w-full border-2 border-gray-400 pl-3 text-gray-900" type="text"  placeholder="Enter E-mail"/>
                     </AlertDialogDescription>
                     </AlertDialogHeader>
                     <AlertDialogFooter>
                     <AlertDialogAction className="w-full bg-red-600 hover:bg-gray-500 hover:text-black" >Subscribe</AlertDialogAction>
                     </AlertDialogFooter>
                 </AlertDialogContent>
                 </AlertDialog>
             </div>
            </div>

      </div>

      

    </div>

  )
}

