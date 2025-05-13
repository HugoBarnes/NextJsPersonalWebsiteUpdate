import Image from "next/image";
import BentoBox from "../components/BentoBox";

export default function Home() {
  return (
    <div className="text-sm p-2 mb-4">
        <p> 
          The following are projects that I created out of necessity or for fun. 
        </p>
        <ul className="list-disc pl-4">
          <li><strong>Scrabble Solver.</strong> Takes letters and the board state as input. Outputs the optimal move. </li>
          <li><strong>3D Printed Drawing Machine.</strong> Is an arduino powered drawing machine that can draw! Inspired by the movie Hugo.</li>
          <li><strong>Calvin and Hobbes Reader.</strong> Downloaded from the Internet Archive. The complete Calvin and Hobbes Collection.</li>
          <li><strong>Sudoku Solver.</strong> Try a solvable Sudoku! Or have it solved for you!</li>
          <li><strong>Crossword Team Play.</strong> Get a previous New York Times Crossword! Solve it with a friend.</li>
          <li><strong>Reinforcement Learning Tic-Tac-Toe.</strong> Reinforcement Learning on Tic-Tac-Toe. Example from Sutton's <a href="https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf" target="_blank" className="text-blue-500 underline hover:text-blue-700">Sutton's Reinforcement Learning Textbook</a>.</li>
          <li><strong>Neighborhood Work App.</strong>Still in progress. A maps app that allows homeowners to connect with contractors.</li>
          <li><strong>Linear Algebra Calculator.</strong> A web app for Matrix computations.</li>
        </ul>
        <BentoBox></BentoBox>
    </div>
  );
}