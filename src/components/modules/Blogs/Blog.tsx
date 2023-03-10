import { FC } from "react";

import { Card, CardHeader, CardMedia, Grid, ButtonBase } from "@mui/material";

import styles from "./Blog.module.scss";

type ProductProps = {
  product: ProductDetailProps;
};

type ProductDetailProps = {
  name: string;
  description: string;
  url: string;
  image: string;
};

const ProductCard: FC<ProductDetailProps> = ({
  name,
  description,
  url,
  image,
}): JSX.Element => {
  return (
    <ButtonBase href={url} className={styles.croduct_card_button}>
      <Card className={styles.product_card}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardHeader title={name} subheader={description} />
      </Card>
    </ButtonBase>
  );
};

const Product: FC<ProductProps> = ({ product }): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      className={styles.grid_item}
    >
      <ProductCard
        name={product.name}
        description={product.description}
        url={product.url}
        image={product.image}
      />
    </Grid>
  );
};

export default Product;
