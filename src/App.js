import React, {Component} from 'react';
import {DraftailEditor} from "draftail"
import {EditorState} from 'draft-js';

const plugins = [
  {
    keyBindingFn: (e) => console.log(e),
    handleReturn: (e) => console.log("Return!!!")
  }
];

export default class TextEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <DraftailEditor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
    );
  }
}
