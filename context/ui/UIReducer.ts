import { UIState } from "./UIProvider"

type UITypeAction = {
  type: "[UI] - Toggle Side Menu"
}

export const UIReducer = (state: UIState, action: UITypeAction): UIState => {
  switch (action.type) {
    case "[UI] - Toggle Side Menu":
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen }

    default:
      return state
  }
}
