import Tooltip from 'src/components/Slider/Tooltip';
import { valueLookup } from './marks';

const Label = (props) => {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      style={{ top: 25 }}
      enterDelay={100}
      enterNextDelay={200}
      enterTouchDelay={50}
      placement="top"
      title={valueLookup[value]}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default Label;
