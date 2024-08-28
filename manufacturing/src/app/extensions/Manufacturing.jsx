import React from "react";
import {
  Divider,
  Button,
  Flex,
  Accordion,
  Alert,
  Heading,
  ProgressBar,
  StepIndicator,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
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
  return (
    <>
      <Accordion title="Order Production Status" defaultOpen={true}>
        <Flex direction={"column"} justify={"start"} gap={"small"}>
          <Alert title="Order Processing" variant="warning">
            Expected order ship date: 09/24/2021
          </Alert>

          <ProgressBar
            title="Materials"
            variant="success"
            value={100}
            maxValue={100}
            valueDescription="100%"
          />

          <ProgressBar
            title="Labor"
            variant="warning"
            value={60}
            maxValue={100}
            valueDescription="60%"
          />

          <Divider />

          <Heading>Production Details</Heading>

          <StepIndicator
            currentStep={3}
            stepNames={[
              "Design",
              "Materials",
              "Carpentry",
              "Upholstery",
              "Inspection",
              "Shipped",
            ]}
          />

          <ProductionDetailsTable />
        </Flex>
      </Accordion>
    </>
  );
};

const ProductionDetailsTable = () => {
  return (
    <Table bordered={true}>
      <TableHead>
        <TableRow>
          <TableHeader>Stage</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Personnel</TableHeader>
          <TableHeader>Details</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Design</TableCell>
          <TableCell>8.26.21</TableCell>
          <TableCell>Complete</TableCell>
          <TableCell>Emily Hayes</TableCell>
          <TableCell>
            <Button size="xs">View step</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Materials</TableCell>
          <TableCell>9.15.21</TableCell>
          <TableCell>Complete</TableCell>
          <TableCell>Marcus Silva</TableCell>
          <TableCell>
            <Button size="xs">View step</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
