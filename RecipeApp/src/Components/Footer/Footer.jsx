import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="w-full mt-10 font-poppins flex flex-col border-t border-[#509E2F]">
        <div className="flex justify-between items-center mb-8 ">
          <div className="realtive w-[366px] h-[205px] flex flex-col gap-6">
            {/* Logo and text */}
            <div className=" py-1">
              <img src="src\images\Cookpal 1.png" alt="" />
            </div>
            <div className=" text-[#253D4E] text-base w-[300px] ">
              <p>
                Cookpal is a recipe website with a wide variety of delicious
                recipies, easy-to-use search function. Join our community and
                let's cook together!
              </p>
            </div>
          </div>
          <div className="relative w-[390px] flex gap-20 mt-8">
            {/* Text and Links */}
            <div className="relative p-1">
              {/* Company */}
              <h2 className="font-medium text-xl mb-4 text-[#253D4E]">
                Company
              </h2>
              <ul className="text-linkGray space-y-4 ">
                <li className="hover:underline">
                  <Link>Home</Link>
                </li>
                <li className="hover:underline">
                  <Link>Explore</Link>
                </li>
                <li className="hover:underline">
                  <Link>Team</Link>
                </li>
                <li className="hover:underline">
                  <Link>About us</Link>
                </li>
                <li className="hover:underline">
                  <Link>Activity</Link>
                </li>
              </ul>
            </div>
            <div className="relative p-1">
              {/* Resources */}
              <h2 className="font-medium text-xl mb-4 text-[#253D4E]">
                Resources
              </h2>
              <ul className="text-linkGray space-y-4">
                <li className="hover:underline">
                  <Link>Blog</Link>
                </li>
                <li className="hover:underline">
                  <Link>Use Cases</Link>
                </li>
                <li className="hover:underline">
                  <Link>Testimonials</Link>
                </li>
                <li className="hover:underline">
                  <Link>Insights</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-[460px] h-[213px] flex flex-col gap-6">
            {/* Logo with Subscibe*/}
            <div>
              <img src="src\images\Cookpal 1.png" alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-linkGray text-base">
                ut risus mattis interdum faucibus facilisi. Facilisi purus
                accumsan aliquam.
              </p>
              <div className=" relative flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="placeholder-[#253D4E] border border-black rounded-md p-3 text-[#253D4E] "
                  style={{ width: "300px" }}
                />
                <div className="absolute inset-y-0 right-[174px] flex items-center pointer-events-none">
                  <span>
                    <img src="src\utilities\footer\Right Part.png" alt="" />
                  </span>
                </div>
                <button
                  className="flex justify-center items-center text-lg text-white rounded-md px-3 py-2"
                  style={{ backgroundColor: "#509E2F" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center m-auto gap-4">
            <Link>
              <img
                src="src\utilities\footer\Instagram.png"
                alt=""
                width="30px"
                height="30px"
              />
            </Link>
            <Link>
              <img
                src="src\utilities\footer\Twitter.png"
                alt=""
                width="30px"
                height="30px"
              />
            </Link>
            <Link>
              <img
                src="src\utilities\footer\Linkedin.png"
                alt=""
                width="30px"
                height="30px"
              />
            </Link>
            <Link>
              <img
                src="src\utilities\footer\Facebook.png"
                alt=""
                width="30px"
                height="30px"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
