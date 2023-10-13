import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";
import { ChartContainer, BarPlot } from "@mui/x-charts";

const BarGraph = () => {
  const uData = [
    2200, 1500, 3500, 2480, 3290, 1190, 3300, 3650, 3400, 3100, 2900, 2790,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const maxDataValue = Math.max(...uData);
  const colors = uData.map((value) =>
    value === maxDataValue ? "rgb(90, 50, 234)" : "rgb(242, 239, 255)"
  );

  return (
    <Grid item xs={12} md={8}>
      <Grid
        item
        xs={12}
        md={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        borderRadius={2}
        backgroundColor="white"
      >
        <Grid
          item
          xs={12}
          display={{ xs: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Grid item xs={8} md={8} padding={2}>
            <h3
              style={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0px",
              }}
            >
              Overview
            </h3>
            <p
              style={{
                textAlign: "left",
                fontSize: "14px",
                fontWeight: "400",
                margin: "0px",
              }}
            >
              Monthly Earning
            </p>
          </Grid>

          <Grid item xs={4} style={{ textAlign: "center" }}>
            <TextField
              select
              label="Select"
              size="small"
              variant="outlined"
              style={{ width: "50%" }}
            >
              <MenuItem value="Quaterly">Quaterly</MenuItem>
              <MenuItem value="Month">Month</MenuItem>
              <MenuItem value="Week">Week</MenuItem>
              <MenuItem value="Day">Day</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <ChartContainer
          width={700}
          height={300}
          series={[{ data: uData, label: "uv", type: "bar" }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
          colors={colors}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <BarPlot />
        </ChartContainer>
      </Grid>
      {/* Bar Graph end */}
    </Grid>
  );
};

export default BarGraph;
