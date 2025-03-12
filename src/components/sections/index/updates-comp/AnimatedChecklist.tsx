import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedChecklist = () => {
    const descRef = useRef(null);
  
    // Define categories and tasks with initial checked states
    const checklist = [
      {
        category: "ModMail System",
        tasks: [
          { name: "Set up basic ModMail functionality", checked: true },
          { name: "Create ticket system for user inquiries", checked: true },
          { name: "Implement message logging", checked: false },
          { name: "Add auto-response features", checked: true },
          { name: "Set up staff notification system", checked: true },
        ],
      },
      {
        category: "Cases Pages",
        tasks: [
          { name: "Design case template structure", checked: true },
          { name: "Implement case tracking system", checked: true },
          { name: "Create case status updates", checked: true },
          { name: "Add case assignment features", checked: true },
          { name: "Set up case archiving system", checked: true },
        ],
      },
      {
        category: "Help Command",
        tasks: [
          { name: "Create basic help menu structure", checked: true },
          { name: "Write command documentation", checked: true },
          { name: "Implement category system", checked: true },
          { name: "Add search functionality", checked: true },
          { name: "Create interactive help guides", checked: true },
        ],
      },
      {
        category: "Tryout Results",
        tasks: [
          { name: "Set up role assignment system", checked: true },
          { name: "Create results tracking database", checked: true },
          { name: "Implement feedback mechanism", checked: true },
          { name: "Add automated notifications", checked: false },
          { name: "Create summary reports", checked: true },
        ],
      },
    ];
  
    // Initialize state based on the checklist data
    const [checklistState, setChecklistState] = useState(checklist);
  
    // Example script-based update function
    useEffect(() => {
      setTimeout(() => {
        setChecklistState((prevState) => {
          const newState = [...prevState];
          // Check the 3rd task in "ModMail System" after 2 seconds
          newState[0].tasks[2].checked = true;
          return newState;
        });
      }, 2000); // 2 seconds delay
  
      setTimeout(() => {
        setChecklistState((prevState) => {
          const newState = [...prevState];
          // Check the 4th task in "Tryout Results" after another 2 seconds
          newState[3].tasks[3].checked = true;
          return newState;
        });
      }, 4000); // 4 seconds delay
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
              Checklist:
            </h2>
            {checklistState.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200">
                  {section.category}
                </h3>
                {section.tasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-2 bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
                  >
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-600 dark:border-gray-400 rounded-md">
                      {task.checked && <span className="text-green-500">✔</span>}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{task.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  };

export default AnimatedChecklist;