import Task from "../../components/Task";
import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { FaDiamond } from "react-icons/fa6";

export default function Home() {
  return (
    <div class="flex h-screen bg-comic-gradient">
      <div class="w-1/3 border-r border-black overflow-y-auto">
        <h1 className="text-2xl text-center mb-5 mt-5">Available Tasks</h1>
        <div className="flex flex-col pl-10 pr-10">
          <Task title="Campus Cleanup" description="Join us for a campus cleanup event to help keep our quads looking great!" points="100" location="Myers Quad" />
          <Task title="Animal Shelter Volunteer" description="Spend time with adorable animals at the local animal shelter and help with feeding and care." points="250" location="Athens Area Humane Society"/>
          <Task title="Event Setup for UGA Football Game" description="Assist with setting up the stadium for an exciting UGA football game. Help arrange seating, install banners, and ensure everything is ready for the fans." points="300" location="Sanford Stadium"/>
          <Task title="Athens Soup Kitchen Volunteer" description="Make a difference in the Athens community by volunteering at a local soup kitchen. Assist with meal preparation, serving food to those in need, and cleaning up afterward." points="200" location="Athens Soup Kitchen"/>
          <Task title="UGA Blood Drive Organizer" description="Organize a blood drive on the UGA campus to help save lives and contribute to the community's health and well-being. Coordinate logistics, recruit donors, and ensure a smooth donation process." points="300" location="UGA Health Center"/>   
        </div>
      </div>

      
      <div class="w-1/3 border-r border-black overflow-y-auto">
        <h1 className="text-2xl text-center mb-5 mt-5">Completed Tasks</h1>
        <div className="pl-10 pr-10">
        <Task title="Food Bank Volunteer" description="Become a vital part of Athens community by volunteering at the Food bank! Volunteers will help the community by connecting neighbors with nourishing food." points="100" location="Food Bank at NorthEast Georgia" completed="true"/>
        <Task title="Safety Volunteer" description="Help provide extensive support to the survivors of domestic violence. Volunteers will bring energy, enthusiasm, diversity, and new skills to the team!" points="150" location="Project Safe" completed="true"/>
        </div>
       <div className="rounded-lg pr-10 pl-12 ml-14 mt-24 border-4 bg-white border-white p-2 text-3xl text-black w-3/4">
          <h3 className="text-xs">Take on more tasks to help your community and gain more paw points!</h3>
        </div>
      </div>



      <div class="w-1/3 border-r border-black overflow-y-hidden">
        <div className="h-1/6 border-b-2 pl-4 flex flex-col border-black">
          <h3 className="mt-3 text-3xl pb-3 flex items-center justify-between pr-5">Good afternoon, Will! <IoIosSettings/></h3>
          <div className="w-3/4 max-w-md pb-1">
            <div className="bg-gray-300 rounded-full h-8 overflow-hidden ">
              <div className="bg-blue-500 h-full w-52">
                
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
          <h3 className="flex flex-row  items-center">Hero Level 8 - 73% </h3>
          <h3 className="flex flew-row items-center">300 <FaDiamond /></h3>
          </div>
        </div>
        <div className="h-1/2 border-b-2 flex border-black justify-center items-center">
          <div>
          </div>
          <div class="w-80 h-80 bg-blue-500 rounded-full "></div> 
        </div>
        <div className="h-1/3 flex flex-row">
          
        </div>
      </div>







    </div>

  );
}
