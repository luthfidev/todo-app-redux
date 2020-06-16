import React, { Component } from 'react'
import {Card,
        Button, 
        Modal,
        Form} from 'react-bootstrap'
import {BsSquare,
        BsFillXSquareFill,
        BsDash,
        BsBrightnessHigh,
        BsThreeDots,
        BsCircle}from 'react-icons/bs'
import {connect} from 'react-redux'

import {addTask} from '../redux/actions/todo'


class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            close: false

        }
    }   

    render() {
        {console.log(this.props)}
        return (
          <div className="d-flex flex-column h-100 justify-content-center align-items-center">
            
                <Card className="shadow rounded" style={{ width: '50rem' }}>
                    <div className="todo-header">
                        <div className="todo-top-action mr-2 d-flex justify-content-end">    
                            <div className="top-minimize text-white"><BsDash /></div>
                            <div className="top-maximize ml-2 mr-2 text-white"><BsSquare /></div>
                            <div className="top-close text-white"><BsFillXSquareFill/></div>
                        </div>
                        <div className="todo-top-action ml-2 d-flex flex-column justify-content-start">    
                            <div  style={{fontSize: 25}} className="bottom-title-day">Monday</div>
                            <div  style={{fontSize: 15}}className="bottom-header d-flex justify-content-between">
                                <div className="bottom-date">18-12-2020</div>
                                    <div className="more d-flex mr-2">
                                        <div style={{fontSize: 30}} className="icon-light mr-3 text-warning"><BsBrightnessHigh/></div>
                                        <div style={{fontSize: 30}} className="icon-more"><BsThreeDots/></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="todo-body">
                        <ul className="list-group list-group-flush">
            	            <li className="list-group-item"><BsCircle/> {}</li>
                            <li className="list-group-item"><BsCircle/> Dapibus ac facilisis in</li>
                            <li className="list-group-item"><BsCircle/> Morbi leo risus</li>
                            <li className="list-group-item"><BsCircle/> Porta ac consectetur ac</li>
                            <li className="list-group-item"><BsCircle/> Vestibulum at eros</li>
                        </ul>
                        <div className="btn-action ml-5 mt-2">
                            <Button onClick={() => this.setState({ show: true })}>Add Task</Button>
                        </div>
                    </div>
                    <Modal 
                         show={this.state.show}
                         animation={true}
                        >
                        <Modal.Header >
                        <Modal.Title>To Do</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="task" placeholder="Input Task" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            
          </div>
        )
    }
}

const mapStateToProps = state => ({
    task: state.task
})

const mapDispatchToProps = {addTask}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

/* export default Todo */