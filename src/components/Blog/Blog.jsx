import React, { createRef } from "react";

import Pdf from "react-to-pdf";
import { BsFiletypePdf } from "react-icons/bs";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div>
      <div className="bg-gray-900 text-white py-4 md:px-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog Section</h1>

        <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <button className="button-primary !py-2 flex items-center " onClick={toPdf}>
            Download <BsFiletypePdf className="ml-2 text-xl"/>
          </button>
        )}
      </Pdf>
      </div>
      <div ref={ref} className="my-container mx-auto py-8 w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white  p-4 shadow border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              1. Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="mb-4 text-gray-600 text-justify">
              How they handle form data is the primary distinction between
              controlled and uncontrolled components in React. Form data can be
              managed by the DOM thanks to uncontrolled components, however when
              it comes to controlled Components use state to manage the form
              data.
            </p>
          </div>
          <div className="bg-white  p-4 shadow border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              2. How to validate React props using PropTypes
            </h3>
            <p className="mb-4 text-gray-600 text-justify">
              React PropTypes package enables us to define the kinds and shapes
              of the props that your components require. PropTypes provide for
              the early detection of potential flaws and an increase in the
              maintainability of the code. Import the PropTypes library from the
              prop-types package, then specify the PropTypes for our component
              props to begin using PropTypes. After that, we can assign the
              PropTypes to our components propTypes static property. To indicate
              the anticipated type or form of a prop, we can use one of the
              several validators offered by the PropTypes library.
            </p>
          </div>
          <div className="bg-white  p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              3. Tell us the difference between nodejs and express js.
            </h3>
            <p className="mb-4 text-gray-600 text-justify">
              JavaScript is a popular alternative for creating web applications,
              along with Node.js and Express.js. Node.js is a JavaScript runtime
              environment that enables programmers to execute JavaScript code on
              the server-side. Express.js is a web application framework that
              uses Node.js as its foundation and offers tools for creating
              online apps.
            </p>
          </div>
          <div className="bg-white  p-4 shadow border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="mb-4 text-gray-600 text-justify">
              In React, a custom hook is a reusable function that provides logic
              that may be used by other components. Custom hooks are helpful for
              abstracting away complicated functionality and making it simple to
              reuse across many components. To avoid repeating the same code
              numerous times and to encapsulate a particular behavior or
              capability, we would develop a custom hook. This could enhance the
              readability, reusability, and organization of the code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
