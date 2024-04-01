import React from 'react'
import Cards from './Cards'
import data from './data'


function CardList() {
    const cards = data.map(items => {
        return (

            <Cards key={items.id} items={items} />
        )
    })
    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
        </div>
    )
}

export default CardList