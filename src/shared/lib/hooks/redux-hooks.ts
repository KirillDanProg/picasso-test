import type {
  AppDispatch,
  RootState,
} from "@/app/providers/store-provider/config/store";
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
