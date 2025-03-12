import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedChecklist = () => {
    const descRef = useRef(null);
    const numberOfItems = 10;
  
    // Initialize tasks with custom names and all unchecked
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
      new Array(numberOfItems).fill(false)
    );
  
    const taskNames = [
      "Finish project documentation",
      "Fix UI bugs",
      "Write unit tests",
      "Update API endpoints",
      "Prepare release notes",
      "Review pull requests",
      "Deploy application",
      "Test new features",
      "Update dependencies",
      "Monitor system performance",
    ];
  
    useEffect(() => {
      setTimeout(() => {
        setCheckedItems((prev) => {
          const newChecked = [...prev];
          newChecked[1] = true;
          return newChecked;
        });
      }, 2000);
  
      setTimeout(() => {
        setCheckedItems((prev) => {
          const newChecked = [...prev];
          newChecked[4] = true;
          return newChecked;
        });
      }, 4000);
    }, []);
  
    return (
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: "translateY(30px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.39, 0.21, 0.12, 0.96],
          }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <div className="flex flex-col space-y-2 p-4">
            <h2 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
              To Do:
            </h2>
            {checkedItems.map((checked, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-2 bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
              >
                <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-600 dark:border-gray-400 rounded-md">
                  {checked && <span className="text-green-500">✔</span>}
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  {taskNames[index]} {/* Custom task names */}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  };

export default AnimatedChecklist;