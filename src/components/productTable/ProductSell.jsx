import React, { useState } from "react";
import {
  Card,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SearchBar from "../searchbar/SearchBar";

const ProductSell = () => {
  const [days, setDays] = useState(7); // default to last 7 days

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  const tableData = [
    {
      product: {
        name: "Abstract 3D",
        description: "This is a description",
        image:
          "https://www.jotform.com/blog/wp-content/uploads/2010/05/3d-abstract-banner.jpg",
      },
      stock: 11,
      price: 45.77,
      sales: 5,
    },
    {
      product: {
        name: "Sarphens Illustration",
        description: "This is a description 2",
        image:
          "https://lh4.googleusercontent.com/XFsYP63Y4l8Q2hStgEJSEFSTMrTbOmiL-KAw9kRBvgwTw7vmNh2tHpK3VnnhRJXVjNrNTc2z_FL4QIG92VMN__w40U8Yd0-_Kx1KVjsszTDbfz9-ss7wIVsNv2q93QqmPPskE4j8",
      },
      stock: 20,
      price: 35.78,
      sales: 10,
    },
    {
      product: {
        name: "Product C",
        description: "This is a description 3",
        image:
          "https://wallpapers.com/images/featured/3d-abstract-qi0b0ijfayv4d8ru.jpg",
      },
      stock: 30,
      price: 56.43,
      sales: 15,
    },
  ];

  return (
    <Card style={{ padding: "20px", width: "100%" }}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h3>Product Sell</h3>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <SearchBar size="small" width={80} />
              <TextField
                select
                label="Last"
                value={days}
                onChange={handleChange}
                size="small"
                variant="outlined"
                style={{
                  marginLeft: "10px",
                }}
              >
                <MenuItem value={7}>7 days</MenuItem>
                <MenuItem value={14}>14 days</MenuItem>
                <MenuItem value={30}>30 days</MenuItem>
              </TextField>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "50%" }}>Product Name</TableCell>
                <TableCell align="right" style={{ width: "10%" }}>
                  Stock
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                  Price
                </TableCell>
                <TableCell align="right" style={{ width: "20%" }}>
                  Sales
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={row.product.image}
                        alt="product"
                        height={40}
                        width={60}
                        style={{ marginRight: "10px", borderRadius: "5px" }}
                      />
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {row.product.name}
                      </span>
                      <br />
                      {row.product.description}
                    </div>
                  </TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Card>
  );
};

export default ProductSell;
