

// function Flexbox() {
//     return (
//         <div className='relative flex bg-gray-500 gap-1 h-50 '>
//             <div className='absolute h-20 w-20  border border-black bg-red-500 z-10 top-10 left-40 transition-all duration-300 ease-in-out hover:scale-200'>box1</div>
//             <div className='absolute h-20 w-20  border border-black bg-yellow-500 top-10 left-50 z-20 transition-all  duration-300 ease-in-out hover:scale-200'>box2</div>
//             <div className='absolute h-20 w-20 top-10 left-100 bg-white shadow-lg
//             transition-transform duration-300 
//             [transform-style:preserve-3d]
//             hover:[transform:rotateY(180deg)] '>box3</div>

//         </div>
//     )
// }

// export default Flexbox;
// import React from 'react'

// function Flexbox() {
//     return (
//         <div>
//             <div class="w-64 h-40 perspective-1000">
//                 <div class="relative w-full h-full transition-transform duration-700
//               [transform-style:preserve-3d]
//               hover:[transform:rotateY(180deg)]">

//                     {/* <!-- Front --> */}
//                     <div class="absolute inset-0 bg-blue-500 text-white
//                 flex items-center justify-center
//                 [backface-visibility:hidden]">
//                         Front
//                     </div>

//                     {/* <!-- Back --> */}
//                     <div class="absolute inset-0 bg-green-500 text-white
//                 flex items-center justify-center
//                 [transform:rotateY(180deg)]
//                 [backface-visibility:hidden]">
//                         Back
//                     </div>

//                 </div>
//             </div>
//         </div >



//     )
// }

// export default Flexbox

// import { useState } from "react";

// function Flexbox() {
//     const [open, setOpen] = useState(false);

//     return (
//         <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded
//                  transition-transform duration-300"
//         >
//             <span
//                 className={`transition-transform duration-300
//                     ${open ? "rotate-180" : "rotate-0"}`}
//             >
//                 ⬇️
//             </span>
//             Toggle
//         </button>
//     );
// }

// export default Flexbox;
// import React from "react";

// function Flexbox() {
//     return (
//         <div className="overflow-clip w-full bg-gray-200 p-10">
//             <div className="flex gap-6 animate-[slide_6s_linear_infinite]">

//                 <div className="h-32 w-40 bg-red-500 text-white flex ">
//                     Card 1
//                 </div>

//                 <div className="h-32 w-40 bg-yellow-400 flex ">
//                     Card 2
//                 </div>

//                 <div className="h-32 w-40 bg-blue-500 text-white flex items-center justify-center">
//                     Card 3
//                 </div>

//                 <div className="h-32 w-40 bg-green-500 text-white flex items-center justify-center">
//                     Card 4
//                 </div>

//             </div>

//             {/* Tailwind arbitrary keyframes */}
//             <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(400px);
//           }
//         }
//       `}</style>
//         </div>
//     );
// }

// export default Flexbox;

import React from 'react'

function Practice() {
  return (
    <div>
      
    </div>
  )
}

export default Practice
