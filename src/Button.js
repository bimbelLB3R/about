export default function Button(props) {
  return (
    <div className="flex justify-center ">
      <button className="bg-blue-600 rounded-full px-2 py-4 m-2 shadow-lg">
        {props.children}
      </button>
    </div>
  );
}
export function Button2(props) {
  return (
    <div className="flex justify-center ">
      <button className="bg-blue-600 rounded-full px-2 py-4 m-2 shadow-lg">
        {props.children}
      </button>
    </div>
  );
}
