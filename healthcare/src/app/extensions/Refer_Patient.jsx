import React, { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  DateInput,
  Divider,
  Flex,
  Input,
  Text,
  TextArea,
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
  const [isRushOrder, setIsRushOrder] = useState(false);

  const referralSourceOptions = [
    { value: "Doctor", label: "Doctor" },
    { value: "Nurse", label: "Nurse" },
    { value: "Other", label: "Other" },
  ];

  const patientStatusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <>
      <Flex direction="column" gap="small">
        <Flex justify="start">
          <Alert variant="warning">Please read</Alert>
        </Flex>

        <Text>
          Please submit this form to refer this patient to a new or existing
          provider who can provide further evaluation and management of their
          medical condition. Remember to include relevant notes of current
          symptoms.
        </Text>

        <Divider />

        <Flex direction="column" gap="small">
          <Flex direction="row">
            <Flex alignSelf="stretch">
              <Select
                label="Referral source"
                name="referral-source"
                placeholder="Doctor"
                required={true}
                options={referralSourceOptions}
              />
            </Flex>

            <Flex alignSelf="stretch">
              <DateInput label="Requested date" name="requested-date" />
            </Flex>
          </Flex>

          <Flex direction="row">
            <Flex alignSelf="stretch">
              <Input
                label="Primary physician"
                name="primary-physician"
                placeholder="First name"
                required={true}
              />
            </Flex>

            <Flex alignSelf="stretch">
              <Select
                label="Patient status"
                name="patient-status"
                placeholder="Active"
                required={true}
                options={patientStatusOptions}
              />
            </Flex>
          </Flex>

          <TextArea
            label="Observed symptoms"
            name="observed-symptoms"
            placeholder="Provide as much detail as possible"
            required={true}
          />

          <Checkbox checked={isRushOrder} name="rush-order">
            Rush order
          </Checkbox>
        </Flex>

        <Flex>
          <Button variant="primary" href="hubspot.com">
            Refer patient
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
