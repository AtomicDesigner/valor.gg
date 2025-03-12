import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(5).fill(false));

  // Example script-based update function
  useEffect(() => {
    setTimeout(() => {
      setCheckedItems((prev) => {
        const newChecked = [...prev];
        newChecked[1] = true; // Example: Check the second item via script
        return newChecked;
      });
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col space-y-2 p-4">
      {checkedItems.map((checked, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center space-x-3 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
        >
          <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-600 dark:border-gray-400 rounded-md">
            {checked && <span className="text-green-500">✔</span>}
          </div>
          <span className="text-gray-800 dark:text-gray-200">Task {index + 1}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedChecklist;