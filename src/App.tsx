import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/customTheme";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>QuickURL</title>
      <meta
        name="description"
        content="URLを保存しておけるブックマーク用のサービス"
      />
      <meta name="keywords" content="URL リンク 保存 API通信 pokeAPI" />
      <meta property="og:title" content="QuickURLのHome画面" />
      <meta
        property="og:description"
        content="継続して使うURLのリンクをブックマークとして保存したり、同時に複数のリンクを開くことができるサービスです"
      />
    </Helmet>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  </HelmetProvider>
);
