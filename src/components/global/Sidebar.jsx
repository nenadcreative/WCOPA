import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.83365 8.33203C5.39163 8.33203 4.9677 8.50763 4.65514 8.82019C4.34258 9.13275 4.16699 9.55667 4.16699 9.99866C4.16699 10.4408 4.34258 10.8647 4.65514 11.1773C4.9677 11.4898 5.39163 11.6654 5.83365 11.6654H34.167C34.6091 11.6654 35.033 11.4898 35.3455 11.1773C35.6581 10.8647 35.8337 10.4408 35.8337 9.99866C35.8337 9.55667 35.6581 9.13275 35.3455 8.82019C35.033 8.50763 34.6091 8.33203 34.167 8.33203H5.83365ZM4.16699 19.9987C4.16699 19.5567 4.34258 19.1328 4.65514 18.8202C4.9677 18.5077 5.39163 18.3321 5.83365 18.3321H34.167C34.6091 18.3321 35.033 18.5077 35.3455 18.8202C35.6581 19.1328 35.8337 19.5567 35.8337 19.9987C35.8337 20.4408 35.6581 20.8647 35.3455 21.1773C35.033 21.4898 34.6091 21.6654 34.167 21.6654H5.83365C5.39163 21.6654 4.9677 21.4898 4.65514 21.1773C4.34258 20.8647 4.16699 20.4408 4.16699 19.9987ZM4.16699 30.0004C4.16699 29.5584 4.34258 29.1345 4.65514 28.8219C4.9677 28.5093 5.39163 28.3337 5.83365 28.3337H34.167C34.6091 28.3337 35.033 28.5093 35.3455 28.8219C35.6581 29.1345 35.8337 29.5584 35.8337 30.0004C35.8337 30.4424 35.6581 30.8664 35.3455 31.1789C35.033 31.4915 34.6091 31.6671 34.167 31.6671H5.83365C5.39163 31.6671 4.9677 31.4915 4.65514 31.1789C4.34258 30.8664 4.16699 30.4424 4.16699 30.0004Z"
                        fill="#2B273B"
                    />
                </svg>
            </SheetTrigger>
            <SheetContent className=" grid items-center bg-purple sm:w-[540px]">
                <nav className="flex flex-col h-full justify-center text-lg text-white  gap-4">
                    <a href="/#partners">Samarbeidspartnere</a>
                    <a href="/#introduksjon">Introduksjon</a>
                    <a href="/#timeplan">Timeplan</a>
                    <a href="/#cta">Registrer deg</a>
                    <a href="/#featuredBlogs">Inspirasjonsartikler</a>
                    <a href="/#presenters">Presentatører</a>
                    {/* <a href="/#timebeskrivelser">Timebeskrivelser</a> */}
                    <a href="/#testimonium">Referanser</a>
                </nav>
            </SheetContent>
        </Sheet>
    );
};
export default Sidebar;