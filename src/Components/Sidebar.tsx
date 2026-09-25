
import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 lg:sticky lg:top-24">
      <h2 className="text-lg font-bold">Your Stack</h2>

      <p className="text-sm text-gray-400 mt-0.5">
        {stack.length === 0
        ? "No technologies selected yet."
      : `${stack.length} Technologies Selected`} 
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 py-8 border border-dashed border-gray-200 rounded-lg text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-3 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex gap-2.5 items-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-red-500 ml-3"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-4 py-2 text-sm font-bold text-red-500 border border-red-200 rounded-lg hover:bg-red-50"
        >
          Remove ALL
        </button>
      )}
    </div>
  );
};

export default Sidebar;
