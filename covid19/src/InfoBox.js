import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          {/* // Title Covid cases */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/* // Number of cases */}
          <h2 className="infoBox__cases">{cases}</h2>
          {/* //Total */}
          <Typography className="infoBox__total" color="textSecondary">
            {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
