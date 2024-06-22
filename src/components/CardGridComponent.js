import React, {useEffect, useState} from 'react';
import { Col, Row, Spin} from 'antd';
import {getProducts} from "../api/products";
import {LoadingOutlined} from "@ant-design/icons";
import CardComponent from "./CardComponent";
import './CardGridComponent.css'

const mapProducts = (products) => {
    if(!products) return false
    let productsArr = [...Array(products.length)].map((_, i) => products[i]);
    let columns = productsArr.map((productData, i) =>
            <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                <CardComponent
                    product={productData}
                />
            </Col>
        )
    return <Row justify={'start'} gutter={[24,24]}> {columns} </Row>
}

const CardGridComponent = () => {

    const [mappedProducts, setMappedProducts] = useState()

    useEffect(() => {
        getProducts().then((res) => {
            setMappedProducts(mapProducts(res));
        })
    }, []);

    return (
        <>
            {!!mappedProducts &&
                mappedProducts
            }
            {!mappedProducts &&
                <div className={'spinContainer'}>
                    <Spin
                        indicator={<LoadingOutlined spin/>}
                        size="large"
                    />
                </div>
            }
        </>


    );
};

export default CardGridComponent;