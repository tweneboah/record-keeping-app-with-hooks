/** @format */

import React, { useState, useEffect } from "react";
import { Segment, Grid, Button, Container } from "semantic-ui-react";
import EntryForm from "../EntryForm/EntryForm";
import RecordsLists from "./RecordsLists";
import uuid from "uuid";

const RecordsDasboard = () => {
  const myRecords = [
    {
      id: 1,
      user: "Ben",
      image: "https://react.semantic-ui.com/images/avatar/small/lena.png",
      amount: 500,
      description: "This was used for buying land"
    },
    {
      id: 2,
      user: "Prince",
      image: "https://react.semantic-ui.com/images/avatar/small/lena.png",
      amount: 800,
      description: "Paying for Courses"
    },
    {
      id: 3,
      user: "Mark",
      image: "https://react.semantic-ui.com/images/avatar/small/lena.png",
      amount: 900,
      description: "Christmas parties money"
    }
  ];

  const [records, setRecords] = useState(myRecords);
  const [openForm, setFormOpen] = useState(false);
  const [isEditting, setIsEditting] = useState(true);
  const [selectedRecords, setSelectedRecords] = useState(null);

  //Toggle update / submit button

  const editing = () => {
    setIsEditting(true);
  };

  //OPEN FORM
  const formOpen = () => {
    setFormOpen(true);
  };

  const createFormOpen = () => {
    setFormOpen(true);
    setSelectedRecords(null);
    setIsEditting(false);
  };

  //CLOSE FORM
  const formclose = () => {
    setFormOpen();
  };

  //DELETE RECORD
  const deleteRecord = (id) => {
    setRecords((prevRecords) => {
      return [...prevRecords.filter((record) => record.id !== id)];
    });
  };

  //----------FORM SUBMIT---------------
  const onFormSubmit = (data) => {
    setRecords((prevRecords) => {
      //attach an id to this data that's coming into this state
      data.id = uuid();
      return [...prevRecords, data];
    });

    formclose();
  };

  //--------------EDIT-------------------
  //-------------STEPS-------------------
  //1. Create a state and pull the previous data into it
  //   const [selectedRecords, setSelectedRecords] = useState([]);

  //2. Put the data into it

  console.log(selectedRecords);

  const selectedRecordFunction = (record) => {
    setSelectedRecords(() => {
      return { ...record };
    });
    formOpen();
    editing();
  };

  //EDIT

  const editRecord = (formData) => {
    setRecords((prevRecords) => {
      return prevRecords.map((record) => {
        if (record.id === formData.id) {
          return { ...formData };
        } else {
          return record;
        }
      });
    });
    formclose();
  };

  return (
    <>
      <Container style={{ padding: 20 }} textAlign="center">
        <Segment style={{ padding: 20 }}>
          <Segment.Group raised>
            <Grid stackable columns="equal">
              <Grid.Column width={10}>
                {/* TABLE COMPO HERE */}
                <RecordsLists
                  selectedRecordFunction={selectedRecordFunction}
                  records={records}
                  deleteRecord={deleteRecord}
                />
              </Grid.Column>

              <Grid.Column>
                {/* FORM COMPONENT */}

                <Button
                  content="Create a New Record"
                  style={{ margin: 20 }}
                  primary
                  onClick={createFormOpen}
                />
                {openForm && (
                  <EntryForm
                    onFormSubmit={onFormSubmit}
                    formOpen={formOpen}
                    formclose={formclose}
                    selectedRecords={selectedRecords}
                    editRecord={editRecord}
                    isEditting={isEditting}
                  />
                )}
              </Grid.Column>
            </Grid>
          </Segment.Group>
        </Segment>
      </Container>
    </>
  );
};

export default RecordsDasboard;
