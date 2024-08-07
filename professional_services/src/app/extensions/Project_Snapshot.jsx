import React, { useState } from "react";
import {
  Alert,
  Button,
  Divider,
  Dropdown,
  Flex,
  Link,
  Statistics,
  StatisticsItem,
  StatisticsTrend,
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
  const snapshotManageOptions = [
    {
      label: "Action recommendation",
      onClick: () => console.log({ message: "Action recommendation" }),
    },
    {
      label: "Ignore recommendation",
      onClick: () => console.log({ message: "Ignore recommendation" }),
    },
  ];

  return (
    <>
      <Flex direction="column" gap="medium">
        <Flex direction="row" justify="start" gap="small">
          <Alert variant="warning">Recommended Action</Alert>
          <Alert variant="danger">Urgent</Alert>
        </Flex>

        <Flex direction="column" gap="extra-small">
          <Text>
            <Text format={{ fontWeight: "bold" }} inline={true}>
              Send email
            </Text>{" "}
            to Project Manager [John Doe] requesting additional meetings to
            discuss scope implications. See recent thread from [09/18/2022] for
            additional context.
          </Text>
          <Link>Review recommendation details</Link>
        </Flex>

        <Divider />

        <Flex>
          <StepIndicator
            currentStep={currentProjectStep}
            stepNames={PROJECT_STEPS}
          />
        </Flex>

        <Statistics>
          <StatisticsItem label="Days to Kickoff" number="0"></StatisticsItem>
          <StatisticsItem label="Days to Delivery" number="47"></StatisticsItem>
          <StatisticsItem label="Remaining Tasks" number="29">
            <StatisticsTrend direction="increase" value="2%" />
          </StatisticsItem>
          <StatisticsItem label="Remaining Hours" number="144">
            <StatisticsTrend direction="increase" value="4%" />
          </StatisticsItem>
        </Statistics>

        <Divider />

        <Flex direction="row" gap="small" justify="end">
          <Button href="hubspot.com">Request additional hours</Button>
          <Dropdown
            options={snapshotManageOptions}
            buttonText="Manage"
            variant="primary"
          />
        </Flex>
      </Flex>
    </>
  );
};
