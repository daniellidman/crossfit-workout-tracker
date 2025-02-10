import { tempWorkouts } from '../../tempWorkouts';

export default async function Page({ params }) {
  //TEMP
  const wodID = '001';
  const history = [];
  const scale = 'Scaled';
  const description = `For Time: 10-1 Hang Power Cleans 165/110 3 Bar MU after every set, including at the end. 15 Min Cap `;

  return (
    <div>
      <h1>"Breakout"</h1>
      <Scale scale="Scaled" key={1} />
      <Scale scale="RX" key={2} />
      <Scale scale="RX+" key={3} />
      <div>{description}</div>
    </div>
  );
}

function Scale({ scale }) {
  return (
    <div
      className={`inline-block rounded-full p-4 ${scale === 'RX' ? 'bg-red-200' : ''} ${scale === 'Scaled' ? 'bg-green-200' : ''} ${scale === 'RX+' ? 'bg-blue-200' : ''}`}
    ></div>
  );
}
