import { useJobsCnxt } from "../contexts/JobsContext";

export function Loader() {
  const { queryNumber } = useJobsCnxt();

  return (
    <>
      {Array.from({ length: queryNumber }, (_, i) => i).map((el, i) => (
        <li key={i} className=" h-[35%] list-none flex justify-center ">
          <div className=" w-3/4 list-none px-1 py-2 rounded-2xl my-5 bg-gray-300 shadow-xl mr-3 animate-pulse  "></div>
        </li>
      ))}
    </>
  );
}
