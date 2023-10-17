import React from "react";
import { Card, Grid } from "@mui/material";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import "./Dashboard.css";
import ProductSell from "../productTable/ProductSell";
import BarGraph from "../charts/BarGraph";
import PieChartComponent from "../charts/PieChart";
import SearchBar from "../searchbar/SearchBar";
import Navbar from "../navbar/Navbar";

const cards = [
  {
    icon: <CurrencyExchangeOutlinedIcon fontSize="large" />,
    title: "Earning",
    value: "$198k",
    growth: "37.8%",
    bgColor: "rgb(221,255,238)",
    color: "rgb(45,185,106)",
  },
  {
    icon: <DescriptionOutlinedIcon fontSize="large" />,
    title: "Orders",
    value: "$2.4k",
    growth: "2%",
    bgColor: "rgb(231,219,255)",
    color: "rgb(112,71,247)",
  },
  {
    icon: <AccountBalanceWalletOutlinedIcon fontSize="large" />,
    title: "Balance",
    value: "$2.4k",
    growth: "2%",
    bgColor: "rgb(203,242,255)",
    color: "rgb(0,123,255)",
  },
  {
    icon: <ShoppingBagOutlinedIcon fontSize="large" />,
    title: "Total Sales",
    value: "$89k",
    growth: "11%",
    bgColor: "rgb(255,177,217)",
    color: "rgb(255,71,133)",
  },
];

const Dashboard = () => {
 
  return (
    <Grid container spacing={3} className="dashboard">
      {/* header start */}
      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <div className="header">
              <div className="headerTitle">Hello Shahrukh👋🏼,</div>
              <SearchBar size="small" />
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* header end   */}

      {/* card components  start */}
      <Grid item xs={12}>
        {
          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card className="card">
                  <div
                    className="cardIcon"
                    style={{
                      backgroundColor: card.bgColor,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div className="cardTitle">
                    <div className="cardTitleText">{card.title}</div>
                    <div className="cardValue">{card.value}</div>
                    <div className="cardGrowth">
                      {card.growth.split("%")[0] < 10 ? (
                        <ArrowDownwardOutlinedIcon className="negativeGrowth" />
                      ) : (
                        <ArrowUpwardOutlinedIcon className="positiveGrowth" />
                      )}
                      <span
                        className={
                          card.growth.split("%")[0] > 10
                            ? "growthValue positiveGrowth"
                            : "growthValue negativeGrowth"
                        }
                      >
                        {card.growth}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        this month
                      </span>
                    </div>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      </Grid>
      {/* card components end  */}

      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          {/* Bar Graph */}
          <BarGraph />
          {/* Pie Chart */}
          <PieChartComponent />
        </Grid>
      </Grid>

      {/* Product Sell table */}
      <Grid item xs={12} md={12} mr={2}>
        <ProductSell />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
