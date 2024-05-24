import React from "react";
import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatterBox</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter user name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <GenderCheck />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account
          </a>

          <div>
            <button className="btn btn-info btn-block btn-sm mt-2  max-w-xs">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//! 1st code
// import React from "react";
// import GenderCheck from "./GenderCheck";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500"> ChatterBox</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Fullname</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter full name"
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label ">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter user name"
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label ">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label ">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//           </div>
//           <GenderCheck />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
//           >
//             Already have an account
//           </a>

//           <div>
//             <button className="btn btn-info btn-block btn-sm mt-2  max-w-xs">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
