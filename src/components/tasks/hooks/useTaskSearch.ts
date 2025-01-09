import { ChangeEvent, useEffect, useState } from "react";
import { useTaskContext } from "@common/contexts";
import { useDebounce } from "@common/hooks";

type Return = {
  inputValue: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: () => void;
};

export const useTaskSearch = (): Return => {
  const { searchQuery, setSearchQuery } = useTaskContext();
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(inputValue);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearSearch = () => {
    setInputValue("");
  };

  return {
    inputValue,
    handleSearchChange,
    handleClearSearch
  };
};
