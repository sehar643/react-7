import React from 'react'

const Card = (props) => {
    return (

        <div className='col-lg-3 col-md-6 col-sm-12'>
            { 
                <div >
                    <h2>Tittle: {props.data.title}</h2>
                    <img src={props.data.image} width={340} height={370}/>
                    <h2>category: {props.data.category}</h2>
                </div>
            }
        </div>




        // <div className='container'>
        //     <div className='row'>
        //         <div className='col-lg-3'>
        //         <div className="card" style={{ width: '16rem' }}>
        //         <img src={props.data.image} className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h5 className="card-title">{props.data.title}</h5>
        //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="#" className="btn btn-primary">Go somewhere</a>
        //         </div>
        //     </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Card



