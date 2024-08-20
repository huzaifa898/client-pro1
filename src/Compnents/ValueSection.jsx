import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "We're Genuine And Compassionate.",
    description:
      "Being in the people business can mean difficult decisions and tough conversations. We believe in going into every meeting with a desire and ability to be genuine and compassionate. We are all people, and people make mistakes. We’re here to help you fix those, without risk or judgment, and move forward.",
  },
  {
    title: "Honesty, Integrity, And Accountability.",
    description:
      "Tempus egestas sed sed risus pretium quam vulputate dignissim. Ipsum consequat nisl vel pretium lectus quam id leo in. In pellentesque massa placerat dui ultrices lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Etiam sit amet nisl purus in mollis.",
  },
  {
    title: "Passion For Our Clients.",
    description:
      "Tempus egestas sed sed risus pretium quam vulputate dignissim. Ipsum consequat nisl vel pretium lectus quam id leo in. In pellentesque massa placerat dui ultrices lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Etiam sit amet nisl purus in mollis.",
  },
];

const ValueSection = () => {
  return (
    <div className="bg-lime-500 min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl font-bold text-center mb-6">
        We Believe In Collaboration And Innovation.
      </h1>
      <p className="text-xl text-center mb-12">
        These core values define who we are and the work we do.
      </p>
      <div className="w-full max-w-4xl">
        {values.map((value, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-start">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-2xl font-semibold mb-2 w-1/2 text-left"
              >
                {value.title}
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-lg w-1/2 text-left"
              >
                {value.description}
              </motion.div>
            </div>
            <hr className="border-t-2 border-gray-900 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueSection;
