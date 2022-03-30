import React, { useState } from 'react';
import {Button, Modal, ModalFooter, ModalHeader, ModalBody} from "reactstrap";

export default function ModalElement() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="primary" onClick={toggle}>Open Modal</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Sample Modal Title</ModalHeader>
                <ModalBody>
                    Sample Modal Body Text to display...
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Okay</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}