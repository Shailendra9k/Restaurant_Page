import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Section = (props) => {
  const { header, children } = props;
  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h1">
          {header}
        </Typography>
        {children}
      </Container>
    </>
  );
};

export default Section;
