import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="fixed inset-x-0 bottom-0">
    <div
        className="relative flex items-center justify-between gap-4 bg-indigo-600 px-4 py-3 text-white"
    >
        <p className="text-sm font-medium">
            Love Listen Me{" "}
            <a href="#" className="inline-block underline">Please Give a Star on Github!</a>
        </p>

    </div>
</div> 
</footer>
  )
}

export default Footer