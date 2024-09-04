'use client'
import MyContext from "../Context/context";
import { useContext, useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png"
import {faCartShopping, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/marketplace' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [badge, setBadge] = useState(null)
  const { cart, logout, token, personInfo, } = useContext(MyContext);

  useEffect(() => {
    const newCheckoutCart = [];
    cart.map(item => {
      
      for (let i = 0; i < item.quantity; i++) {
        newCheckoutCart.push(item);
      }
    });
    setBadge(newCheckoutCart.length)
    
  }, [cart]);


  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 border-b border-black">
        <nav aria-label="Global" className="flex items-center justify-between pt-6 pb-3 px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Re7</span>
              <img
                src={Logo}
                alt="RE7 logo"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-12 w-12" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xl font-semibold leading-6 text-gray-800 hover:underline">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!token
            ? 
              <Link to="/login">
                <button className="text-xl font-semibold leading-6 text-gray-800 bg-inherit">
                  Log in <span aria-hidden="true"></span>
                </button>
              </Link>
            :
              <Link to="/profile">
                <button className="profilename text-xl font-semibold leading-6 text-gray-800 bg-inherit hover:underline">
                  Hi, {personInfo.first_name != "" ? personInfo.first_name : "stranger"}! <span aria-hidden="true"></span>
                </button>
              </Link>
          }
            
            
            <Link to='/cart'>
                <div className="cart px-4 relative">
                  <FontAwesomeIcon className="text-3xl p-2 hover:cursor-pointer" icon={faCartShopping} />
                  {cart.length > 0 ? <div className="badge bg-red-500 text-white text-center text-base px-1 absolute bottom-9 right-8 rounded">{badge}</div> : ""}
                </div>
            </Link>
            {!token ? "" : 
            <Link to="/">
              <button className="logout text-xl font-semibold leading-6 text-gray-800 bg-inherit" onClick={(e) => {
                        e.preventDefault();
                        logout()}}>
                <FontAwesomeIcon className="text-3xl py-2 hover:cursor-pointer" icon={faRightFromBracket} />
                <span aria-hidden="true"></span>
              </button>
            </Link>
            }
            
          </div>
        </nav>

        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Re7</span>
                <img
                  alt=""
                  src={Logo}
                  className="h-10 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                    <a
                        href='/cart'
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      ><FontAwesomeIcon icon={ faCartShopping } className="pe-2"></FontAwesomeIcon>
                        Shopping Cart
                      </a>
                </div>
                <div className="py-4">
                  {!token ? 
                    <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                    Log in
                    </a>
                    :
                    <div>
                      <a
                      href="/profile"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                      Go to profile
                      </a>
                      <a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={(e) => {
                        e.preventDefault();
                        logout()
                      }}>
                      Logout
                      </a>
                    </div>
                  }
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      </div>
  )
}