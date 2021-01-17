import React from 'react';

const Recipe = (props) => {
    const {title, image, calories} = props
    const cal = Math.floor(Math.random() * calories)
    return(
        <div className='recipe'>
            <img src={image} alt={title} className='recipe--img' />
            <h5 className='recipe--title' >{title}</h5>
            <p className='recipe--calory'>Calories: {cal}</p>
        </div>
    )
}

export default Recipe;