import React from 'react';

import { Select, Divider, Icon, Input } from 'antd';
const { Option, OptGroup } = Select;

class SearchInput extends React.Component {
  state = {
    data: [
      { text: 'asew', value: '123' },
      { text: '123', value: '231' },
    ],
    value: '',
  };

  handleChange = value => {
    console.log('han:', value);
    this.setState({
      value,
      data: [
        { text: 'asew', value: '123' },
        { text: '123', value: '231' },
      ],
    });
  };

  onSearch = val => {
    if (val) {
      debugger
      this.setState({
        data: [
          { text: '小语言', value: '123' },
          { text: '打包', value: '231' },
        ],
      });
    } else {
      this.setState({
        data: [
          { text: 'asew', value: '123' },
          { text: '123', value: '231' },
        ],
      });
    }
    console.log('onSearch', val);
  };

  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        onSearch={this.onSearch}
        // optionFilterProp="children"
        // filterOption={(input, option) =>
        //   option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        {options}
      </Select>
    );
  }
}

// ReactDOM.render(<SearchInput placeholder="input search text" style={{ width: 200 }} />, mountNode);
export default SearchInput;
