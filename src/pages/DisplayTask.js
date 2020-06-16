import React, { Component } from "react"
import { Row, Col, Input,  Button, Modal, ModalHeader, ModalBody, Form, Table, ModalFooter } from 'reactstrap'
import cover from '../assets/cover.jpg'

import { connect } from 'react-redux'
import { toggleModal, addTask, deleteTask } from '../redux/actions/Todo'


class DisplayTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
      desc: null
    }
  }


  render() {
    const { text , desc  } = this.state
    return (
      <>
        <Row className="h-100 w-100 no-gutters">
          <Col md={12} className="header w-100" style={{ backgroundImage: `url(${cover})` }} >
            <div className="ml-3 text-header">
              <div className="text-white">
                <h1>My Day</h1>
                <h5 style={{ fontSize: 17 }}>Tuesday, January 29</h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="h-100 w-100 no-gutters ml-3 mt-2">
          <Col md={12} >
            <div className=''>
              <Table className='container'>
                {this.props.todo.todoTask.data.map((list, index) => (
                  <tr>
                    <th scope="row"></th>
                    <h1>{list.text}</h1>
                    <p>{list.desc}</p>
                    <td><Button onClick={() => this.props.deleteTask(index)} className='btn btn-danger'>Delete</Button></td>
                  </tr>
                ))}
              </Table>
              <Button color="success" onClick={this.props.toggleModal}>Add Task</Button>
            </div>
          </Col>
          <Modal isOpen={this.props.toggle.value}>
            <Form>
              <ModalHeader>Add Task</ModalHeader>
              <ModalBody>
                <Input onChange={(e) => this.setState({
                  text: e.target.value
                })} type='text' placeholder='add your task' />
                <Input className="mt-3" onChange={(e) => this.setState({
                  desc: e.target.value
                })} type='text' placeholder='add your desc' />
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => {
                  this.props.addTask(text, desc)
                  this.props.toggleModal()
                }} color="success" type='button'>Add</Button>
                <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Form>
          </Modal>
        </Row>
      </>
    )
  }
}

const mapStateToProps = state => ({
  toggle: state.toggle,
  todo: state
})


const mapDispatchToProps = {toggleModal, addTask, deleteTask}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTask)