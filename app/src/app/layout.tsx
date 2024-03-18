'use client';
import { ChakraProvider } from '@chakra-ui/react';
import ProvidersWrapper from '@/components/layouts/ProvidersWrapper/ProvidersWrapper';
import Header from '@/components/layouts/Header/Header';
import Top from '@/components/layouts/Top/Top';
import Sidebar from '@/components/layouts/Sidebar/Sidebar';
import Main from '@/components/layouts/Main/Main';
import Footer from '@/components/layouts/Footer/Footer';
import { Grid, GridItem } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ChakraProvider>
          <ProvidersWrapper>
            <Grid
              templateAreas={`
                "header header"
                "sidebar top"
                "sidebar main"
                "footer footer"
              `}
              templateRows="60px 60px"
              templateColumns="250px 1fr"
              gap={2}
            >
              <GridItem area="header">
                <Header />
              </GridItem>
              <GridItem area="sidebar">
                <Sidebar />
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
          </ProvidersWrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
