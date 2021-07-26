/* eslint-disable react/prop-types */
import React from 'react';

const Result = (props) => (
  <div className='rightside'>
    <div className='results'>
      <div className='tip-amount'>
        <h5>Tip Amount
          <div>
            <h6>
            / person
            </h6>
          </div>
          </h5>
        <span>{`$${props.tip || '0.00'}`}</span>
      </div>
      <div className='total'>
        <h5>Total
          <div>
            <h6>
              / person
            </h6>
          </div>
        </h5>
        <span>{`$${props.total || '0.00'}`}</span>
      </div>
      <button onClick={() => {
        props.reset();
      }}>RESET</button>
    </div>
  </div>
)

export default Result