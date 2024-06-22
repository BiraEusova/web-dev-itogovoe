import React from 'react';
import {Modal, Space} from 'antd';
import './ModalComponent.css'

const ModalComponent = (props) => {

    if (!props.isOpen) return null;

    return (
        <Modal
            width={'60%'}
            title={props.product.title}
            open={props.isOpen}
            onCancel={props.onClose}
            footer={null}
        >
            <Space
                direction={'horizontal'}
                size={40}
                align="start"
            >
                <img className={'modalImg'} src={props.product.image} alt={props.product.title}/>
                <div className={'productInfo'}>
                    <p className={'price'}><b>{props.product.price} $</b></p>
                    <div className={'category'}>
                        <p> {props.product.category}</p>
                    </div>
                    <div className={'description'}>{props.product.description}</div>
                </ div>
            </Space>
        </Modal>
    );
};
export default ModalComponent;