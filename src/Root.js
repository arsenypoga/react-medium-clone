import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class Root extends Component {
    componentDidMount() {
        this
            .props
            .store
            .getTags()
    }
    render() {
        return (
            <div className="container">
                {this
                    .props
                    .store
                    .tags
                    .map((item, key) => {
                        console.log(item)
                        return (
                            <h1 key={key}>{item}</h1>
                        )
                    })}
            </div>
        )

    }
}

export default Root