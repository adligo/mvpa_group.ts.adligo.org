/**
  * Copyright 2025 Adligo Inc / Scott Morgan
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.l
  */

class Project {
  name;
  buildable = false;
  hasTestsInternal = false;

  constructor(name, buildable, hasTests) {
    this.name = name;
    if (buildable != undefined) {
      this.buildable = buildable;
    }
    if (hasTests != undefined) {
      this.hasTestsInternal = hasTests;
    }
  }

  getName() { return this.name; }
  isBuildable() { return this.buildable; }
  hasTests() { return this.hasTestsInternal; }

}
const projects = [new Project('i_mvpa.ts.adligo.org', true),
  new Project('mvpa.ts.adligo.org', true)
];

Object.freeze(projects);
console.log('There are ' + projects.length + ' projects');

module.exports = projects;