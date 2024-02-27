import React from "react";
import Context from "./context";
import Header from "./header";
import PageHeader from "@/components/pageHeader";
import Body from "./body";
import { profile } from "@/assets/data/data";

const Profile = () => {
  return (
    <section className="flex flex-col w-full">
      <PageHeader title={profile.profile} />
      <Context>
        <Header />
        <Body />
      </Context>
    </section>
  );
};

export default Profile;
