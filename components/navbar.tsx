
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription";
import { ModeToggle } from "./theme-toggle";


const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <div className="flex justify-between space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>

      </div>
    </div>
  )
}

export default Navbar