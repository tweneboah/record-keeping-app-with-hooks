/** @format */

import React from "react";
import { Header, Icon } from "semantic-ui-react";

const AppHeader = () => {
  return (
    <>
      <Header
        as="h3"
        textAlign="center"
        block
        style={{ padding: 30, color: "green", fontSize: 30 }}
      >
        Welcome to Hicotek Record keeping App
      </Header>
      <Header as="h2" icon textAlign="center">
        <Icon name="database" circular />
        <Header.Content>Hicotek Record keeping App</Header.Content>
        <Header.Subheader>
          Hicotek Record keeping app helps you to keep track of your daily
          inventories
        </Header.Subheader>
      </Header>
    </>
  );
};

export default AppHeader;
