import Link from "next/link";
import Image from "next/image";
import React, { startTransition, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineCaretDown } from "react-icons/ai";
import ImImg1 from "../../public/favicon-192x192.png";
import ImImg2 from "../../public/web-logo-text-nav-720x240.png";
import { motion } from "framer-motion";
import AnimatedBorderButton from "./utils/AnimatedBorderButton";
import AnimatedButton from "./utils/AnimatedButton";

import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarBrand,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Button,
    ScrollShadow,
    Link as Link2,
} from "@heroui/react";
import { useRouter } from "next/router";

const icons = {
    menu_down: <AiOutlineCaretDown />, // Replace with the appropriate icon
};

const SiteNavbar = () => {
    const router = useRouter();
    const [color, setColor] = useState("transparent");
    const [boxShadow, setBoxShadow] = useState("none");

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 15) {
                startTransition(() => {
                    setColor("#efefefa0");
                });
                startTransition(() => {
                    setBoxShadow("rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset");
                });
            } else {
                startTransition(() => {
                    setColor("transparent");
                });
                startTransition(() => {
                    setBoxShadow("none");
                });
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { Name: "Home", Address: "/" },
        { Name: "Our Features", Address: "/program" },
        { Name: "Daily Schedule", Address: "/schedule" },
        { Name: "Activity Center", Address: "/activity_centre" },
        { Name: "About Us", Address: "/about" },
        { Name: "About: Staff", Address: "/staff" },
        { Name: "Apply", Address: "/apply" },
    ];

    return (
        <>
            <div className="sticky max-w-[1240px] left-0 top-0 w-full mx-auto py-6 px-8 z-10">
                <Navbar
                    style={{ backgroundColor: `${color}`, boxShadow: `${boxShadow}` }}
                    className="max-w-full m-auto my-2 px-2 text-black rounded-lg ease-in duration-300 navbar-extra-style"
                    isMenuOpen={isMenuOpen}
                    onMenuOpenChange={setIsMenuOpen}
                >
                    <NavbarContent className="sm:hidden" justify="start">
                        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                    </NavbarContent>

                    <NavbarContent className="sm:hidden" justify="center">
                        <NavbarBrand>
                            <Link href="/" scroll={false}>
                                <Image src={ImImg2} width="240" height="80" alt="Logo" className="mt-[-10px] p-0" loading="eager" unoptimized />
                            </Link>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="sm:hidden" justify="end">
                        <NavbarItem>
                            <Button as={Link} color="primary" variant="ghost" href="/apply">
                                Apply
                            </Button>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex transition-all" justify="start">
                        <NavbarBrand>
                            <Link href="/" scroll={false}>
                                <Image src={ImImg2} width="240" height="80" alt="Logo" className="mt-[-10px] p-0" loading="eager" unoptimized />
                            </Link>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-1 transition-all" justify="end">
                        {/* <Link href="/">Home</Link> */}
                        <Button as={Link} className="bg-[transparent] data-[hover=true]:bg-transparent" variant="light" href="/">
                            Home
                        </Button>

                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button className="bg-[transparent] data-[hover=true]:bg-transparent" endContent={icons.menu_down} variant="light">
                                        Program
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="Program Details"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                <DropdownItem key="features" description="What makes us different from others" as={Link} href="/program">
                                    Our Features
                                </DropdownItem>
                                <DropdownItem key="schedule" description="How does a typical day look like?" as={Link} href="/schedule">
                                    Daily Schedule
                                </DropdownItem>
                                <DropdownItem key="activities" description="Activities after hours" as={Link} href="/activity_centre">
                                    Activites
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button className="bg-[transparent] data-[hover=true]:bg-transparent" endContent={icons.menu_down} variant="light">
                                        About
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="About Options"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                <DropdownItem key="mission" description="About Kaizen Kids." as={Link} href="/about">
                                    About Us
                                </DropdownItem>
                                <DropdownItem key="staff" description="Learn about our staff." as={Link} href="/staff">
                                    Staff
                                </DropdownItem>
                                {/* <DropdownItem key="contact" description="Reach out to us." as={Link} href="/contact">
                                    Contact Us
                                </DropdownItem> */}
                            </DropdownMenu>
                        </Dropdown>

                        <Button as={Link} color="primary" variant="ghost" href="/apply">
                            Apply
                        </Button>
                    </NavbarContent>

                    <NavbarMenu className="z-38 transition-all">
                        <div className=" w-4/5 mx-auto my-5 px-8 py-8 bg-[#efefefa0] z-10 text-black rounded-lg duration-300 transition-all">
                            {menuItems.map((item, index) => (
                                <NavbarMenuItem className="py-1 " key={`${item}-${index}`}>
                                    <Link2 isBlock color={router.route === item.Address ? "success" : index === menuItems.length - 1 ? "primary" : "secondary"} href={item.Address}>
                                        {item.Name}
                                    </Link2>
                                </NavbarMenuItem>
                            ))}
                        </div>
                    </NavbarMenu>
                </Navbar>
            </div>
        </>
        // </div>
    );
};

export default SiteNavbar;
