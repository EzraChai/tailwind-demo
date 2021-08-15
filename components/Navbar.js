import { useState } from "react";
import AccountDropDown from './AccountDropDown'

function Navbar() {

const [isOpen, setIsOpen] = useState(false);

return (
<header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 py-2">
    <div className="flex items-center justify-between">
        <div>
            <div className="flex items-center px-4 py-2 sm:p-0">
                <img className=" h-8" src="https://i.ibb.co/tQxBCnd/47d3130237592a4b0622802b500cd082.png" alt="logo" />
                <h1 className="text-md font-sans font-bold tracking-wide text-white">Work<span
                        className="text-indigo-300">cation</span> </h1>
            </div>
        </div>
        <div className="sm:hidden mr-4">
            <button type="button" onClick={()=>setIsOpen(!isOpen)} className="block text-white">
                <svg className={!isOpen?"block h-4 w-4 focus:outline-none hover:text-white ":"hidden"} xmlns="http://www.w3.org/2000/svg" x="0px"
                    y="0px" width="30" height="30" viewBox="0 0 172 172" style={{" fill":"#000000;"}}>
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style={{"mix-blend-mode": "normal"}}>
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                            <path d="M0,30.96v6.88h172v-6.88zM0,82.56v6.88h172v-6.88zM0,134.16v6.88h172v-6.88z"></path>
                        </g>
                    </g>
                </svg>
                <svg className={isOpen?"block h-4 w-4 focus:outline-none hover:text-white":"hidden"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172"
                    style={{" fill":"#000000;"}}>
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style={{"mix-blend-mode": "normal"}}>
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                            <path
                                d="M26.5525,21.6075l-4.945,4.945l59.4475,59.4475l-59.4475,59.4475l4.945,4.945l59.4475,-59.4475l59.4475,59.4475l4.945,-4.945l-59.4475,-59.4475l59.4475,-59.4475l-4.945,-4.945l-59.4475,59.4475z">
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>

    <div className={isOpen?"block":"hidden sm:block"}>
        <div className="px-2 pt-2 pb-4  sm:p-0 sm:mr-3">
            <div className="sm:flex sm:items-center">
                <a href="#" className="block px-2 py-1 text-white rounded font-semibold hover:bg-gray-600">List your
                    property</a>
                <a href="#" className="mt-1 sm:mt-0 sm-ml-2 block px-2 py-1 text-white rounded font-semibold hover:bg-gray-600">Trips</a>
                <a href="#" className="mt-1 sm:mt-0 sm-ml-2 block px-2 py-1 sm:mr-2 text-white rounded font-semibold hover:bg-gray-600">Messages</a>
                <AccountDropDown/>
            </div>
            
                <div className="relative mt-1 px-2 py-1 border-t border-gray-800 sm:hidden">
                    <div className="mt-2 flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover border-2 border-gray-600" src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Your Avatar" />
                        <span className="ml-3 font-semibold text-white">Jessy</span>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="text-gray-400 hover:text-white  text-sm block">Account Settings</a>
                        <a href="#" className="text-gray-400 hover:text-white  text-sm block mt-2">Support</a>
                        <a href="#" className="text-gray-400 hover:text-white  text-sm block mt-2">Sign Out</a>
                    </div>
                </div>
            </div>
    </div>
</header>
);
}

export default Navbar;