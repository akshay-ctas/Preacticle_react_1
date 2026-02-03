import { useState } from "react";
import Form from "../components/Form";
import Data from "../components/Data";
import Infinite from "../components/Infinite";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Form",
      content: <Form />,
    },
    {
      id: 1,
      label: "Data",
      content: <Data />,
    },
    {
      id: 2,
      label: "infinite scrolling",
      content: <Infinite />,
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
      </div>
      <div>{tabs[activeTab].content}</div>
    </section>
  );
};

export default Home;
