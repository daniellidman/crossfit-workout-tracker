import WOD from '../_components/WOD';
import { tempWorkouts } from './tempWorkouts';

export const metadata = {
  title: 'Work Out',
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Workout Log</h1>
      <div>Feb 2 - 8</div>
      <div className="grid-cols-[1em, 1fr] m-2 grid grid-flow-col grid-rows-7">
        <div className="border-2 border-black bg-blue-100 px-3">Sunday</div>
        <div className="border-2 border-black bg-blue-300 px-3">Monday</div>
        <div className="border-2 border-black bg-blue-100 px-3">Tuesday</div>
        <div className="border-2 border-black bg-blue-300 px-3">Wednesday</div>
        <div className="border-2 border-black bg-blue-100 px-3">Thursday</div>
        <div className="border-2 border-black bg-blue-300 px-3">Friday</div>
        <div className="border-2 border-black bg-blue-100 px-3">Saturday</div>
        <div className="border-2 border-black bg-blue-100 px-3">
          <RestDay />
        </div>
        <div className="flex-wrap gap-2 border-2 border-black bg-blue-300 px-3">
          <WOD>4x4 Deadlifts</WOD>
          <WOD>"Diane"</WOD>
        </div>
        <div className="border-2 border-black bg-blue-100 px-3">
          <WOD>Press Complex</WOD>
          <WOD>"Alice"</WOD>
        </div>
        <div className="border-2 border-black bg-blue-300 px-3">
          <WOD>Snatch Barbell Progression</WOD>
        </div>
        <div className="border-2 border-black bg-blue-100 px-3">
          <RestDay />
        </div>
        <div className="border-2 border-black bg-blue-300 px-3">
          Add Workout
        </div>
        <div className="border-2 border-black bg-blue-100 px-3">
          Add Workout
        </div>
      </div>

      <div>
        LAST WEEK <br></br>Jan 26 - Feb 1
      </div>
      <div className="m-2 grid grid-cols-[8em_1fr] grid-rows-7">
        <WODDate altRow="odd">Sunday</WODDate>
        <WODList altRow="odd">
          <RestDay />
        </WODList>
        <WODDate altRow="even">Monday</WODDate>
        <WODList altRow="even">
          <WOD>4x4 Deadlifts</WOD>
          <WOD>"Rope"</WOD>
        </WODList>
        <WODDate altRow="odd">Tuesday</WODDate>
        <WODList altRow="odd">
          <WOD>Skill EMOM</WOD>
          {/* //////////// /////////// /////////// Our first dynamic route WOD page */}
          <WOD wodID="001">"Breakout"</WOD>
          {/* /////////////////// ///////// //////////// */}
        </WODList>
        <WODDate altRow="even">Wednesday</WODDate>
        <WODList altRow="even">
          <RestDay />
        </WODList>
        <WODDate altRow="odd">Thursday</WODDate>
        <WODList altRow="odd">
          <RestDay />
        </WODList>
        <WODDate altRow="even">Friday</WODDate>
        <WODList altRow="even">
          <RestDay />
        </WODList>
        <WODDate altRow="odd">Saturday</WODDate>
        <WODList altRow="odd">
          <WOD>Open Gym</WOD>
        </WODList>
      </div>
    </div>
  );
}

function RestDay() {
  return <div className="inline-flex rounded-md bg-orange-200 p-1">Rest</div>;
}

function WODList({ children, altRow }) {
  return (
    <div
      className={`col-span-3 col-start-2 m-auto px-3 ${altRow === 'even' ? 'bg-blue-100' : 'bg-blue-300'}`}
    >
      {children}
    </div>
  );
}

function WODDate({ children, altRow }) {
  return (
    <div
      className={`col-span-1 m-auto px-3 ${altRow === 'even' ? 'bg-blue-100' : 'bg-blue-300'}`}
    >
      {children}
    </div>
  );
}
