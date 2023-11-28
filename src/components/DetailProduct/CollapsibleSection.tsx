import React, { useState } from 'react';
import { Button, Collapse, Card, Typography } from '@mui/material';
import { CardBody } from 'reactstrap';

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
        <Card className="mt-3 flex w-[90%]">
          <CardBody className="grid grid-cols-1 text-center text-justify">
            <Typography>{content}</Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default CollapsibleSection;
