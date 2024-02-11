import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-16 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-around items-center relative top-0">
      <div className="font-poppins font-[900] text-2xl text-stone-100">
        EduChain
      </div>
      <div className="text-stone-100">
        <Menubar className="bg-transparent border-0 border-transparent flex-auto">
          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Services</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Our Work</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link to="login" className="flex align-middle">
                <LuPenSquare />
                Enroll Now
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
