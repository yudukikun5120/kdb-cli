interface Course {
  id: string;
  name: string;
  method: string;
  credits: string;
  standard_course_year: string;
  modules: string;
  period: string;
  classroom: string;
  teaching_staff: string;
  class_outline: string;
  note: string;
  application_for_enrollment: string;
  application_requirements_for_enrollment: string;
  application_for_short_term_international_students: string;
  application_requirements_for_short_term_international_students: string;
  english_course_name: string;
  course_code: string;
  requirement_course_name: string;
  data_update_date: string;
}

interface Courses {
  courses: Course[];
}

const coursesData: Courses = require("./courses.json");

const courses: Course[] = coursesData.courses;

const searchCourses = (searchTerm: string): Course[] => {
  const filteredCourses = courses.filter((course) => {
    const nameMatch = course.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const creditsMatch = course.credits
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || creditsMatch;
  });
  return filteredCourses;
};

const getCourseById = (id: string): Course | undefined =>
  courses.find((course) => course.id === id);

export { Course, searchCourses, getCourseById };
