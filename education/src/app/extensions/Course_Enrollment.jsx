import React from "react";
import {
  Alert,
  Divider,
  Flex,
  Statistics,
  StatisticsItem,
  StatisticsTrend,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
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
      <Flex direction="column" gap="medium">
        <Statistics>
          <StatisticsItem label="Completed credits" number="16">
            <StatisticsTrend direction="increase" value="200%" />
          </StatisticsItem>
          <StatisticsItem label="Enrolled credits" number="12">
            <StatisticsTrend direction="increase" value="25%" />
          </StatisticsItem>
          <StatisticsItem label="Remaining credits" number="96">
            <StatisticsTrend direction="increase" value="3%" />
          </StatisticsItem>
        </Statistics>

        <Divider />

        <CourseCatalogTable />
      </Flex>
    </>
  );
};

const CourseCatalogTable = () => {
  const courses = [
    {
      name: "Thermodynamics",
      number: "PHY 201",
      faculty: "Jenna Patel",
      enrolled: 137,
      status: "Enrolled",
    },
    {
      name: "Calculus",
      number: "MTH 101",
      faculty: "Marcus Silva",
      enrolled: 98,
      status: "Waitlist",
    },
    {
      name: "Biology",
      number: "BIO 101",
      faculty: "Emily Hayes",
      enrolled: 78,
      status: "Enrolled",
    },
    {
      name: "Chemistry",
      number: "CHE 101",
      faculty: "Jenna Patel",
      enrolled: 56,
      status: "Enrolled",
    },
    {
      name: "Physics",
      number: "PHY 101",
      faculty: "Marcus Silva",
      enrolled: 45,
      status: "Enrolled",
    },
  ];

  return (
    <Table bordered={true} paginated={true} page={1} pageCount={5}>
      <TableHead>
        <TableRow>
          <TableHeader>Course Name</TableHeader>
          <TableHeader>Number</TableHeader>
          <TableHeader>Faculty</TableHeader>
          <TableHeader width="min"># Enrolled</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {courses.map((course) => (
          <TableRow>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.number}</TableCell>
            <TableCell>{course.faculty}</TableCell>
            <TableCell>{course.enrolled}</TableCell>
            <TableCell width="min">
              <Alert
                variant={course.status === "Enrolled" ? "success" : "warning"}
              >
                {course.status}
              </Alert>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
