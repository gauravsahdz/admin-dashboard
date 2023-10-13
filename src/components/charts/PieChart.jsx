import React from "react";
import { Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const PieChartComponent = () => {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <Grid item xs={12} md={4}>
      <Grid
        item
        xs={4}
        style={{
          backgroundColor: "white",
          borderRadius: "2px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          padding: "10px",
          width: "100%",
          height: "100%",
        }}
        display={{ xs: "none", md: "flex" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        md={12}
        padding={2}
      >
        <h3
          style={{
            textAlign: "left",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0px",
          }}
        >
          Customers
        </h3>
        <p
          style={{
            textAlign: "left",
            fontSize: "14px",
            fontWeight: "400",
            margin: "0px",
            marginBottom: "20px",
          }}
        >
          Customers that buy products
        </p>
        <PieChart
          series={[
            {
              data,
              innerRadius: 40,
            },
          ]}
          {...size}
        >
          <PieCenterLabel>65%</PieCenterLabel>
        </PieChart>
      </Grid>
      {/* Pie Chart end */}
    </Grid>
  );
};

export default PieChartComponent;
