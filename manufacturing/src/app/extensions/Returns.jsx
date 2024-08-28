import React  from "react";
import {
  Button,
  Flex,
  Accordion,
  Alert,
  Checkbox,
  Form,
  Input,
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

const Extension = ({ context, runServerless, sendAlert }) => {
  return (
    <>
      <Accordion title="Initiate Return" defaultOpen={true}>
        <Flex direction={"column"} justify={"start"} gap={"medium"}>
          <Alert title="Start here:" variant="warning">
            Before returning, please ensure that the item meets all eligibility
            requirements. Refunds must be approved through a collections ticket.{" "}
          </Alert>

          <Form
            onSubmit={() => {
              console.log("Form submitted!");
            }}
          >
            <Flex direction={"column"} justify={"start"} gap={"small"}>
              <Input label="Return reason" name="return-reason" required />

              <Input label="Order #" name="order-number" required />

              <Checkbox name="refund-status">Refund approved</Checkbox>

              <Button
                href="https://www.hubspot.com"
                variant="primary"
                type="submit"
              >
                Request return
              </Button>

            </Flex>

          </Form>

          <Accordion title="Associated Products" defaultOpen={true}>
            <AssociatedProductsTable />
          </Accordion>
        </Flex>
      </Accordion>
    </>
  );
};

const AssociatedProductsTable = () => {
  return (
    <Table bordered={true}>
      <TableHead>
        <TableRow>
          <TableHeader>SKU</TableHeader>
          <TableHeader>TYPE</TableHeader>
          <TableHeader>STATUS</TableHeader>
          <TableHeader>LIST PRICE</TableHeader>
          <TableHeader>ACTION</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>4352342</TableCell>
          <TableCell>SOFA</TableCell>
          <TableCell>DELIVERED</TableCell>
          <TableCell>$2,9000</TableCell>
          <TableCell>
            <Button size="xs">Return</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
