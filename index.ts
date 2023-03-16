#!/usr/bin/env node

import inquirer from "inquirer";
import pc from "picocolors";
import { Course, searchCourses, getCourseById } from "./courses";

async function searchCourse(): Promise<void> {
  const searchResult = await inquirer.prompt([
    {
      type: "input",
      name: "search",
      message: "Enter course name or credits to search:",
    },
  ]);

  const courses = searchCourses(searchResult.search);

  if (courses.length === 0) {
    console.log("No matching courses found.");
    return;
  }

  const courseList = courses.map((course) => ({
    name: `${course.name} (${course.credits})`,
    value: course.id,
  }));

  const selectedCourse = await inquirer.prompt([
    {
      type: "list",
      name: "id",
      message: "Select a course to view details:",
      choices: courseList,
    },
  ]);

  const courseDetails = getCourseById(selectedCourse.id) as Course;

  Object.entries(courseDetails)
    .filter(([, value]) => value)
    .forEach(([key, value]) =>
      console.log(`${pc.bold(toTitleCase(key))}: ${value}`)
    );
}

const toTitleCase = (str: string): string =>
  str
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

searchCourse();
