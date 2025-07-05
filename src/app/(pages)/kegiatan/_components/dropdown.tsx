import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Dropdown = ({
  activeFilter,
  lists,
  setFilter,
}: {
  activeFilter: string;
  lists: string[];
  setFilter: any;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-fit">
        <p className="">
          Sort by <span className="font-bold capitalize">{activeFilter}</span>
        </p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="flex w-fit animate-dropDownOut flex-col rounded-[7px] bg-white shadow outline-1 outline-[#D1D5DB] data-[state=open]:animate-dropDown"
          sideOffset={10}
        >
          {lists.map((list: string) => (
            <DropdownMenu.Item
              className="rounded bg-opacity-0 px-6 py-2 transition duration-200 ease-in-out hover:bg-primary hover:bg-opacity-20"
              key={list}
              onClick={() => setFilter(list)}
            >
              <p>{list}</p>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
