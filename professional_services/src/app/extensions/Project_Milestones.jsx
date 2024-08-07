import React, { useState } from "react";
import {
  Alert,
  Button,
  Divider,
  Dropdown,
  Flex,
  Heading,
  ProgressBar,
  StepIndicator,
  Text,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const PROJECT_STEPS = ["Kickoff", "Onsite", "Scoping", "Implement", "Deliver"];

const Extension = () => {
  const [currentProjectStep, setCurrentProjectStep] = useState(3);
  const milestoneManageOptions = [
    {
      label: "Update milestone",
      onClick: () => console.log({ message: "Update milestone" }),
    },
    {
      label: "New milestone",
      onClick: () => console.log({ message: "Add new milestone" }),
    },
  ];

  return (
    <>
      <Flex direction="column" gap="medium">
        <Flex direction="row" justify="between">
          <Heading>Project Milestones</Heading>
          <Alert variant="info">Active</Alert>
        </Flex>

        <Flex>
          <StepIndicator
            currentStep={currentProjectStep}
            stepNames={PROJECT_STEPS}
          />
        </Flex>

        <Text>
          <Text format={{ fontWeight: "bold" }} inline={true}>
            Latest update:
          </Text>{" "}
          Working with Marcus to secure approval from leadership on most recent
          scoping changes.
        </Text>

        <Flex direction="column" gap="flush">
          <ProgressBar
            title="Project Kickoff"
            variant="success"
            value={100}
            maxValue={100}
            valueDescription="100%"
          />

          <ProgressBar
            title="Requirements Scoped"
            variant="warning"
            value={65}
            maxValue={100}
            valueDescription="65%"
          />

          <ProgressBar
            title="Solution Delivered"
            variant="warning"
            value={15}
            maxValue={100}
            valueDescription="15%"
          />
        </Flex>

        <Divider />

        <Flex direction="row" gap="small" justify="end">
          <Button>View Child Tasks</Button>
          <Button>Email Client</Button>
          <Dropdown
            options={milestoneManageOptions}
            buttonText="Manage"
            variant="primary"
          />
        </Flex>
      </Flex>
    </>
  );
};
