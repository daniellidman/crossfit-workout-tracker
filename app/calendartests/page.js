export const metadata = {
  title: 'Calendar Component',
};

export default function Page() {
  const historyArray = Array(365);
  return (
    <div className="mt-20 grid h-20 w-full grid-flow-col grid-rows-7">
      {Array.from(Array(365).keys()).map((i) => (
        <div key={i} className="h-1 w-1 rounded-sm bg-red-300 p-1" />
      ))}

      <div className="w-2 rounded-sm bg-green-300 p-2"></div>
    </div>
  );
}
