import React, { Component } from 'react';
import { Select  } from 'antd';
import { commonApi } from '@api/department'
import requestUrl from '@api/requestUrl'  
class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
      _isMounted: null
    }
  }
  onCurrencyChange = (value) => {
    this.setState({
      value
    })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }
  render() {
    const { list } = this.state
    const { value, label } = this.props.propkey || {}
    return (
      <Select onChange={this.onCurrencyChange} value={this.state.value}> 
        {
          list.map(item => {
            return (
            <Select.Option 
              key={item[value] || item.id}
              value={item[value] || item.id}
              >{item[label] || item.name}</Select.Option>
            )
          })
          }
      </Select>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value } = nextProps
    if (!value) return false
    if (value !== prevState)  {
      return {
        value
      }
    }
    return null
  }

  componentDidMount() {
    this.state._isMounted = true
    this.getList()
  }
  componentWillUnmount() {
    this.state._isMounted = false
  }

  getList = () => {
    const data = {
      url: requestUrl[this.props.url]
    }
    commonApi(data).then(res => {
      if (res.data.resCode === 0) {
        if (this.state._isMounted) {
          this.setState({
            list: res.data.data.data
          })
        }
      }
    })
  }
}


 
export default SelectForm;