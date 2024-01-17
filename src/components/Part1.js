import React from 'react'
import mastercraft from "../images/logo-mastercraft.svg"
import bookmark from "../images/icon-bookmark.svg"

const Part1 = () => {
  return (
    <>
    <section className="relative bg-white px-5 mx-5 rounded-lg
    -mt-20 pb-10 border-2 lg:w-2/3 lg:mx-auto">
        <img src={mastercraft} alt="" className="mastercraft-logo" />
    <div className="pt-10 pb-3">
    <h2 className="text-center font-bold text-xl pb-2">Mastercraft Bamboo Monitor Riser</h2>
    <p className="text-center">A beautiful & handcrafted 
    monitor stand to reduce neck and eye strain.</p>
    </div>
    <div className="flex justify-between">
        <button className="btn rounded-full py-2 
        px-6 text-white">Back this project</button>
        <img src={bookmark} alt="" />
    </div>
    </section>

    </>
  )
}

export default Part1