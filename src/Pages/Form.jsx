import React, { useState } from "react";
import InputField from "../Component/InputField";

const Form = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <>
      <section>
        {/* Multi-Step Process */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="py-5 text-center font-semibold">
            Multi-Step Process Form Assignment
          </h3>
          <div className="relative mx-4 sm:mx-10 lg:mx-16">
            <div className="absolute top-2 w-11/12 mx-2 sm:mx-10 -z-40 h-0.5 bg-gray-300"></div>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-4 sm:mx-10 lg:mx-16 gap-4">
            <div className="flex flex-col items-center">
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-green-500 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <li className="text-sm text-center ml-1 sm:ml-3">
                  Business <br /> <span className="ml-1 sm:ml-3">Type</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>
                <li className="text-sm ml-1 text-gray-500 sm:ml-3">
                  Business <br /> <span className="ml-1 sm:ml-3">Details</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-1 sm:ml-3">
                  <span className="ml-2 sm:ml-3">Authorized</span>
                  <br />
                  Representative
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-1 sm:ml-3">
                  Business <br /> <span className="ml-1 sm:ml-3">Owners</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-1 sm:ml-3">
                  Company <br />
                  Directors
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-2 sm:ml-3">
                  <span className="ml-2 sm:ml-3">Support</span> <br />
                  Information
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-2 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-4 sm:ml-3">
                  <span className="ml-1 sm:ml-3">Add</span> <br />
                  Details
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-400 ml-5 sm:ml-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                    clipRule="evenodd"
                  />
                </svg>

                <li className="text-sm text-gray-500 ml-1 sm:ml-3">
                  <span className="ml-1 sm:ml-3">Complete </span>
                  <br /> Registration
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="mx-4 sm:mx-10 lg:mx-64 border-gray-50 shadow-lg py-10 font-sans">
            <div className="px-4 sm:px-10">
              <h2 className="font-semibold text-lg sm:text-xl">
                Tell us more about your business
              </h2>
              <p className="text-sm text-gray-400">
                Your info is like the WiFi password-totally crucial for keeping
                things running, impressing the money folks, and making sure you
                get top-notch service without any buffering.
              </p>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-5xl mx-auto">
                <InputField
                  label="Legal Name"
                  type="text"
                  placeholder="Legal name"
                  required={true}
                />
                <InputField
                  label="Doing Business As"
                  type="text"
                  placeholder="Doing business as"
                  required={true}
                />
                <InputField
                  label="Company Registration Number"
                  type="text"
                  placeholder="Company Registration Number"
                  required={true}
                />
                <InputField
                  label="Random Registration Number"
                  type="text"
                  placeholder="Random Registration Number"
                  required={true}
                />
                <InputField
                  label="Website URL"
                  type="url"
                  placeholder="Website URL"
                  required={true}
                />
                <InputField
                  label="Industry Name"
                  type="select"
                  options={[
                    { label: "Industry Name", value: "" },
                    "Technology",
                    "Healthcare",
                  ]}
                  required={true}
                />
                <InputField
                  label="One Random Dropdown?"
                  type="select"
                  options={[
                    { label: "Options nai options", value: "" },
                    "Option 1",
                    "Option 2",
                  ]}
                  required={true}
                />
                <InputField
                  label="Which Dropdown Would You Like to Select?"
                  type="select"
                  options={["More Options", "Option A", "Option B"]}
                  required={true}
                />
                <InputField
                  label="Another Random Dropdown Appears"
                  type="select"
                  options={[
                    { label: "Return of the options", value: "" },
                    "Option 1",
                    "Option 2",
                  ]}
                  required={true}
                />
                <InputField
                  label="Acoount Usage Intent"
                  type="select"
                  options={["Account Usage Intent", "Option A", "Option B"]}
                  required={true}
                />
                <InputField
                  label="Random Count Per Month"
                  type="number"
                  placeholder="Random count per month"
                  required={true}
                />
                <InputField
                  label="Expected Total Visits in This Page"
                  type="number"
                  placeholder="Expected total visits"
                  required={true}
                />
                <InputField
                  label="Purpose of using fake form"
                  type="textarea"
                  placeholder="Purpose of using fake form"
                  required={true}
                />
                <InputField
                  label="Ek description to banta hai"
                  type="textarea"
                  placeholder="Product Description"
                  required={true}
                />
                <InputField
                  label="Contact Email"
                  type="text"
                  placeholder="Contact Email"
                  required={true}
                />
              </form>

              {/* drag and drop */}
              <div className="container mx-auto px-4 py-6">
                <div className="md:grid-cols-2 gap-6">
                  {/* Certification of Incorporation */}
                  <div className="py-6">
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      Certification of Incorporation{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload the incorporation certificate
                    </p>
                    <div
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-10 h-10 text-gray-400 mb-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <p className="text-md text-gray-500">
                          <span className="font-medium text-blue-600 cursor-pointer hover:underline">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-md text-gray-400">
                          Maximum file size 50 MB
                        </p>
                      </div>

                      {/* Hidden input for file selection */}
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />

                      {/* Display the file name if a file is uploaded */}
                      {file && (
                        <p className="text-md text-gray-600 mt-4">
                          Uploaded File: <strong>{file.name}</strong>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="py-6">
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      Company Logo <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload the company logo
                    </p>
                    <div
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-10 h-10 text-gray-400 mb-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <p className="text-md text-gray-500">
                          <span className="font-medium text-blue-600 cursor-pointer hover:underline">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-md text-gray-400">
                          Maximum file size 50 MB
                        </p>
                      </div>

                      {/* Hidden input for file selection */}
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />

                      {/* Display the file name if a file is uploaded */}
                      {file && (
                        <p className="text-md text-gray-600 mt-4">
                          Uploaded File: <strong>{file.name}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="col-span-1 sm:col-span-2 flex justify-between pt-5">
                <button className="border border-black rounded-lg p-3 font-semibold">
                  Previous
                </button>
                <button className="border rounded-lg py-3 px-6 font-semibold bg-red-600 text-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
