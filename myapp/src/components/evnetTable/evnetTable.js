import React from 'react';
import {Row,Col,Pagination,Table} from 'antd';

export default class EvnetTable extends React.Component{
    constructor(){
        
    }
    render(){
        return(
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}