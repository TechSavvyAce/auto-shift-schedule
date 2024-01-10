"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from "dayjs";
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];
const Schedule = [
  {
    name: "Leslie",
    no1: "PW",
    no2: "PW",
    no3: "PW",
    no4: "PW",
  },
  {
    name: "Alexander",
    no1: "PW",
    no2: "PW",
    no3: "PW",
    no4: "PW",
  },
  {
    name: "Leslie",
    no1: "PW",
    no2: "PW",
    no3: "PW",
    no4: "PW",
  },
];
const jobs = [
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
  {
    name: "Part Work",
  },
];
const shifts = [
  {
    time: "08-10",
  },
  {
    time: "10-12",
  },
  {
    time: "12-14",
  },
  {
    time: "14-16",
  },
  {
    time: "16-18",
  },
  {
    time: "18-20",
  },
  {
    time: "20-22",
  },
  {
    time: "22-24",
  },
  {
    time: "00-02",
  },
  {
    time: "02-04",
  },
  {
    time: "04-06",
  },
  {
    time: "06-08",
  },
];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Home() {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modal1IsOpen, set1IsOpen] = useState(false);

  function openModal1() {
    set1IsOpen(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal1() {
    set1IsOpen(false);
  }

  const [modal2IsOpen, set2IsOpen] = useState(false);

  function openModal2() {
    set2IsOpen(true);
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal2() {
    set2IsOpen(false);
  }

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    const startDay = new Date(newValue.startDate).getDate();
    const endDay = new Date(newValue.endDate).getDate();
  };
  return (
    <div className="bg-white h-screen p-10">
      <div className="w-full mx-auto max-w-screen-3xl size-full">
        <div className="mx-auto max-w-2xl lg:mx-0 w-full">
          <div className="flex justify-between w-full">
            <div className="w-full">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Schedule Application
              </h2>
              <p className="mt-2 text-sm leading-8 text-gray-600">
                Plan your work in here perfectly for your success job!
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:gap-x-8 gap-y-16 border-t border-gray-200 md:max-w-none md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 h-96">
          <div className="flex flex-col items-center justify-between p-3 rounded-md shadow-md max-h-[48rem]">
            <ul
              role="list"
              className="divide-y divide-gray-100 p-5 overflow-y-scroll w-full"
            >
              {people.map((person) => (
                <li
                  key={person.email}
                  className="flex justify-between gap-x-6 py-5 cursor-pointer hover:bg-indigo-200 active:bg-indigo-500 p-2 rounded-md people"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900 line-clamp-1">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end sm:block md:hidden lg:block">
                    <p className="text-sm leading-6 text-gray-900 line-clamp-1">
                      {person.role}
                    </p>
                    {person.lastSeen ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500 line-clamp-1">
                        Last seen{" "}
                        <time dateTime={person.lastSeenDateTime}>
                          {person.lastSeen}
                        </time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          Online
                        </p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
              <li className=""></li>
            </ul>
            <div className="flex w-full">
              <button
                onClick={openModal}
                className="bg-indigo-600 hover:bg-indigo-800 w-full m-3 text-white p-3 rounded-md shadow-md"
              >
                + Add Member
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add Member Modal"
              >
                <div className="flex justify-between">
                  <h1 className="text-indigo-600 font-bold">+ Add member</h1>
                  <button
                    onClick={closeModal}
                    className="btn bg-indigo-600 hover:bg-indigo-200 text-white rounded-md shadow-md w-6 h-6"
                  >
                    X
                  </button>
                </div>
                <div className="mt-4 flex flex-col w-full gap-5">
                  <input
                    className="border-2 active:border-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 w-full"
                    placeholder="Input member name"
                  ></input>
                  <input
                    className="border-2 active:border-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 w-full"
                    placeholder="Input duty"
                  ></input>
                  <button className="active:outline outline-offset-2 outline-indigo-500 bg-indigo-500 hover:bg-indigo-800 active:bg-indigo-500 text-white rounded-md shadow-md w-full p-2">
                    + add
                  </button>
                </div>
              </Modal>
            </div>
          </div>
          <div className="flex flex-col col-span-2 justify-start shadow-md rounded-md max-h-[48rem] w-full">
            <div className="flex justify-between items-center w-full px-2">
              <div className="p-4 w-full">
                <h2 className="text-gray-600 font-semibold">Schedule State</h2>
                <span className="text-xs">Current Status</span>
              </div>
              <div className="flex w-full border border-gray-300 rounded-md">
                <Datepicker
                  primaryColor={"indigo"}
                  showShortcuts={true}
                  showFooter={true}
                  readOnly={true}
                  // configs={{
                  //   shortcuts: {
                  //     last3Days: {
                  //       text: "Last month",
                  //       period: {
                  //         start: "2024-01-07",
                  //         end: "2024-01-09",
                  //       },
                  //     },
                  //     last1Week: "Last 1 week",
                  //     last2Week: "Last 2 week",
                  //     Today: {
                  //       text: "Today",
                  //       period: {
                  //         start: "2024-01-09",
                  //         end: "2024-01-10",
                  //       },
                  //     },
                  //     next8Days: {
                  //       text: "Next 8 days",
                  //       period: {
                  //         start: "2024-01-11",
                  //         end: "2024-01-18",
                  //       },
                  //     },
                  //   },
                  // }}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="border rounded-b-lg table-wrp block">
                  <table className="min-w-full divide-y divide-gray-200 text-center relative">
                    <thead className="bg-gray-50 sticky top-0 z-2">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        ></th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          1
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          2
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          3
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          4
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 z-1">
                      {Schedule.map((data, index) => (
                        <tr
                          key={index}
                          className="cursor-pointer hover:bg-gray-200"
                        >
                          <th className="sticky left-0 px-0 py-2 text-sm text-gray-800 whitespace-nowrap">
                            {data.name}
                          </th>
                          <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap bg-green-400 cross-line">
                            <a href="#" className="">
                              <div className="grid grid-rows-2 grid-cols-2">
                                <div></div>
                                <div>{data.no1}</div>
                                <div>{data.no1}</div>
                                <div></div>
                              </div>
                            </a>
                          </td>
                          <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap bg-green-300 cross-line">
                            <div className="grid grid-rows-2 grid-cols-2">
                              <div></div>
                              <div>{data.no2}</div>
                              <div>{data.no2}</div>
                              <div></div>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap bg-green-400 cross-line">
                            <div className="grid grid-rows-2 grid-cols-2">
                              <div></div>
                              <div>{data.no3}</div>
                              <div>{data.no3}</div>
                              <div></div>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap bg-green-300 cross-line">
                            <div className="grid grid-rows-2 grid-cols-2">
                              <div></div>
                              <div>{data.no4}</div>
                              <div>{data.no4}</div>
                              <div></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                      <tr className="h-[600px]"></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:gap-y-5 md:col-span-3 md:flex lg:col-span-3 lg:flex xl:grid xl:col-span-1 xl:grid-rows-2 gap-5">
            <div className="flex flex-col w-full items-center justify-between rounded-md p-3 shadow-md h-96">
              <ul
                role="list"
                className="divide-y divide-gray-100 p-5 overflow-y-scroll w-full"
              >
                {jobs.map((data, index) => (
                  <li
                    key={index}
                    className="flex justify-around gap-x-6 py-2 cursor-pointer hover:bg-indigo-200 active:bg-indigo-500 rounded-md"
                  >
                    <p className="text-sm leading-6 text-gray-900">
                      {index + 1}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {data.name}
                    </p>
                  </li>
                ))}
                <li className="h-[300px]"></li>
              </ul>
              <div className="flex w-full">
                <button
                  onClick={openModal1}
                  className="bg-indigo-600 hover:bg-indigo-800 w-full m-3 text-white p-3 rounded-md shadow-md"
                >
                  + Add Job
                </button>
                <Modal
                  isOpen={modal1IsOpen}
                  onAfterOpen={afterOpenModal1}
                  onRequestClose={closeModal1}
                  style={customStyles}
                  contentLabel="Add Member Modal"
                >
                  <div className="flex justify-between">
                    <h1 className="text-indigo-600 font-bold">+ Add Job</h1>
                    <button
                      onClick={closeModal1}
                      className="btn bg-indigo-600 hover:bg-indigo-200 text-white rounded-md shadow-md w-6 h-6"
                    >
                      X
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col w-full gap-5">
                    <input
                      className="border-2 active:border-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 w-full"
                      placeholder="Input job name"
                    ></input>
                    <button className="active:outline outline-offset-2 outline-indigo-500 bg-indigo-500 hover:bg-indigo-800 active:bg-indigo-500 text-white rounded-md shadow-md w-full p-2">
                      + add
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-between rounded-md p-3 shadow-md h-96">
              <ul
                role="list"
                className="divide-y divide-gray-100 p-5 overflow-y-scroll w-full"
              >
                {shifts.map((data, index) => (
                  <li
                    key={index}
                    className="flex justify-around gap-x-6 py-2 cursor-pointer hover:bg-indigo-200 active:bg-indigo-500 rounded-md"
                  >
                    <p className="text-sm leading-6 text-gray-900">
                      {index + 1}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {data.time}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex w-full">
                <button
                  onClick={openModal2}
                  className="bg-indigo-600 hover:bg-indigo-800 w-full m-3 text-white p-3 rounded-md shadow-md"
                >
                  + Add shift time
                </button>
                <Modal
                  isOpen={modal2IsOpen}
                  onAfterOpen={afterOpenModal2}
                  onRequestClose={closeModal2}
                  style={customStyles}
                  contentLabel="Add Member Modal"
                >
                  <div className="flex justify-between">
                    <h1 className="text-indigo-600 font-bold">
                      + Add shift time
                    </h1>
                    <button
                      onClick={closeModal2}
                      className="btn bg-indigo-600 hover:bg-indigo-200 text-white rounded-md shadow-md w-6 h-6"
                    >
                      X
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col w-full gap-5">
                    <input
                      className="border-2 active:border-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 w-full"
                      placeholder="Input shift time"
                    ></input>
                    <button className="active:outline outline-offset-2 outline-indigo-500 bg-indigo-500 hover:bg-indigo-800 active:bg-indigo-500 text-white rounded-md shadow-md w-full p-2">
                      + add
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
