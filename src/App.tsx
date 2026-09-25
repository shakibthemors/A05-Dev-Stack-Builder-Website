import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import TechList from "./Components/TechList";
import Footer from "./Components/Footer";
import type { Technology } from "./types";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning("Already added to stack");
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Added to Stack");
  };
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => 
      previousStack.filter((item) => item.id !== id));
    toast.info("Technology removed!");
};
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };
  return (
    <div>
      <Navbar />
      <Banner />
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <TechList stack={stack} handleAddToStack={handleAddToStack} />
          </div>
          <div className="lg:pt-31">
          <Sidebar
            stack={stack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
