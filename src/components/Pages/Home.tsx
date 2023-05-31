import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Switch,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
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
import { Link, useNavigate } from "react-router-dom";
import SubHeader from "../Templates/SubHeader";
import { useAuthState } from "react-firebase-hooks/auth";
import Section from "../Molecules/Section";
import { AiOutlineHome } from "react-icons/ai";

function Home() {
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const [listsData, setListsData] = useState<ListObject[]>([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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
        <Text
          variant="secondary"
          onClick={() => {
            navigate("/account");
          }}
        >
          Account
        </Text>
        {isLargerThan580 && (
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
        )}
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
