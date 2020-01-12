/** @format */

import React from "react";
import { Table, Header, Segment } from "semantic-ui-react";
import RecordListItem from "./RecordListItem";

const RecordsLists = ({
  records,
  deleteRecord,
  editRecord,
  selectedRecordFunction,
  editing
}) => {
  return (
    <>
      <Header style={{ padding: 20 }} as="h2">
        RECORDS TABLE
      </Header>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>User/Description</Table.HeaderCell>
            <Table.HeaderCell>Amount (Ghc)</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* It is the responsiblity of component to create a dynamic table row */}

          {records &&
            records.map((record) => {
              return (
                <RecordListItem
                  editRecord={editRecord}
                  key={record.id}
                  record={record}
                  deleteRecord={deleteRecord}
                  selectedRecordFunction={selectedRecordFunction}
                  editing={editing}
                />
              );
            })}
        </Table.Body>

        {/* FOOTER */}
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Segment inverted color="violet" textAlign="center">
                <Header as="h2" content="Total" />
              </Segment>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};

export default RecordsLists;
