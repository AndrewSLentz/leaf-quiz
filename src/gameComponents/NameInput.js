import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

function NameInput ({ playerName, setPlayerName, setQuestionIndex }) {
    return(
      <div className="name-input__container">
        <FormControl>
            <InputLabel htmlFor="playerName" >Player Name:</InputLabel>
            <Input className="nameInput" id="playerName" value={ playerName } onChange={ e => setPlayerName(e.target.value) } />
        </FormControl>
        <Button disabled={ !Boolean(playerName) } color="primary" onClick={ () => setQuestionIndex(0) }>Begin Game!</Button>
      </div>
    )
  }

  export default NameInput;