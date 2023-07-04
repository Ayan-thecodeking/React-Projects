import React from 'react'
import './cards.css'
import { StarFilled} from '@ant-design/icons';
const Cards = () => {
    return (
        <div className='cards-con'>
            <div className="cards">
                <img src="./images/image.png" alt="error" />
            </div>
            <div className="infos">
                <h4> <StarFilled style={{  fontSize:'34px', color:'#FE395C' }}/> 5.0</h4>
                <p>Life lessons with Katie Zafere
                </p>
                <p>From $136 / person
</p>
            </div>
        </div>
    )
}

export default Cards