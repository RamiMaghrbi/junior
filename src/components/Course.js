// import React from "react";
import DataTable from "react-data-table-component";
import React, { useState } from "react";
import "./search.css";
const data = [
  {
    subject: "Introduction to Computer Science",
    hours: 3,
    prerequisite: "None",
    description:
      "This course covers the fundamentals of computer science, including programming concepts, algorithms, data structures, and software development principles.",
    activity: "Theoretical",
  },
  {
    subject: "Database Management Systems",
    hours: 3,
    prerequisite: "None",
    description:
      "This course focuses on the principles and techniques of designing, implementing, and managing databases. Topics may include relational database concepts, SQL programming, database administration, and data modeling.",
    activity: "Theoretical",
  },
  {
    subject: "Computer Networks",
    hours: 3,
    prerequisite: "Introduction to Computer Science",
    description:
      "This course explores the architecture, protocols, and technologies used in computer networks. Topics may include network layers, TCP/IP protocol suite, network security, and network management.",
    activity: "Theoretical",
  },
  {
    subject: "Operating Systems",
    hours: 3,
    prerequisite: "Introduction to Computer Science",
    description:
      "This course delves into the theory and principles behind operating systems, including process management, memory management, file systems, and device management. Students may also learn about different types of operating systems such as Unix/Linux, Windows, and real-time operating systems.",
    activity: "Theoretical",
  },
  {
    subject: "Software Engineering",
    hours: 4,
    prerequisite: "Introduction to Computer Science",
    description:
      "This course covers the principles and practices of software development, including requirements analysis, software design, implementation, testing, and maintenance. Students may also learn about software development methodologies such as Agile and Waterfall.",
    activity: "Theoretical",
  },
  {
    subject: "Cybersecurity",
    hours: 3,
    prerequisite: "Introduction to Computer Science",
    description:
      "This course focuses on techniques and strategies for protecting computer systems, networks, and data from security threats. Topics may include cryptography, network security, ethical hacking, and risk management.",
    activity: "Theoretical",
  },
];
const columns = [
  {
    name: "Name of course",
    selector: (row) => row.subject,
    sortable: true,
  },
  {
    name: "hours",
    selector: (row) => row.hours,
    sortable: true,
  },
  {
    name: " prerequisite",
    selector: (row) => row.prerequisite,
    sortable: true,
  },
  {
    name: "Activity",
    selector: (row) => row.activity,
    sortable: true,
  },
  {
    name: " description ",
    cell: (row) => (
      <div>
        {row.description.split(" ").slice(0, 5).join(" ")}
        {row.description.split(" ").length > 5 && " ..."}
      </div>
    ),
  },
];

const DescriptionPopup = ({ subject, description, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 max-w-md z-50">
        <h2 className="text-lg font-bold mb-2">{subject}</h2>
        <p className="mb-4">{description}</p>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const DataTableExample = () => {
  const [filterText, setFilterText] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.subject.toLowerCase().includes(filterText.toLowerCase()) ||
      item.prerequisite.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleRowClick = (row) => {
    setSelectedSubject(row.subject);
    setSelectedDescription(row.description);
  };

  const closePopup = () => {
    setSelectedSubject("");
    setSelectedDescription("");
  };

  return (
    <div className="w-full">
      <div className="mx-auto px-4 w-full flex flex-col gap-10">
        <div className="relative  w-full sm:max-w-xl sm:mx-auto">
          <div className="overflow-hidden z-0 rounded-full relative p-4">
            <form
              role="form"
              className="relative flex z-50 bg-white rounded-full"
            >
              <input
                type="text"
                placeholder="Enter your search here"
                className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </form>
            <div className="glow glow-1 z-10 bg-blue-300 absolute"></div>
            <div className="glow glow-2 z-20 bg-blue-500 absolute"></div>
            <div className="glow glow-3 z-30 bg-blue-700 absolute"></div>
            <div className="glow glow-4 z-40 bg-blue-900 absolute"></div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          pointerOnHover
          className="rounded-lg shadow-md rounded-lg "
          customStyles={{
            headRow: {
              style: {
                background: "rgb(14,30,125)",
                background:
                  "linear-gradient(270deg, rgba(14,30,125,1) 31%, rgba(65,70,166,1) 76%)",
              },
            },
            headCells: {
              style: {
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
              },
            },
            rows: {
              style: {
                "&:nth-of-type(even)": {
                  background: "rgb(201,200,223)",
                  background:
                    "linear-gradient(270deg, rgba(201,200,223,1) 16%, rgba(126,171,221,1) 100%)",
                },
              },
            },
            cells: {
              style: {
                color: "#374151",
                fontSize: "0.875rem",
              },
            },
          }}
          onRowClicked={(row) => handleRowClick(row)}
        />
      </div>
      {
        selectedSubject && selectedDescription && (
          <DescriptionPopup
            subject={selectedSubject}
            description={selectedDescription}
            onClose={closePopup}
          />
        )
      }
    </div >
  );
};

export default DataTableExample;
