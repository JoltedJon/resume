import { type JSX } from "solid-js/jsx-runtime";
import { render } from "solid-js/web";

import { EDUCATION, WORK, PROJECTS, SKILLS, HEADER } from "./data";

const root = document.getElementById("root")!;

function Heading(props: { children: string }) {
  return <h1 class="text-2xl">{props.children}</h1>;
}

function HeaderSection() {
  return (
    <div class="flex flex-row justify-between">
      <div class="flex flex-col self-center">
        <h1 class="text-3xl">{HEADER.fullName}</h1>
        <h3>{HEADER.caption}</h3>
      </div>
      <div class="flex flex-col items-end">
        <p>{HEADER.location}</p>
        <p>
          <a href={`mailto:${HEADER.email}`}>{HEADER.email}</a>
        </p>
        <p>{HEADER.phone}</p>
        <p>
          <a href={HEADER.linkedinURL}>{HEADER.linkedinURL.replace("https://www.", "").replace(".com/in/", "/")}</a>
        </p>
      </div>
    </div>
  );
}

interface TimedRecordProps {
  title: JSX.Element;
  time: JSX.Element;
  children: JSX.Element;
}
function TimedRecord(props: TimedRecordProps) {
  return (
    <div>
      <div class="border-b border-black flex flex-row justify-between">
        <div>{props.title}</div>
        <div>{props.time}</div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

function EducationSection() {
  return (
    <div>
      <Heading>Education</Heading>
      {EDUCATION.map((record) => (
        <TimedRecord
          title={
            <>
              <b>{record.institution}</b> ({record.location}) &mdash; <b>{record.degreeProgram}</b>
            </>
          }
          time={record.endDate}
        >
          {record.gpa && <p>GPA: {record.gpa}</p>}
          <p>Coursework: {record.coursework}</p>
        </TimedRecord>
      ))}
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div>
      <Heading>Work Experience</Heading>
      {WORK.map((record) => (
        <TimedRecord
          time={`${record.startDate}-${record.endDate}`}
          title={
            <>
              <b>{record.business}</b> <span>{record.location && `(${record.location})`}</span> &mdash;{" "}
              <b>{record.jobTitle}</b>
            </>
          }
        >
          <ul>
            {record.points.map((point) => (
              <li style="display:block">{point}</li>
            ))}
          </ul>
        </TimedRecord>
      ))}
    </div>
  );
}

function SkillsSection() {
  return (
    <div>
      <Heading>Skills</Heading>
      <div class="flex flex-row justify-between">
        {SKILLS.map((record, i) => (
          <div class="">
            <h4 class="font-bold">{record.category}</h4>
            <ul class="border-l border-t border-gray-400 grid grid-rows-10 grid-flow-col gap-x-4 pt-1 pl-2">
              {record.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div>
      <Heading>Projects</Heading>
      {PROJECTS.map((record) => (
        <TimedRecord
          time={`${record.startDate}-${record.endDate}`}
          title={
            <>
              <b>{record.name}</b>{" "}
              {record.website && (
                <>
                  {" "}
                  &mdash;{" "}
                  <a href={record.website} class="text-blue-600">
                    {record.website}
                  </a>
                </>
              )}
            </>
          }
        >
          <ul>
            {record.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </TimedRecord>
      ))}
    </div>
  );
}

function App() {
  return (
    <div class="flex flex-col gap-2">
      <HeaderSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

render(App, root);
