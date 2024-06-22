import React from 'react';
import {ConfigProvider, Layout} from 'antd';
import {ShopOutlined} from '@ant-design/icons';
import { Typography } from 'antd';
import './HeaderComponent.css'

const { Title } = Typography;
const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header className={'header'}>
            <ShopOutlined className={'logo'}/>
            {/*Почему-то стиль для тайтла не пашет*/}
            <ConfigProvider
                theme={{
                    token: {
                        colorText: 'white'
                    },
                    components: {
                        Typography: {
                            titleMarginBottom: 'auto',
                            titleMarginTop: 'auto'
                        },
                    },
                }}
            >
                <Title className={'headerTitle'} level={4}>
                    Shop
                </Title>
            </ConfigProvider>
        </Header>
    );
};

export default HeaderComponent;