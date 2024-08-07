import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  DateInput,
  Dropdown,
  Flex,
  Form,
  Input,
  NumberInput,
  ProgressBar,
  Select,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const Extension = () => {
  const [isBillable, setIsBillable] = useState(false);

  const categoryOptions = [
    { value: "planning", label: "Project planning" },
    { value: "research", label: "Project research" },
    { value: "development", label: "Project development" },
  ];

  const logTimeOptions = [
    {
      label: "Add time log",
    },
    {
      label: "Modify time log",
    },
  ];

  return (
    <>
      <ProgressBar
        title="Alloted Hours"
        variant="success"
        value={200}
        maxValue={200}
        valueDescription="200"
      />

      <ProgressBar
        title="Billed Hours"
        variant="warning"
        value={56}
        maxValue={200}
        valueDescription="56 of 200"
      />

      <Divider />

      <Form
        onSubmit={() => {
          console.log("Form submitted!");
        }}
      >
        <Flex direction="column" gap="small">
          <Input
            label="Employee Name"
            name="employeeName"
            placeholder="Name"
            type="text"
          />

          <Select
            label="Category"
            name="category"
            tooltip="Select a category that best represents the billable hours."
            placeholder="Select a category"
            options={categoryOptions}
          />

          <NumberInput label="Hours" name="hours" required={true} />

          <DateInput label="Date" name="date" />

          <Checkbox checked={isBillable} name="billable">
            Billable
          </Checkbox>
        </Flex>
      </Form>

      <Divider />

      <Flex direction="row" gap="small" justify="start">
        <Dropdown
          options={logTimeOptions}
          variant="primary"
          buttonSize="md"
          buttonText="Log Time"
        />

        <Button>Past Entries</Button>

        <Button href="hubspot.com">Review Guidelines</Button>
      </Flex>
    </>
  );
};
