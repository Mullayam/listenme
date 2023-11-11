import { Input } from "@/components/ui/input"
import { useLocation } from "react-router-dom"

export function Search() {
  const searchText =  useLocation().pathname.substring(1)
 
  return (
    <div>
      <Input
        type="search"
        placeholder={`Search ${searchText}...`}
        className="md:w-[100px] lg:w-[300px] outline-none decoration-none focus:outline-none"
      />
    </div>
  )
}