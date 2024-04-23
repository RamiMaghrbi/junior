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
];

const TABLE_HEAD = ["Delete","Subject Selected"];


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
        <div className="w-full">
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
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {selectedSubjects.map((subject, index) => (
                                    <tr key={index}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Button onClick={() => removeFromCart(index)}>
                                                <MdDeleteSweep />
                                            </Button>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {subject}
                                            </Typography>
                                        </td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredData.map((item, index) => (
                            <Card key={index} className="rounded bg-gradient-to-br from-blue-700 to-blue-900 w-full px-20">
                                <CardBody>
                                    <Typography variant="h4" color="blue-gray" className="mb-2 pt-5 text-white">
                                        {item.subject}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-5 pb-5">
                                    <Button onClick={() => addToCart(item.subject)} className="rounded bg-[#fdac53] text-white px-20">Add Subject</Button>
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
