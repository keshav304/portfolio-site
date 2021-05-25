import React from "react";

import python from "../skills/languages/python.svg";
import javascript from "../skills/languages/javascript.svg";
import html from "../skills/languages/html.svg";
import css from "../skills/languages/css.svg";
import kotlin from "../skills/languages/kotlin.svg";
import cplusplus from "../skills/languages/cplusplus.svg";

import reactjs from "../skills/frameworks/reactjs.svg";
import nodejs from "../skills/frameworks/nodejs.svg";
import expressjs from "../skills/frameworks/expressjs.svg";
import flask from "../skills/frameworks/flask.svg";
import android from "../skills/frameworks/android.svg";

import linux from "../skills/platforms/linux.svg";
import heroku from "../skills/platforms/heroku.svg";
import vercel from "../skills/platforms/vercel.svg";
import github from "../skills/platforms/github.svg";

import git from "../skills/tools/git.svg";
import mongodb from "../skills/tools/mongodb.svg";
import mysql from "../skills/tools/mysql.svg";
import sqlite from "../skills/tools/sqlite.svg";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="skills languages">
            <div>Languages</div>
            <img alt="python" src={python} />
            <img alt="javascript" src={javascript} />
            <img alt="html" src={html} />
            <img alt="css" src={css} />
            <img alt="cplusplus" src={cplusplus} />
            <img alt="kotlin" src={kotlin} />
          </div>
          <div className="skills frameworks">
            <div>Frameworks</div>
            <img alt="reactjs" src={reactjs} />
            <img alt="nodejs" src={nodejs} />
            <img alt="expressjs" src={expressjs} />
            <img alt="android" src={android} />
            <img alt="flask" src={flask} />
          </div>
          <div className="skills platforms">
            <div>Platforms</div>
            <img alt="linux" src={linux} />
            <img alt="github" src={github} />
            <img alt="heroku" src={heroku} />
            <img alt="vercel" src={vercel} />
          </div>
          <div className="skills tools">
            <div>Tools</div>
            <img alt="git" src={git} />
            <img alt="mysql" src={mysql} />
            <img alt="sqlite" src={sqlite} />
            <img alt="mongodb" src={mongodb} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
