import React, { Component, PureComponent} from 'react';

class ChildComponent extends PureComponent {
    constructor(props) {
        super();
        console.log('子组件: constructor');
    }
    state = {
        someValue:  'default value'
    };

    static getDerivedStateFromProps(props, state) {
        console.log('子组件: getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('子组件: componentDidMount');
    }

    // shouldComponentUpdate() {
    //     console.log('子组件: shouldComponentUpdate');
    //     return true
    // }


    getSnapshotBeforeUpdate() {
        console.log('子组件: getSnapshotBeforeUpdate');
        return null
    }
   
    componentDidUpdate() {
        console.log('子组件: componentDidUpdate');
    }

    render() {
        console.log('子组件: render');
        return <div>子组件</div>;
    }
}




class LifeClass extends PureComponent {
    constructor(props) {
        super();
        console.log('父组件: constructor');
    }
    state = {
        someValue: 'default value'
    };

    static getDerivedStateFromProps(props, state) {
        console.log('父组件: getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('父组件: componentDidMount');
    }

    // shouldComponentUpdate() {
    //     console.log('父组件: shouldComponentUpdate');
    //     return true
    // }

    getSnapshotBeforeUpdate() {
        console.log('父组件: getSnapshotBeforeUpdate');
        return null
    }
   

    componentDidUpdate() {
        console.log('父组件: componentDidUpdate');
    }

    render() {
        console.log('父组件: render');
        return (
            <div>
                <h2>父子组件生命周期嵌套的执行顺序</h2>
                <ChildComponent />
            </div>
        );
    }
}

export default LifeClass;