import './globals.css'
import Provider from "@/features/components/Provider"
import Header from "@/features/header/Header"
import Main from "@/features/main/Main"
import Footer from "@/features/footer/Footer"
import {
  Grid,
  GridItem
} from "@/features/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <Grid
        templateAreas={`
          "header header header"
          "nav top space"
          "nav main space"
          "footer footer footer"
        `}
        templateRows="50px 50px 1fr 30px"
        templateColumns="250px 1fr 1fr"
        h="100vh"
        w="100%"
        gap={2}
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="nav">Nav</GridItem>
        <GridItem area="top">Top</GridItem>
        <GridItem area="main">
          <Main>{children}</Main>
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Provider>
  );
}
