import { useState,useEffect } from "react";

function AccountDropDown() {

    const [isOpen,setIsOpen] = useState(false);
    
    const handleEscape = (e) => {
        if(e.key === 'Esc'|| e.key === 'Escape'){
            setIsOpen(false);
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleEscape);
        return function cleanUp() {
            document.removeEventListener("keydown", handleEscape);
        }
    },[isOpen])

    return (
        <div className="relative hidden sm:block sm:mt-0 px-2 py-1">
            <button onClick={()=>setIsOpen(!isOpen)} className="relative z-20 block h-8 w-8 rounded-full overflow-hidden border-2 focus:outline-none focus:border-white border-gray-600">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Your Avatar" />
            </button>
            <button onClick={()=>setIsOpen(!isOpen)} tabindex="-1" className={isOpen?"fixed z-10 inset-0 w-full h-full bg-black opacity-20 cursor-default":"hidden"}></button>
            <div className={isOpen?"absolute z-10 right-0 mt-2 w-48 bg-white rounded-lg py-1 overflow-hidden shadow-xl ":"hidden"}>
                <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-indigo-600 hover:text-white">Account Settings</a>
                <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-indigo-600 hover:text-white">Support</a>
                <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-indigo-600 hover:text-white">Sign Out</a>
            </div>
        </div>
    );
}

export default AccountDropDown;