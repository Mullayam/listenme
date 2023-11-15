import React from 'react'
import { Menu } from './menu'
import { ThemeToggle } from './theme-toggle'
import { Search } from './search'

const Header = () => {
  return (
    <div className="border-b">
          <div className="absolute flex h-16 items-center px-4">
            <Menu />
            <Search/>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />            
            </div>
          </div>
        </div>
  )
}

export default Header