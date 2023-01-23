import { FC } from "react";
import { Container, Grid, Typography, Stack } from "@mui/material";
import Product from "./Blog";
import styles from "./Blogs.module.scss";

export const products = [
  {
    id: 1,
    name: "Cloud Lab. 64",
    description: "クラウドを学ぶためのブログ",
    url: "https://cloud-lab-64.com/",
    image: "/images/cloud-lab-64-logo.png",
  },
  {
    id: 2,
    name: "Code Lab. 128",
    description: "コーディングを学ぶためのブログ",
    url: "https://code-lab-128.com/",
    image: "/images/code-lab-128-logo.png",
  },
  {
    id: 3,
    name: "Hack Lab. 256",
    description: "情報セキュリティを学ぶためのブログ",
    url: "https://hack-lab-256.com/",
    image: "/images/hack-lab-256-logo.png",
  },
  {
    id: 4,
    name: "Teech Lab.",
    description: "日常をつぶやく雑記ブログ（改装予定）",
    url: "https://teech-lab.com/",
    image: "/images/hack-lab-256-logo.png",
  },
  {
    id: 5,
    name: "Enjoy Diary",
    description: "ガジェットブログ（改装予定）",
    url: "https://enjoy-diary.com/",
    image: "/images/hack-lab-256-logo.png",
  },
];

type ProductsProps = {
  title: string;
};

const Products: FC<ProductsProps> = ({ title }): JSX.Element => {
  return (
    <div className={styles.root}>
      <Stack alignItems="center" justifyContent="center" spacing={3}>
        <Typography variant="h4">{title}</Typography>
        {/* 水平方向の中央揃え */}
        <Container className={styles.container}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            sx={{ margin: "20px 4px 10px 4px" }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            className={styles.grid_container}
          >
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </Grid>
        </Container>
      </Stack>
    </div>
  );
};

export default Products;
