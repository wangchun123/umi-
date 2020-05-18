import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import EditTable from './component/editTable';
import { cloneDeep } from 'lodash';
import styles from './component/index.less';

const list = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    tags: '1',
  },
  {
    key: 2,
    name: 'John Brown',
    age: 32,
    tags: '1',
  },
  {
    key: 3,
    name: 'John Brown',
    age: 32,
    tags: '1',
  },
];

const Empty = <div className={styles.error}>必填</div>;

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelSubmite = () => {
    const newData = cloneDeep(data);
    if (checkError(newData)) return;
    console.log('提交成功',newData);
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

    if (falg) setData(newData); //有错误，回填数据显示错误

    return falg;
  };

  const fetchTableData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(list);
      setLoading(false);
    }, 100);
  };

  const saveData = va => {
    const newData = cloneDeep(va);
    setData(newData);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <>
      <EditTable Empty={Empty} data={data} loading={loading} saveData={saveData} />
      <div style={{ textAlign: 'center' }}>
        <Button type="primary" onClick={() => handelSubmite()}>
          提交
        </Button>
      </div>
    </>
  );
};
