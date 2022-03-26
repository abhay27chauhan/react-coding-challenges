import React, { useState, Component, memo } from 'react';
import { shallowEqualObjects as _isEqual} from 'shallow-equal';
import RocketCore from './RocketCore';

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
})

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(preProps){
    return _isEqual(preProps, this.props)
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
