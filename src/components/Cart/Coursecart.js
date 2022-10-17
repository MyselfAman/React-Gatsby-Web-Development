import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'

const getCaty = items =>{
     let holdItems = items.map(items =>{
        return items.node.category;
     })
     console.log(holdItems);
     let holdCategories = new Set(holdItems)
     console.log(holdCategories);
     let categories = Array.from(holdCategories)
     console.log(categories);

     categories = ["all", ...categories]
     console.log(categories);
     
     return categories 
}
export default class Coursecart extends Component {

    constructor(props){
        super(props)

        this.state = {
            courses: props.course,
            mycourses: props.course,
            mycategories :  getCaty(props.course)
        } 
    }

    catyClicked = category => {
        let keepItSafe = [...this.state.courses]

        if(category === "all"){
            this.setState(() =>{
                return {
                    mycourses : keepItSafe
                }
            })
        }
        else{
            let holdme = keepItSafe.filter(({node}) => 
                node.category === category
            )
            this.setState(() =>{
                return {mycourses:holdme}
            })
        }
    }
  render() {
    console.log(this.state.mycourses);
    return (
      <section className="py-5">
        <div className="container">
            <Heading title="Courses"/>
            <div className='row my-3'>
                <div className='col-10 mx-auto text-center'>
                    {
                        this.state.mycategories.map((category,index)=>{
                            return (
                                <button 
                                    className="btn btn-info m-3 px-3" 
                                    key={index} type='button'
                                    onClick={() =>{
                                        this.catyClicked(category)
                                    }}
                                    >
                                        {category}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="row">
                {
                    this.state.mycourses.map(({node}) =>{
                        console.log(node.image.url);
                        return(
                            
                            <div key={node.id} className="col-11 my-4 col-md-6 d-flex mx-auto">
                                <img src={node.image.url} alt="photo" height="120" width="200" />
                                <div className="flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0">{node.title}</h6>
                                        <h6 className="mb-0 text-success">$ {node.price}</h6>
                                    </div>
                                    <p className="text-muted">
                                        <small>{node.description}</small>
                                    </p>
                                    <button 
                                        className="snipcart-add-item btn btn-warning"
                                        data-item-id={node.id}
                                        data-item-price={node.price}
                                        data-item-image={node.image.url}
                                        data-item-name={node.title}
                                        >Join Now</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>

      </section>
    )
  }
}
