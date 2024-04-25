import React, { useState } from "react";
import "./search.css";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdDeleteSweep } from "react-icons/md";
import Bp from "../Assets/images/aiu-1.jpg"


const data = [
    {
        subject: "Introduction to Computer Science",
        selected: false,
    },
    {
        subject: "Database Management Systems",
        selected: false,
    },
    {
        subject: "Computer Networks",
        selected: false,
    },
    {
        subject: "Operating Systems",
        selected: false,
    },
    {
        subject: "Software Engineering",
        selected: false,
    },
    {
        subject: "Cybersecurity",
        selected: false,
    },
    {
        subject: "Cybersecurity",
        selected: false,
    },
    {
        subject: "Cybersecurity",
        selected: false,
    },
    {
        subject: "Cybersecurity",
        selected: false,
    },
    {
        subject: "Cybersecurity",
        selected: false,
    },
 
];

const TABLE_HEAD = ["Delete", "Subject Selected"];
const totalHours = 0;


const Preregister = () => {
    const [filterText, setFilterText] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const filteredData = data.filter((item) =>
        item.subject.toLowerCase().includes(filterText.toLowerCase())
    );

    const addToCart = (subject) => {
        setSelectedSubjects([...selectedSubjects, subject]);
    };

    const removeFromCart = (index) => {
        const updatedSelectedSubjects = [...selectedSubjects];
        updatedSelectedSubjects.splice(index, 1);
        setSelectedSubjects(updatedSelectedSubjects);
    };

    return (
        <div className="w-full" >
            <div className="mx-auto px-4 w-full flex flex-col gap-10">
                <div className="relative  w-full sm:max-w-2xl sm:mx-auto">
                    <div className="overflow-hidden z-0 rounded-full relative p-5">
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

                <div className="flex flex-col sm:flex-row gap-10">

                    <Card className={`flex-1 mt-6 table-auto h-full w-full ${selectedSubjects.length > 5 ? 'table-scroll' : ''}`}>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr className="rounded bg-gradient-to-br from-blue-500 to-blue-700">
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 p-4 "
                                        >
                                            <Typography
                                                variant="large"
                                                className="font-normal leading-none text-white"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {selectedSubjects.map((subject, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-gray-200 to-blue-300'}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Button onClick={() => removeFromCart(index)} className="bg-red-400">
                                                <MdDeleteSweep style={{ fontSize: '20px' }}/>
                                            </Button>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50 opacity-70 text-white">
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal"
                                            >
                                                {subject}
                                            </Typography>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-4">
                            <Typography
                                variant="large"
                                className="font-normal leading-none text-black"
                            >
                                Total Hours: {totalHours}
                            </Typography>
                        </div>
                    </Card>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredData.map((item, index) => (
                            <Card key={index} className="rounded bg-white w-full px-19">
                                <CardBody>
                                    <Typography variant="h3" color="blue-gray" className="mb-2 pt-5 op opacity-70 text-black px-5">
                                        {item.subject}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-5 pb-5">
                                    <Button onClick={() => addToCart(item.subject)} className="rounded bg-gradient-to-r from-gray-500 to-blue-600 opacity-70 text-white px-20">Select Subject</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preregister;
