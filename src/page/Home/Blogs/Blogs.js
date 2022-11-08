import React from 'react';
import { TabTitle } from '../../../utils/GeneralFunction';

const Blogs = () => {
    TabTitle('Blog - WildP');

    return (
        <div className='m-10'>
            {/* FAQ 1 */}
            <div className="collapse collapse-arrow border border-base-600 bg-base-100 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-2xl">
                    Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p className='p-4'>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure.</p>
                    <p className='pl-2 pb-2 text-xl'>Type</p>
                    <p className='pl-4 pb-2'>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.</p>
                    <p className='pl-2 pb-2 text-xl'>Scalability</p>
                    <p className='pl-4 pb-2'>In almost all situations SQL databases are vertically scalable. But on the other hand NoSQL databases are horizontally scalable. </p>
                    <p className='pl-2 pb-2 text-xl'>Structure </p>
                    <p className='pl-4 pb-2'>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. </p>
                </div>
            </div>
            {/* FAQ 2 */}
            <div className="collapse collapse-arrow border border-base-600 bg-base-100 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-2xl">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='text-xl pl-4 pb-2'>What is JWT?</p>
                    <p className='pl-6'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p className='text-xl pl-4 pb-2 pt-2'>How JWT Works?</p>
                    <p className='pl-6'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: <span className='text-xl'>xxxxx.yyyyy.zzzzz</span>.</p>
                </div>
            </div>
            {/* FAQ 3 */}
            <div className="collapse collapse-arrow border border-base-600 bg-base-100 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-2xl">
                    What is the difference between javascript and Node.js?
                </div>
                <div className="collapse-content">
                    <p className='p-4'>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.</p>
                    <p className='p-4'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                    <p className='p-4'>Any engine may run JavaScript.As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser.Node.js, on the other hand, only enables the V8 engine.Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                    <p className='p-4'>A specific non-blocking operation is required to access any operating system.There are a few essential objects in JavaScript, but they are entirely OS-specific. Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants.</p>
                    <p className='p-4'>The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things</p>
                </div>
            </div>
            {/* FAQ 2 */}
            <div className="collapse collapse-arrow border border-base-600 bg-base-100 rounded-box mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-2xl">
                    How does Node.js handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p className='p-4'>Node.js runs on a single thread which makes it easier to handle upto 10,000 concurrent requests. All blocking I/O tasks are always being processed asynchronously by internal threads with interrupting the main thread.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;