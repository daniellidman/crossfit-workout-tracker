export default function Page() {
  return (
    <div>
      <h1>"Breakout"</h1>
      <Scale scale="Scaled" key={1} />
      <Scale scale="RX" key={2} />
      <Scale scale="RX+" key={3} />
      <div>Workout Description</div>
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
