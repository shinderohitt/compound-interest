import NumSlider from '../NumSlider.jsx';
import React from 'react';
import Currency from '../CurrentCurrency.jsx';
import Case from '../Case.jsx';

class MultipleExample extends React.Component {
  mainBody = ({ rate, period, multiple, onRateChange, onPeriodChange }) => {
    return (
      <div>
        With{' '}
        <code>
          <NumSlider num={rate} min={1} max={16} onChange={onRateChange} />%
        </code>{' '}
        interest rate, in{' '}
        <code>
          <NumSlider
            num={period}
            step={1}
            min={1}
            max={40}
            onChange={onPeriodChange}
          />
        </code>{' '}
        years your initial investment would grow approximately{' '}
        <code>{multiple}</code> times. <Currency amount={1000} /> would grow to{' '}
        <Currency amount={(1000 * multiple).toFixed(0)} />
        . <Currency amount={1000000} /> would grow to{' '}
        <Currency amount={(1000000 * multiple).toFixed(0)} />
        .
      </div>
    );
  };
  render() {
    const { rate, period } = this.props;

    return (
      <Case rate={rate} period={period}>
        {({ multiple, ...props }) =>
          this.mainBody({
            ...props,
            multiple: multiple && multiple.toFixed(2)
          })}
      </Case>
    );
  }
}

export default MultipleExample;
