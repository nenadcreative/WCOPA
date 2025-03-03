import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navigation({ howToEnter }) {
    console.log(howToEnter)
    return (
        <NavigationMenu className="w-full max-w-full">
            <NavigationMenuList className="w-full justify-start">
                <NavigationMenuItem>
                    <a href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:text-neutral-900">Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>How To Enter</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-76 bg-purple text-white font-semibold rounded-md  shadow-md">

                        <div className="w-full  p-4">
                            {howToEnter && howToEnter.map((link) => {
                                return <a key={link._id} href={`/how-to-enter/${link.slug}`} className=" flex gap-2 w-full py-1"><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                    <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                </svg>
                                    {link.title}</a>
                            })}


                        </div>
                    </NavigationMenuContent>


                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}