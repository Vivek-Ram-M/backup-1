import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const runThunk = useCallback(
    function runThunk(params) {
      setIsLoading(true);
      dispatch(thunk(params))
        .unwrap()
        // .then((val) => console.log(val, "success"))
        .catch((e) => {
          console.log("failed", e);
          setErrors(e.message);
        })
        .finally(() => setIsLoading(false));
    },
    [thunk, dispatch]
  );

  return { runThunk, isLoading, errors };
}
