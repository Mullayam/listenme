import React from 'react'

const AdBanner = () => {
  return (
    <div className="fixed inset-x-0 bottom-24 p-4">
    <div className="rounded-lg bg-orange-500 px-4 py-3 text-white shadow-lg">
        <p className="text-center text-sm font-medium">
            Listen Ad Free Music without any subcription or Youtube Music Premium
            <a href="#" className="inline-block underline">
                {/* Check out this new course! */}
            </a>
        </p>
    </div>
</div>
  )
}

export default AdBanner