import { Listbox, Transition } from "@headlessui/react";

export default function Dropdown({ options, value, setValue }) {
  return (
    <Listbox as="div" value={value} onChange={setValue} className="z-[100]">
      <Listbox.Button className="w-[70px] bg-white/80 py-2 hover:bg-white/70 md:min-w-[120px] md:rounded-l-full">
        <span className="hidden md:inline-block">{value.name}</span>
        <svg
          className="inline-block h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="absolute mt-2 w-[120px] rounded-md bg-white/80">
          {options.map((o) => (
            <Listbox.Option
              key={o.id}
              value={o}
              className="p-3 text-sm text-black hover:cursor-pointer hover:bg-black/10"
            >
              {o.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
