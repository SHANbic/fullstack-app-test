import React from 'react';

const Select = ({ onHandleChange, value }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="group-device">
          Devices
        </label>
      </div>
      <select
        value={value}
        onChange={device => onHandleChange(device)}
        id="group-device"
      >
        <option className="custom-select">Select a device</option>
        <option value="PS4">PS4</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
      </select>
    </div>
  );
};

export default Select;
