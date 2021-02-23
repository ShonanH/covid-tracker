// import React from "react";
// import "./InfoBox.css";
// import { Card, CardContent, Typography } from "@material-ui/core";

// function InfoBox({ title, cases, total, ...props }) {
//   return (
//     <div>
//       <Card className="infoBox">
//         <CardContent>
//           {/* // Title Covid cases */}
//           <Typography className="infoBox__title" color="textSecondary">
//             {title}
//           </Typography>
//           {/* // Number of cases */}
//           <h2 className="infoBox__cases">Today: {cases}</h2>
//           {/* //Total */}
//           <Typography className="infoBox__total" color="textSecondary">
//             Total: {total}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default InfoBox;

import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title">{title}</Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          Today: {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
