import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { SelectStyles } from './ClockStyles';

export default function ColorSelect({clockColor, setClockColor}) {
  const [showColors, setShowColors] = useState(false);

  const colorArray = ['#35A3A3', '#DB686F', '#296CF2', '#77ff41'];

  return (
    <SelectStyles showColors={showColors}>
      <FontAwesomeIcon
        icon={faPalette}
        className="color-picker"
        onClick={() => setShowColors(!showColors)}
      />
      {colorArray.map(c =>
        <FontAwesomeIcon
          icon={faPalette}
          className="color-picker"
          style={{ color: c, zIndex: clockColor === c ? "1" : "0" }} // selected color always on top
          onClick={() => {
            setShowColors(true);
            setClockColor(c);
          }}
        />
      )}
    </SelectStyles>
  );
};