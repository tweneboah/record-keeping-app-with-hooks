/** @format */
import React, { useState, useEffect } from "react";
import { Header, Form, TextArea, Button } from "semantic-ui-react";

const EntryForm = ({
  onFormSubmit,
  selectedRecords,
  editRecord,
  formclose,
  isEditting
}) => {
  const [recordsData, setRecordsData] = useState({
    id: "",
    user: "",
    amount: "",
    description: ""
  });

  //inputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecordsData((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  };

  useEffect(() => {
    if (selectedRecords !== null) {
      setRecordsData(() => {
        return {
          ...selectedRecords
        };
      });
    }
  }, [selectedRecords]);
  console.log(recordsData);

  //----------------HANDLE FOR SUBMIT-------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (recordsData.id) {
      return editRecord(recordsData);
    }
    onFormSubmit(recordsData);
  };

  return (
    <>
      <Header as="h2">Add New Record</Header>
      {/* FORM */}
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            value={recordsData.user}
            type="text"
            name="user"
            placeholder="User"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            onChange={handleInputChange}
            value={recordsData.amount}
            type="number"
            name="amount"
            placeholder="Enter Amount"
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            value={recordsData.description}
            onChange={handleInputChange}
            name="description"
            placeholder="Description"
          />
        </Form.Field>

        <Button.Group>
          {isEditting ? (
            <Button positive>Update</Button>
          ) : (
            <Button positive>Submit</Button>
          )}
          <Button.Or />
          <Button onClick={formclose} color="red">
            Cancel
          </Button>
        </Button.Group>
      </Form>
    </>
  );
};

export default EntryForm;
