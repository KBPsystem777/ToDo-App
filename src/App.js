import React from 'react'
import '@fontawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { MDBBtn, MDBInput, MDBModal, MDBModalBody,
  MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge,
  MDBContainer, MDBRow, MDBCol } 
from 'mdbreact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "Breakfast w/ G",
          location: 'San Juan',
          description: 'Discuss Work loads'
        },
        {
          id: 2,
          time: "12:00",
          title: "Breakfast w/ Arina Marie",
          location: 'Greenhills',
          description: 'Discuss Work loads'
        },
        {
          id: 3,
          time: "09:00",
          title: "Breakfast w/ Abella Danger",
          location: 'Cybergate 2',
          description: 'Discuss Work loads'
        }
      ]
    }

    addEvent = () => {
      const newArray = [ ...this.state.events]
      newArray.push({
        id: newArray.length ? newArray[newArray.lenght - 1].id + 1,
        time: this.state.time,
        title: this.state.title,
        location: this.state.location,
        description: this.state.description
      })

      this.setState({ events: newArray })
      this.setState({
        time: "",
        title: "",
        location: "",
        description: ""
      })
    }

    handleInput = inputName => value => {
      const nextValue = value
      this.setState({
        [inputName]: nextValue,
      })
    }
    handleDelete = eventId => {
      const events = this.state.events.filter(e => e.id !== eventId)
      this.setState({ events })
    }
    toggleModal = () => {
      this.setState({
        modal: !this.state.modal
      })
    }
  }


  render() {
    return(
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h2 className="text-uppercase my-3">Today:</h2>
              <div id="events">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className="mb-4">
              <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded onClick={this.toggleModal}>
                  Add Event
                  </MDBBtn>
              </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
                  <h3 className="text-uppercase my-3">Schedule</h3>
                  <h6 className="my-3">
                  It is going to be busy that day. You have {" "}
                  <b>{this.state.events.length} evens</b> today
                  </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  }
}


