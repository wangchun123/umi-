import React from 'react';
import { Layout, Tabs } from 'antd';
import router from 'umi/router';
import styles from './index.less';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

export default class Layouts extends React.Component {
  callback = key => {
    if (key === '1') {
      router.push('/');
    }
    if (key === '2') {
      router.push('/suspiciousEvents');
    }
    if (key === '3') {
      router.push('/contractSigning');
    }
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24 }} className={styles.some}>
            {/* <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="关系图" key="1" />
            <TabPane tab="可疑事件" key="2"/>
            <TabPane tab="签约事件" key="3"/>
          </Tabs> */}
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}
