import React, {useState} from 'react';
import {Card} from 'antd';
import ModalComponent from "./ModalComponent";
import './CardComponent.css'

const {Meta} = Card;

const CardComponent = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                className={'card'}
                onClick={showModal}
                hoverable
                size={"default"}
                cover={<img className={'cardImage'} src={props.product.image} alt={props.product.title}/>}
            >
                <Meta className={'cardMeta'}
                    title={<p className={'cardTitle'}><b>{props.product.price} $</b></p>}
                    description={<p className={'cardDescription'}>{props.product.title}</p>}
                />
            </Card>
            <ModalComponent
                product={props.product}
                isOpen={isModalOpen}
                onClose={handleCancel}
            />
        </>
    );

};

export default CardComponent;