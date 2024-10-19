import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store"; // Altere o caminho conforme necessário

// Cria um tipo TypedUseSelectorHook para o RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
