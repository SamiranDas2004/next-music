'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link  from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-green-600" , className)}
    >
       <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Courses">
            <div className=" flex flex-col space-y-4 text-green">
         <HoveredLink href={"/courses"}>Basic Music Theory</HoveredLink>
         <HoveredLink href={"/courses"}>Advanced music </HoveredLink>
         <HoveredLink href={"/courses"}>SongWritting</HoveredLink>
         <HoveredLink href={"/courses"}>music Production</HoveredLink>
         <HoveredLink href={"/courses"}>all courses</HoveredLink>
         </div>
        </MenuItem>
</Link>
<Link href={"/love"}>
        <MenuItem setActive={setActive} active={active} item="love">
         <HoveredLink href={"/love"}>love</HoveredLink>
        </MenuItem>
</Link>
<Link href={"/hate"}>
        <MenuItem setActive={setActive} active={active} item="hate">
         <HoveredLink href={"/contact"}>hate</HoveredLink>
        </MenuItem>
        </Link>
       </Menu>
        </div>
  )
}

export default Navbar