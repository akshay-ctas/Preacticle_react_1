import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Data from "./components/Data";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [tableData, setTableData] = useState([]);
  const tabs = [
    {
      id: 0,
      label: "Form",
      content: <Form tableData={tableData} setTableData={setTableData} />,
    },
    {
      id: 1,
      label: "Data",
      content: <Data tableData={tableData} />,
    },
  ];
  const handleTabs = (id) => {
    setActiveTab(id);
  };
  return (
    <section className="bg-amber-50 min-h-screen max-w-7xl mx-auto p-4">
      <h2 className="font-sans font-bold text-3xl">Form</h2>
      <div className="flex gap-4 mt-3">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded text-black bg-gray-300 ${tab.id === activeTab ? "bg-blue-500 text-blue-950 font-bold" : "bg-white text-black"}`}
              onClick={() => handleTabs(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
        {/* <button className="px-4 py-2 rounded bg-gray-800 text-white">
          Form
        </button>
        <button className="px-4 py-2 rounded bg-gray-800 text-white">
          Data
        </button> */}
      </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/" element={<Data />} />
        </Routes>
      </BrowserRouter> */}
      <div>{tabs[activeTab].content}</div>
    </section>
  );
};

export default App;
