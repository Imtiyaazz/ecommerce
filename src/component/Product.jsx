import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Badge, Card, CardContent, Grid, Rating } from "@mui/material";

const Product = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [category, setCategory] = useState([]);
  const [cate, setCate] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const result1 = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setData(result.data);
    setDataCopy(result.data);
    setCategory(result1.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filt = dataCopy.filter((item) => item.category == cate);
    setData(filt);
  }, [cate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      {category.map((item) => (
        <Grid item xs={3}>
          <Button
            onClick={() => setCate(item)}
            fullWidth
            variant="contained"
            color="success"
          >
            {item}
          </Button>
        </Grid>
      ))}

      {data.map((item) => (
        <Grid item xs={3}>
          <Card align="center" sx={{ boxShadow: "5px 5px 5px 1px gray" }}>
            <CardContent>
              <Badge badgeContent={item.price}>
                <img src={item.image} alt="" style={{ height: "150px" }} />
              </Badge>
              <h3>{item.title.substr(0, 25)}...</h3>
              <h3>{item.description.substr(0, 25)}...</h3>
              <h3>{item.category.substr(0, 25)}...</h3>
              <h5>
                <Rating value={item.rating.rate} />
                {item.rating.count}
              </h5>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="secondary">
                    Add
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="warning">
                    Buy
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
