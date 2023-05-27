import { Box, Button, Flex, HStack, Switch, Text } from "@chakra-ui/react";
import UrlCard from "../Organisms/UrlCard";
import AddCard from "../Organisms/AddCard";
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
} from "@firebase/firestore";
import { auth, db } from "../../firebase";
import { ListObject } from "../../interfaces/mainInterface";
import { Link } from "react-router-dom";
import SubHeader from "../Templates/SubHeader";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [listsData, setListsData] = useState<ListObject[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const listsRef = collection(db, `users/${user!.uid}/lists`);
      const q = query(listsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        let listsData: ListObject[] = [];
        snapshot.forEach((doc) => {
          listsData.push({ ...doc.data(), docId: doc.id } as ListObject);
        });
        setListsData(listsData);
      });
    }
  }, [user]);

  return (
    <>
      <SubHeader justify="space-between">
        <Link
          to="/question"
          style={{
            color: "black",
            fontFamily: "Noto Sans JP",
            fontSize: "1.2rem",
            textDecoration: "underline",
          }}
        >
          Q. タブが複数個開かない場合はこちら
        </Link>
      </SubHeader>
      <Flex p="5" wrap="wrap">
        {listsData.map((list) => {
          return <UrlCard listData={list} key={list.id} />;
        })}
        <AddCard />
      </Flex>
    </>
  );
}

export default Home;
