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
          "header header"
          "nav main"
          "footer footer"
        `}
        templateRows="50px 1fr 30px"
        templateColumns="150px 1fr"
        height="100vh"
        gap={1}
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="nav">Nav</GridItem>
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
