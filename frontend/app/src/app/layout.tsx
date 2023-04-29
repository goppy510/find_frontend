import './globals.css'
import ProvidersWrapper from './ProvidersWrapper'
import Provider from "@/features/components/Provider"
import Header from "@/features/header/Header"
import Top from '@/features/top/Top'
import SideBar from '@/features/sidebar/SideBar'
import Main from "@/features/main/Main"
import Footer from "@/features/footer/Footer"
import { Grid, GridItem } from "@/features/components";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ProvidersWrapper>
          <Provider>
            <Grid
              templateAreas={`
                "header header header"
                "sideBar top space"
                "sideBar main space"
                "footer footer footer"
              `}
              templateRows="0.5fr 1fr 10fr 0.5fr"
              templateColumns="2fr 8fr 1fr"
              gap={2}
            >
              <GridItem area="header">
                <Header />
              </GridItem>
              <GridItem area="sideBar">
                <SideBar />
              </GridItem>
              <GridItem area="top">
                <Top />
              </GridItem>
              <GridItem area="main">
                <Main>{children}</Main>
              </GridItem>
              <GridItem area="footer">
                <Footer />
              </GridItem>
            </Grid>
          </Provider>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
