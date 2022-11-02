// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return "";
  }
  switch (license) {
    case "None":
      return "";
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case 'BSD 2-Clause "Simplified" License':
      return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    case "Boost Software License 1.0":
      return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    case "Creative Commons Zero v1.0 Universal":
      return "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
    case "Eclipse Public License 2.0":
      return "https://img.shields.io/badge/License-EPL_1.0-red.svg";
    case "GNU Affero General Public License v3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "GNU General Public License v2.0":
      return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
    case "GNU Lesser General Public License v2.1":
      return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    case "The Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseUrl(license) {
  if (license == null) {
    return "";
  }
  switch (license) {
    case "None":
      return "";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case 'BSD 2-Clause "Simplified" License':
      return "https://opensource.org/licenses/BSD-2-Clause";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case "Eclipse Public License 2.0":
      return "https://opensource.org/licenses/EPL-1.0";
    case "GNU Affero General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "GNU Lesser General Public License v2.1":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "The Unlicense":
      return "http://unlicense.org/";
  }
}


function getLicenseDescription(license) {
  if (license == null) {
    return "";
  }
  switch (license) {
    case "None":
      return "";
    case "Apache License 2.0":
      return "You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.";
    case "GNU General Public License v3.0":
      return "... GNU LESSER GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright © 2007 Free Software, Public License incorporates the terms and conditions of version 3 of the GNU General Public License, herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL,” refers to version 3 of the GNU General Public License. “The Library” refers to a covered work,. Revised Versions of the GNU Lesser General Public License. The Free Software Foundation may publish...";
    case "MIT License":
      return "A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.";
    case 'BSD 2-Clause "Simplified" License':
      return "... The BSD 2-Clause License The following is a BSD 2-Clause license template. To generate your own,, and substitute your own. Note: see also the BSD-3-Clause license. This prelude is not part of the, In the original BSD license, both occurrences of the phrase 'COPYRIGHT HOLDERS AND CONTRIBUTORS, license, change the values of OWNER, ORGANIZATION and YEAR from their original values as given here, license. = Regents of the University of California = University of California, Berkeley = 1998...";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "... The BSD 3-Clause License The following is a BSD 3-Clause ('BSD New' or 'BSD Simplified') license, license; it was followed by the even newer BSD-2-Clause version, sometimes known as the 'Simplified BSD, License'. On January 9th, 2008 the OSI Board approved BSD-2-Clause, which is used by FreeBSD and,. Historical Background: The original license used on BSD Unix had four clauses. The advertising clause, original values as given here, and substitute your own. Note: You may omit clause 3 and still be...";
    case "Boost Software License 1.0":
      return "This is a simple license that includes a clause on warranty, and encourages free and open use of software licensed under it. You must include the original copyright and this license in software unless in the form of “machine-executable object code generated by a source processor.";
    case "Creative Commons Zero v1.0 Universal":
      return "... contributing to a commons of creative, cultural and scientific works ('Commons') that the public can, understands and acknowledges that Creative Commons is not a party to this document and has no,, including without limitation commercial purposes. These owners may contribute to the Commons to, promote the ideal of a free culture and the further production of creative, cultural and...";
    case "Eclipse Public License 2.0":
      return "... DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam, YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. You just DO WHAT THE F*** YOU WANT TO. , this license document, and changing it is allowed as long as the name is changed. DO WHAT THE F***...";
    case "GNU Affero General Public License v3.0":
      return "... GNU Affero General Public License is designed specifically to ensure that, in such cases, the, versions of the GNU Affero General Public License from time to time. Such new versions will be, numbered version of the GNU Affero General Public License 'or any later version' 'applies to it, you have, the GNU Affero General Public License, you may choose any version ever published by the Free, PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have...";
    case "GNU General Public License v2.0":
      return "You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.";
    case "GNU Lesser General Public License v2.1":
      return "... GNU LESSER GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright © 2007 Free Software, herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL,. Revised Versions of the GNU Lesser General Public License. The Free Software Foundation may publish, revised and/or new versions of the GNU Lesser General Public License from time to time. Such new, it specifies that a certain numbered version of the GNU Lesser General Public License “or any later...";
    case "Mozilla Public License 2.0":
      return "... DO WHAT THE F*** YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam, YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. You just DO WHAT THE F*** YOU WANT TO. , this license document, and changing it is allowed as long as the name is changed. DO WHAT THE F***...";
    case "The Unlicense":
      return "... This is free and unencumbered software released into the public domain. Anyone is free to copy, that recognize copyright laws, the author or authors of this software dedicate any and all copyright, interest in the software to the public domain.  We make this dedication for the benefit of the, public at large and to the detriment of our heirs and successors.  We intend this dedication, under copyright law. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR...";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let badgeUrl = renderLicenseUrl(license);
  if (license === "None") {
    return "";
  } else {
    return `[![License: ${license}](${badge})](${badgeUrl})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table of Contents 
  [Instructions & Usage](#instructions--usage)
  [Application Image](#application-image)
  [License](#license)
  [Contributor & Sources](#contributor--sources)
  [Application Test](#application-test)
  [Questions](#questions)

  ## Instructions & Usage 
  ${data.instructionsAndUsage}

  ## Application Image 
  ${data.screenshot}

  ## License 
  ${getLicenseDescription(data.license)}

  ## Contributor & Sources 
  ${data.contributorsSourcesTutorials}

  ## Application Test
  ${data.applicationTest}

  ## Questions 
  https://github.com/${data.username}

 ${data.email}

`;
}

module.exports = generateMarkdown;
