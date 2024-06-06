import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className='d-flex justify-content-evenly p-2'>
        <NavLink style={{ textDecoration: 'none' }} to="/"><h3>Home</h3></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/Contact"><h3>Contact</h3></NavLink>
        {/* <NavLink style={{ textDecoration: 'none' }} to="/Button"><button className='btn btn-outline-primary'>Login</button></NavLink>
        <div>Contact</div> */}
        <button onClick={()=>{handleShow()}} className='btn btn-outline-primary'>Login</button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    </div>
  )
}

export default Nav
