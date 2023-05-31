import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Header from "./components/Templates/Header";
import Feedback from "./components/Pages/FeedBack";
import Setting from "./components/Pages/Account";
import Sidebar from "./components/Templates/Sidebar";
import Question from "./components/Pages/Question";
import { Flex, Box } from "@chakra-ui/react";
import NotFound from "./components/Pages/NotFound";
import Account from "./components/Pages/Account";
import HowToUse from "./components/Pages/HowToUse";

function AppRouter() {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/howtouse" element={<HowToUse />} />
            <Route path="/account" element={<Account />} />
            <Route path="/question" element={<Question />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Flex>
    </>
  );
}

export default AppRouter;
