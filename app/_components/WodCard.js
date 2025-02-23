export function WodCard({ wod }) {
  const {
    name,
    scoreType,
    scale,
    timeMin,
    timeSec,
    workoutDescription,
    notes,
  } = wod;

  let scaleIcon;

  if (scale === 'scaled') {
    scaleIcon = '⚪️ Scaled';
  } else if (scale === 'rx') {
    scaleIcon = '🔴 RX';
  } else if (scale === 'rxPlus') {
    scaleIcon = '🌑 RX+';
  }

  let scoreTypeText;

  if (scoreType === 'forTime') {
    scoreTypeText = 'For Time';
  } else if (scoreType === 'roundsAndReps') {
    scoreTypeText = 'Rounds and Reps';
  } else if (scoreType === 'reps') {
    scoreTypeText = 'Reps';
  } else if (scoreType === 'distance') {
    scoreTypeText = 'Distance';
  } else if (scoreType === 'calories') {
    scoreTypeText = 'Calories';
  }

  return (
    <div className="mx-auto my-4 rounded-lg bg-slate-200 p-1 shadow-sm">
      <div className="grid w-full grid-flow-row grid-cols-2 grid-rows-2 rounded-lg bg-white px-4 py-3 shadow-md">
        <h3 className="mb-1 text-lg font-black">{name}</h3>
        <h4 className="mb-2 text-sm font-bold text-slate-700">
          ⏱️ {timeMin}:{timeSec}
        </h4>
        <h4 className="mb-2 inline text-sm font-bold text-orange-500">
          {scoreTypeText}
        </h4>
        <h4 className="mb-2 text-sm font-bold text-slate-700">{scaleIcon}</h4>
      </div>
      <div className="w-full px-4">
        <p className="my-6 whitespace-pre-wrap text-sm">{workoutDescription}</p>
        {!notes ? (
          ''
        ) : (
          <div>
            <div className="mb-6 w-11/12 border-t border-solid border-slate-500"></div>
            <p className="mb-6 text-sm">
              <strong>Notes</strong>
              <br /> {notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function LiftingCard({ sesh }) {
  console.log('sesh:', sesh);
  return (
    <div className="mx-auto my-4 rounded-lg bg-slate-200 p-1 shadow-sm">
      <div className="grid w-full grid-flow-row grid-cols-2 grid-rows-2 rounded-lg bg-white px-4 py-3 shadow-md">
        <h3 className="mb-1 text-lg font-black">{sesh[0].movement}</h3>
        <h4 className="mb-2 text-sm font-bold text-slate-700">⏱️ 20:00 ???</h4>
        <h4 className="mb-2 inline text-sm font-bold text-orange-500">
          4x4 ????
        </h4>

        <h4 className="mb-2 text-sm font-bold text-slate-700">🔔 PR???</h4>
      </div>
      <div className="w-full px-4">
        <div className="my-6">
          {sesh.map((lift, i) => (
            <p key={i} className="text-sm">
              {sesh[i].movement} {sesh[i].reps} x {sesh[i].weight} lb
            </p>
          ))}
        </div>
        {!sesh[0].notes ? (
          ''
        ) : (
          <div>
            <div className="mb-6 w-11/12 border-t border-solid border-slate-500"></div>

            <p className="mb-6 whitespace-pre-wrap text-sm">
              <strong>Notes</strong>
              <br />
              {sesh[0].notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
