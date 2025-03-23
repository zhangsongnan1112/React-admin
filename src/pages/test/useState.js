import { useState, useEffect , useRef} from 'react';
import { Form, Input, Button,  message, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';





const Counter = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    countRef.current = count;

    console.log('countRef.current:', countRef.current, 'count:', count, '外面')
    const navigate = useNavigate();
    const handlerChange = () => {
      setTimeout(() => {
        console.log('countRef.current:', countRef.current, 'count:', count, '里面')
      }, 1000)
    }

    const handleClick = () => {
      navigate('/department/list');
    };

    return (
      <div>
        <h2>useSatet 闭包的问题 ， 可以用useEffect、 或者是useRef</h2>
        <Button onClick={() => setCount(count + 1)}>加1</Button>
        <Button onClick={handlerChange}>Log Count after 1s</Button>
        <Button onClick={handleClick}>跳转</Button>
      </div>
    )
  }

export default  Counter



new Promise((reslove, reject) => {
  reject(1)
})
.then((val) => {
  return new Promise((reslove, reject) => {
    reject(22)
  })
}, erro => {console.log(erro, 222)})
.then((val) => {console.log(val)})
.catch((error) => {console.log(error,333)})


function defineReactiveArray(arr, callback) {
  const arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  const originalArray = Array.prototype;
  const arrayProto = Object.create(originalArray);

  arrayMethods.forEach(method => {
      Object.defineProperty(arrayProto, method, {
          value: function (...args) {
              const result = originalArray[method].apply(this, args);
              callback();
              return result;
          },
          enumerable: false,
          writable: true,
          configurable: true
      });
  });

  arr.__proto__ = arrayProto;
}

// 使用示例
const myArray = [1, 2, 3];
defineReactiveArray(myArray, () => {
  console.log('数组已更新:', myArray);
});

myArray.push(4); // 输出: 数组已更新: [1, 2, 3, 4]