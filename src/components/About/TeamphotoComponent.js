import React from 'react'
import {Link} from 'gatsby'
export default function TeamphotoComponent({buttonText}) {
  return (
    <div >
        <h1 className="text-center display-4 my-5">Our Team</h1>
        <div class="card-deck pb-5 mx-auto">
            <div class="card">
                <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Jessica Maccron</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{buttonText}</button>
                </Link>
                </div>
            </div>
            <div class="card">
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Dasha Primoshkaya</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that</p>
                <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{buttonText}</button>
                </Link>
                </div>
            </div>
            <div class="card">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title"> Svetlana Goromova</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{buttonText}</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
