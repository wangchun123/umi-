import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Select, InputNumber } from 'antd';
import { cloneDeep } from 'lodash';
import styles from './index.less';
const { Option } = Select;

const Eum = [
  { label: '小米', value: 1 },
  { label: '苹果', value: 2 },
];

export default ({ Empty, data, loading, saveData }) => {
  const [dataSource, setDataSource] = useState([]);

  const dealWithOnchanges = (value, dataIndex, index) => {
    const newData = cloneDeep(dataSource);
    newData[index][dataIndex] = value;
    newData[index][`${dataIndex}Error`] = false;
   
    checkError(newData)
    
    saveData && saveData(newData);
  };

  const checkError = newData => {
    let falg = false;

    const check = (mode, item) => {
      item[mode] = true;
      falg = true;
    };

    newData.length > 0 &&
      newData.forEach(item => {
        const { name, age, tags } = item;
        if (!name) check('nameError', item);
        if (!age) check('ageError', item);
        if (!tags) check('tagsError', item);
      });

    if (falg) setDataSource(newData); //有错误，回填数据显示错误

    return falg;
  };


  const dealDelete = index => {
    const newData = cloneDeep(dataSource);
    newData.splice(index, 1);
    setDataSource(newData);
    saveData && saveData(newData);
  };

  const dealAdd = () => {
    const newData = cloneDeep(dataSource);
    const item = { key: newData.length + 1, name: '', age: '', tags: '' };
    newData.push(item);
    setDataSource(newData);
    saveData && saveData(newData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (text, record, index) => {
        return (
          <>
            <Input
              style={{ width: '100%' }}
              value={text}
              onChange={({ target: { value } }) => dealWithOnchanges(value, 'name', index)}
            />
            <>{record.nameError && Empty}</>
          </>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      render: (text, record, index) => {
        return (
          <>
            <Select
              style={{ width: '100%'}}
              value={text}
              onChange={value => dealWithOnchanges(value, 'age', index)}
              allowClear
             
            >
              {Eum.map(item => {
                return (
                  <Option value={item.value} key={toString(item.label)}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
            <>{record.ageError && Empty}</>
          </>
        );
      },
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      width: '10%',
      render: (text, record, index) => {
        return (
          <>
            <InputNumber
              style={{ width: '100%' }}
              value={text}
              onChange={value => dealWithOnchanges(value, 'tags', index)}
            />
            <>{record.tagsError && Empty}</>
          </>
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      width: '20%',
      render: (text, record, index) => {
        return (
          <Button type="link" style={{ marginBottom: '10px' }} onClick={() => dealDelete(index)}>
            删除
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    setDataSource(data || []);
  }, [data]);

  return (
    <>
      <Button type="primary" onClick={() => dealAdd()}>
        新增
      </Button>
      <Table columns={columns} dataSource={dataSource} loading={loading} />
    </>
  );
};
