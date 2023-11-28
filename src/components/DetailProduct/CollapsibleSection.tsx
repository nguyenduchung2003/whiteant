import React, { useState } from 'react';
import { Button, Collapse, Typography } from '@mui/material';

interface CollapsibleSectionProps {
  title?: string;
  content?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setVisible(!visible);
  };

  return (
    <>
      <Button className="bg-black text-white w-[90%] text-xs" href="#" onClick={handleToggle}>
        {title}
      </Button>
      <Collapse in={visible}>
            <Typography className="flex w-[90%]">{content}</Typography>
      </Collapse>
    </>
  );
};

export default CollapsibleSection;
