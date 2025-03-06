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

export default function Navigation({ howToEnter, competitions, scheduleOfEvents, venues, testimonials, comunitySupport, media, prizes, about }) {

    return (
        <NavigationMenu className="w-full pr-5 max-w-full">
            <NavigationMenuList className="w-full justify-start">
                <NavigationMenuItem>
                    <a href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:text-neutral-900">Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>How To Enter</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-136 w-120 mx-auto bg-lavander text-dark-1 font-semibold rounded-md  shadow-md">

                        <div className="w-full grid grid-cols-2 gap-2 p-4">
                            {howToEnter && howToEnter.map((link) => {
                                return <a key={link._id} href={`/how-to-enter/${link.slug}`} className="hover:underline group flex gap-2 w-full py-1">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-360 transition-all duration-200">
                                        <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                        <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                    </svg>
                                    {link.title}</a>
                            })}
                        </div>

                    </NavigationMenuContent>


                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Event</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-146 bg-lavander text-dark-1 font-semibold rounded-md  shadow-md">

                        <div className="w-full grid grid-cols-3  ">
                            <div>
                                <div className="bg-purple text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Competitions</span></div>

                                <div className="py-4 px-2"> {competitions && competitions.map((link) => {
                                    return <a key={link._id} href={`/event/competitions/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>
                            <div>
                                <div className="bg-purple text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Schedule of Events</span></div>

                                <div className="py-4 px-2"> {scheduleOfEvents && scheduleOfEvents.map((link) => {
                                    return <a key={link._id} href={`/event/schedule-of-events/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>


                            <div>
                                <div className="bg-purple text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Venues</span></div>

                                <div className="py-4 px-2"> {venues && venues.map((link) => {
                                    return <a key={link._id} href={`/event/venues/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>



                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-146 bg-lavander text-dark-1 font-semibold rounded-md  shadow-md">

                        <div className="w-full grid grid-cols-3">

                            <div>
                                <div className="bg-indigo text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Testimonials</span></div>

                                <div className="py-4 px-2"> {testimonials && testimonials.map((link) => {
                                    return <a key={link._id} href={`/resources/testimonials/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>


                            <div>
                                <div className="bg-indigo text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Comunity & Support</span></div>

                                <div className="py-4 px-2"> {comunitySupport && comunitySupport.map((link) => {
                                    return <a key={link._id} href={`/resources/comunity-and-support/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>

                            <div>
                                <div className="bg-indigo text-white px-2 py-2.5 font-display text-display-xs font-semibold"> <span>Media</span></div>

                                <div className="py-4 px-2"> {media && media.map((link) => {
                                    return <a key={link._id} href={`/resources/media/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                                <div className="bg-purple mx-2 mt-4 text-white px-2 py-1 font-display text-display-xs font-semibold"> <span>Prizes & Awards</span></div>

                                <div className="py-4 pt-2 px-2"> {prizes && prizes.map((link) => {
                                    return <a key={link._id} href={`/resources/media/prizes-and-awards/${link.slug}`} className="hover:underline group flex gap-2 w-full py-2  border-b border-gray-1">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:rotate-360 transition-all duration-200 h-4.5 w-4.5">
                                            <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                            <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                        </svg>
                                        {link.title}</a>
                                })}</div>
                            </div>





                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-138 w-120 mx-auto bg-lavander text-dark-1 font-semibold rounded-md  shadow-md">

                        <div className="w-full grid grid-cols-2 p-4">
                            {about && about.map((link) => {
                                return <a key={link._id} href={`/about/${link.slug}`} className="hover:underline group flex gap-2 w-full py-1">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-360 transition-all duration-200">
                                        <path d="M11.566 0L14.4349 8.21275L23.132 8.40321L16.208 13.6695L18.7141 22L11.566 17.042L4.4179 22L6.92397 13.6695L0 8.40321L8.69702 8.21275L11.566 0Z" fill="#F4CA51" />
                                        <path d="M23.132 8.40321L11.566 12.1614L14.4349 8.21275L23.132 8.40321ZM11.566 17.042V12.1614L4.4179 22L11.566 17.042ZM11.566 12.1614L18.7141 22L16.208 13.6695L11.566 12.1614ZM8.69702 8.21275L11.566 12.1614V0L8.69702 8.21275ZM6.92397 13.6695L11.566 12.1614L0 8.40321L6.92397 13.6695Z" fill="#A57D24" />
                                    </svg>
                                    {link.title}</a>
                            })}
                        </div>

                    </NavigationMenuContent>


                </NavigationMenuItem>



            </NavigationMenuList>
        </NavigationMenu>
    )
}