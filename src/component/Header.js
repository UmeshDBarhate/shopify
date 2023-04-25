import React from 'react'
import {Container, FormControl, Navbar,Dropdown, Badge, Button} from 'react-bootstrap'
        
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import {Link} from "react-router-dom"
import { CartState } from '../context/Context1'

const Header = () => {
 const {state : {cart},dispatch,productDispatch} = CartState()
  return (
    <Navbar bg='secondary' style={{height:80}} >
      <Container>
          <Navbar.Brand>
            <Link to='/' >Shopify</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl style={{width:500}} placeholder="search here" className="m-auto"
            onChange={(e)=>{
              productDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value,
              })
            }}/>
          </Navbar.Text>
          <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic" style={{marginRight:80}}>
        <FaShoppingCart color="white" fontSize="25px"/>
        <Badge>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{miniWidth:370}}>
       
          {cart.length>0?(<>
            {
              cart.map((prod)=>(
                <span className="cartitem" key={prod.id}>
                  <img className="cartItemImg"src={prod.image} alt={prod.image} /> 
                  <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>${prod.price}</span>
                  </div>
                  <AiFillDelete
                  fontSize="20px"
                  style={{cursor:"pointe"}}
                  onClick={(prod)=>dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:prod ,
                  })}/>
                  </span>)
              )
            }
            <Link to="/cart">
            <Button style={{width:"95%",margin:"0 10px"}}>
              Go To Cart
            </Button>
          </Link>
          
          </>):(<span style={{padding:10}}>cart is empty</span>)}
          
     
        
      </Dropdown.Menu>
    </Dropdown>
      </Container>
    </Navbar>
  )
}

export default Header