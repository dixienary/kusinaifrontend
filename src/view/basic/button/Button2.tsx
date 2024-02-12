import { TERipple } from "tw-elements-react";

export default function ButtonBlock(x): JSX.Element {

  return (
    <>
      <TERipple >
        <button
          type="button"
          className=" block w-full rounded border-2 border-primary px-6 pb-[6px] pt-2 text-md font-medium  leading-normal
           text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10
            hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0
             active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          style={{width:"300px",height:"50px"}}
        >
          {x.children}
        </button>
      </TERipple>
    </>
  );
}