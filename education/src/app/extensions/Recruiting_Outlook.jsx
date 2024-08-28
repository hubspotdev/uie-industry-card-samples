import React, { useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Divider,
  Flex,
  StepIndicator,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  hubspot,
} from "@hubspot/ui-extensions";

import { CrmActionButton, CrmPropertyList } from "@hubspot/ui-extensions/crm";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const RECRUITMENT_STEPS = [
  "Qualification",
  "Campus Visit",
  "App Submitted",
  "Review Complete",
  "Offer Letter",
];

const Extension = () => {
  const [currentRecruitmentStep, setCurrentRecruitmentStep] = useState(2);

  return (
    <>
      <Flex direction="column" gap="medium">
        <Flex justify="end">
          <Alert variant="warning">37 days to deadline</Alert>
        </Flex>

        <StepIndicator
          currentStep={currentRecruitmentStep}
          stepNames={RECRUITMENT_STEPS}
        />

        <Divider />

        <Accordion title="Student Details" defaultOpen={true}>
          <Flex direction="column" gap="medium">
            <CrmPropertyList
              objectTypeId="2-33807645"
              objectId="14735542666"
              properties={[
                "alumni_relations",
                "standardized_scores",
                "phone_number",
                "birth_date",
                "street_address",
                "state",
                "country",
                "student_visa",
              ]}
              direction="row"
            />

            <Accordion
              title="Financial Assistance"
              defaultOpen={true}
              size="sm"
            >
              <FinancialAssistanceTable />

              <Flex justify="end" gap="small">
                <CrmActionButton
                  actionType="EXTERNAL_URL"
                  actionContext={{
                    href: "https://www.hubspot.com",
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Send offer letter
                </CrmActionButton>

                <CrmActionButton
                  actionType="SEND_EMAIL"
                  actionContext={{
                    objectTypeId: "2-33807645",
                    objectId: "14735542666",
                  }}
                  variant="primary"
                  size="sm"
                >
                  Send offer letter
                </CrmActionButton>
              </Flex>
            </Accordion>
          </Flex>
        </Accordion>
      </Flex>
    </>
  );
};

const FinancialAssistanceTable = () => {
  return (
    <Table bordered={true}>
      <TableHead>
        <TableRow>
          <TableHeader>Form</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Details</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>FAFSA109</TableCell>
          <TableCell>14.9.22</TableCell>
          <TableCell>Loan</TableCell>
          <TableCell>Submitted</TableCell>
          <TableCell>
            <Button size="sm">View form</Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>FAFSA143</TableCell>
          <TableCell>12.6.22</TableCell>
          <TableCell>Waiver</TableCell>
          <TableCell>Approved</TableCell>
          <TableCell>
            <Button size="sm">View form</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
