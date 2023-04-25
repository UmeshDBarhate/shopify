import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context1'
import { Button, ListGroup ,Row,Col, Form, Image} from 'react-bootstrap';
import Rating from "./Rating"
import {AiFillDelete} from "react-icons/ai"



function Cart() {
  const{state:{cart},dispatch}=CartState();
  const[total,setTotal]=useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+ Number(curr.price)*curr.qty,0));
  },[cart])

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {
            cart.map(prod=>(
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col>
                    <Image md={2} src={prod.image} alt={prod.image} fluid round/>
                  </Col>
                  <Col md={2}> <span>{prod.name}</span></Col>
                  <Col md={2}>$ {prod.price}</Col>
                  <Col md={3} >
                    <Rating rating={prod.rating}/>
                  </Col>
                 
                  <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                      {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x+1} >{x + 1}</option>
                    ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <AiFillDelete
                      fontSize="20px"
                      style={{cursor:"pointe"}}
                      onClick={()=>dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:prod ,
                  })}/>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className='title'>Subtotal | ({cart.length}) items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total :${total} </span>
        <Button type="button" disable={cart.length===0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart