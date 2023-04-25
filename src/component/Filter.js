import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context1'

const Filter = () => {
    const {productState :{byStock,byFastDelivery,byRating,sort},productDispatch}=CartState();
    console.log(byStock,byFastDelivery,byRating,sort)
    return (
   
    
    <div className="filters">
        <span className="title">Filter products</span>
        <span>
            <Form.Check 
                inline
                label="Accending"
                name='group1'
                type='radio'
                id={'inline-1'}
                onChange={(i)=>productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"LowToHigh",
                })} 
                checked ={sort ==="LowToHigh"?true:false}
            />
        </span>
        <span>
            <Form.Check
                 inline
                 label="Descending"
                 name='group1'
                 type='radio'
                 id={'inline-2'}
                 onChange={(i)=>productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"highToLow",
                })} 
                checked ={sort ==="highToLow"?true:false}
            />
        </span>
        <span>
            <Form.Check
                 inline
                 label="Include out of stock"
                 name='group1'
                 type='checkbox'
                 id={'inline-3'}
                 onChange={(i)=>productDispatch({
                    type:"FILTER_BY_STOCK",
                    
                })} 
                checked ={byStock}
            />
        </span>
        <span>
            <Form.Check
                 inline
                 label="Fast Delievery only"
                 name='group1'
                 type='checkbox'
                 id={'inline-4'}
                 onChange={()=>productDispatch({
                    type:"FILTER_BY_DELIEVERY",
                    
                })} 
                checked ={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating</label>
            <Rating rating={byRating} onClick={(i)=>productDispatch({
                type:"FILTER_BY_RATING",
                payload:i+1,
            })}  style={{cursor:"pointer"}}/>
        </span>
        <Button variant='light' onClick={(i)=>productDispatch({
                type:"CLEAR_FILTERS",

        })} >Clear Filter</Button>
        

    </div>
  )
}

export default Filter