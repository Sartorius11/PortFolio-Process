import { CustomCard } from "../component/CustomCard";
import React from "react";


export const Home = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-cyan-900 border border-cyan-600 rounded-lg shadow-xl overflow-hidden mt-12">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://imgs.search.brave.com/rFzw61NSdl8gIsNNZfleF1WVmmYlMKRS9hAUY5ieok8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2ViLWRldmVs/b3Blci0zLzYwL01h/bGUtRGV2ZWxvcGVy/LWF2YXRhci1wZXJz/b24tdXNlci1tYW4t/cHJvZ3JhbW1lci0x/MjgucG5n"
              alt="Your photo"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-semibold text-white text-center mb-4">
            Fernando Sartorius Carreras
          </h2>
          <p className="text-gray-300 text-start text-lg">
            With a solid foundation in full-stack development, I excel in technologies
            such as JavaScript, React, Python, and SQL. I'm a junior developer focused on
            mastering both frontend and backend. Currently, I’m honing my skills in tools
            like React and Flask while developing a travel application that integrates an
            elegant frontend using React and Tailwind with a robust backend built on Flask
            and SQLAlchemy.
            My versatility, creativity, and passion for continuous learning enable me to quickly
            adapt to changing environments and make significant contributions to development teams.
          </p>
        </div>
      </div>
      <h1 className="flex justify-center mt-8 text-white text-3xl">Projects</h1>

      <div className="max-w-4xl mx-auto mt-12 gap-4 flex justify-center">
        <CustomCard
          title="Star Wars"
          description="I developed an interactive web application that consumes the Star Wars API SWAPI to present detailed information about characters, planets, and starships from the Star Wars universe. The application allows users to register, log in, and manage a personalized list of favorites."
          text="This application helps users explore the Star Wars universe in detail."
          imgSrc="https://seeklogo.com/images/S/star-wars-boba-fett-mandalorian-logo-2CFA34B7A7-seeklogo.com.png"
          imgHoverSrc="https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-chewbacca-design-icon-vector-png-image_6854637.png"
          imgAlt="Star Wars Logo"
          linkTo="https://github.com/Sartorius11/Sartorius11-StarWars"
          gitHub="Github"
          tecnologias={['HTML5', 'CSS', 'React', ' Flask']}
        />
        <CustomCard
          title="To Do List"
          description="This application allows users to manage their tasks using the Fetch API to perform CRUD operations (Create, Read, Update, Delete). The project enables users to add new tasks, edit them, mark them as completed, and delete them, all managed dynamically through an intuitive interface."
          text="This application helps users manage and organize their tasks efficiently, allowing them to add, edit, mark as completed, and delete tasks seamlessly."
          imgSrc="https://imgs.search.brave.com/UEzigPaTIMiRHjekKl1j7zSnW-W5ZDReP4FmFMsPgiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83NjM4Lzc2Mzg5/OTgucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
          imgAlt="ToDoLogo"
          imgHoverSrc="https://cdn2.iconfinder.com/data/icons/flat-productivity-at-work/256/To-Do_List-512.png"
          linkTo="https://github.com/Sartorius11/oDoList-Sartorius11-Fetch"
          gitHub="Github"
          tecnologias={['HTML5', 'CSS', 'React']}
          
        />
      </div>
    </>
  );
};
