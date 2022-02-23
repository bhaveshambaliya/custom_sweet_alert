import React from 'react'
import { CustomSweetAlert } from 'custom-sweet-alert'
import 'custom-sweet-alert/dist/index.css'
const App = () => {
  return <CustomSweetAlert
    isOpen={true}
    type="confirm"
    title="Sure ?"
    infoText="Are you sure to remove this card ?"
    // onActionHandle={() => this.onActionHandle()}
  />
}

export default App
