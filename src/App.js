import React from 'react';
import {Layout} from 'antd';
import HeaderComponent from "./components/HeaderComponent";
import {Content} from "antd/es/layout/layout";
import CardGridComponent from "./components/CardGridComponent";
import './App.css'

const App = () => {
    return (
        <Layout className={'mainLayout'}>
            <HeaderComponent />
            <Content className={'content'}>
                <div className={'gridContainer'}>
                    <CardGridComponent/>
                </div>
            </Content>
        </Layout>
    );
};

export default App;