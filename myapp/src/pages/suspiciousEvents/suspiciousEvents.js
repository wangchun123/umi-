import React from 'react';
import { Row, Col, Pagination, Table, LocaleProvider, Select, Form } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './suspiciousEvents.less';
import { connect } from 'dva';
const Option = Select.Option;

@Form.create()

 class EvnetTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
        }, {
            title: 'Action',
            key: 'action',
        }];

    }
    componentDidMount() {
        const {dispatch}=this.props;
        dispatch({
            type:'suspiciousEvents/addOne',
            payload:'123'
        })
    }

    render() {
        console.log(this.props);
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];
        return (
            <div className={styles.box}>
                <Row type="flex" justify="end" style={{ marginBottom: '20px' }}>
                    <Col span={6}>
                        <Select defaultValue="lucy" style={{ width: '80%' }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                </Row>
                <Table
                    columns={this.columns}
                    dataSource={data}
                    pagination={false}
                />
                <Row type="flex" justify="end" style={{ marginTop: '20px' }}>
                    <Col>
                        <LocaleProvider locale={zhCN}>
                            <Pagination
                                showQuickJumper
                                showSizeChanger
                                defaultCurrent={2}
                                total={500}
                            />
                        </LocaleProvider>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(({ suspiciousEvents }) => ({
    data: suspiciousEvents,
}))(EvnetTable)