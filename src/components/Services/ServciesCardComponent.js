import React from 'react'
export default function ServciesCardComponent({title}) {
  return (
    <div >
    <h1 className="text-center display-4 my-5">{title}</h1>
    <div class="card-deck pb-5 mx-auto  ">
        <div class="card text-white col-3  bg-info mb-3" >
            <div class="card-header ">UI Design</div>
            <div class="card-body">
                <h5 class="card-title">Figma UI Design Tool</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-white col-3 bg-info mb-3" >
            <div class="card-header">React Js </div>
            <div class="card-body">
                <h5 class="card-title">ReactJs</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-white col-3 bg-info mb-3" >
            <div class="card-header">Git</div>
            <div class="card-body">
                <h5 class="card-title">GitHub</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-white col-3 bg-info mb-3" >
            <div class="card-header">Cloud</div>
            <div class="card-body">
                <h5 class="card-title">Cloud</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
       
    </div>
</div>
  )
}
