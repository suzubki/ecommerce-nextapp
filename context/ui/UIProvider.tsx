import { FC, ReactElement, useReducer } from "react"

import { UIReducer, UIContext } from "./"

export interface UIState {
  isSideMenuOpen: boolean
}

interface Props {
  children: ReactElement
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  const toggleSideMenu = () => {
    dispatch({ type: "[UI] - Toggle Side Menu" })
  }

  return (
    <UIContext.Provider value={{ ...state, toggleSideMenu }}>
      {children}
    </UIContext.Provider>
  )
}
