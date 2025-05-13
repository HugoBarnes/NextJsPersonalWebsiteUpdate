"use client"
import React, {useState, useRef, useEffect} from 'react';
import ProjectBox from './ProjectBox';

const projectData = [
    { name: 'Scrabble Solver',link: "/"},
    { name: '3D Printed Drawing Machine', link:"/"},
    { name: 'Calvin and Hobbes Reader', link:"/"},
    { name: 'Sudoku Solver', link:"/"},
    { name: 'Crossword Team Play', link:"/"},
    { name: 'Reinforcement Learning Tic-Tac-Toe', link:"/"},
    { name: 'Neighborhood Work App', link:"/"},
    { name: 'Linear Algebra Calculator', link:"/"}
];

const BentoBox = () =>{
    return(
        <main>
            <div className='flex flex-wrap gap-4 p-2'>
                {projectData.map((item) =>(
                    <ProjectBox 
                    key={item.name}
                    name={item.name}
                    link={item.link}
                  />
                ))}
            </div>
        </main>
    );
};

export default BentoBox;