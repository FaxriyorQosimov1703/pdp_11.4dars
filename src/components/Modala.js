import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import React from 'react'



function Modala(props) {
     function onClickedInput(event) {
        let name = event.target[0].value;
        let fname = event.target[1].value;
        let phone = event.target[2].value;
        props.addPerson(name, fname, phone);
        props.addUsers()
    }

    function addUsers() {
        props.addUsers()
    }
    return (
        <Modal isOpen={props.active} toggle={props.addUsers}>
            <ModalHeader>users</ModalHeader>
            <ModalBody>
                <form action="#" onSubmit={onClickedInput} id="users">
                    <input className="form-control mb-3" type="text" placeholder="name" />
                    <input className="form-control mb-3" type="text" placeholder="fname" />
                    <input className="form-control mb-3" type="text" placeholder="phone" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary" form="users" >save</button>
                <button className="btn btn-danger" onClick={props.addUsers}>close</button>
            </ModalFooter>
        </Modal>
    )
}

export default Modala