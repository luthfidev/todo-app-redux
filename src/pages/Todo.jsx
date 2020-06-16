import React, { Component, useState } from 'react'
import {Container, 
        Card,
        Button} from 'react-bootstrap'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            formValid: false,

        }
    }   
   
    render() {

        return (
          <div className="d-flex flex-column h-100 justify-content-center align-items-center">
            
                <Card style={{ width: '50rem' }}>
                    <div className="todo-header">
                        <div className="todo-top-action d-flex justify-content-end">    
                            <div className="top-minimize">Minimize</div>
                            <div className="top-maximize ml-2 mr-2">maximize</div>
                            <div className="top-close">Close</div>
                        </div>
                        <div className="todo-top-action d-flex flex-column justify-content-start">    
                            <div className="bottom-title-day">Monday</div>
                            <div className="bottom-header d-flex justify-content-between">
                                <div className="bottom-date">Date</div>
                                    <div className="more d-flex ">
                                        <div className="icon-light mr-2">Light</div>
                                        <div className="icon-more">More</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="todo-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="btn-action ml-5 mt-2">
                            <Button onClick={handleShow}>Add Task</Button>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            
          </div>
        )
    }
}

export default Todo