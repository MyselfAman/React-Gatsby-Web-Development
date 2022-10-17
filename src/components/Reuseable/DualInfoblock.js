import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'


export default function DualInfoblock({heading , image , title , description , blockDesc}) {
  return (
    
    <section className="my-4 py-4 mb-5 bg-theme text-white">
        <div className="container">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">{blockDesc}</p>
                </div>
                <div className="col-4">
                    <div className="card bg-dark text-white" >
                        <img src={image} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <Link to='/'>
                                <p className="btn btn-warning btn-block">{heading}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
