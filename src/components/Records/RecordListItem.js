/** @format */

import React from "react";
import { Table, Header, Image, Icon } from "semantic-ui-react";

const RecordListItem = ({
  record,
  deleteRecord,
  editRecord,
  selectedRecordFunction,
  editing
}) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={record.image} rounded size="mini" />
            <Header.Content>
              {record.user}
              <Header.Subheader>{record.description}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{record.amount}</Table.Cell>
        <Table.Cell>
          <Icon
            onClick={() => deleteRecord(record.id)}
            name="delete"
            color="red"
          />
        </Table.Cell>
        <Table.Cell>
          <Icon
            onClick={() => selectedRecordFunction(record)}
            name="edit"
            color="red"
          />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default RecordListItem;
