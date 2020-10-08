import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {DefaultButton, SearchBox, IRenderFunction, Panel, IPanelProps} from 'office-ui-fabric-react';
import {useBoolean} from '@uifabric/react-hooks';

interface AppProps { }
interface AppState {
  name: string;
}

const searchboxStyles = { root: { margin: '5px', height: 'auto', width: '100%' } };

export const App: React.FunctionComponent = () => {
const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

const onRenderNavigationContent: IRenderFunction<IPanelProps> = React.useCallback(
    (props, defaultRender) => (
      <React.Fragment>
        <SearchBox
          placeholder="Search here..."
          styles={searchboxStyles}
          ariaLabel="Sample search box. Does not actually search anything."
        />
        {// This custom navigation still renders the close button (defaultRender).
        // If you don't use defaultRender, be sure to provide some other way to close the panel.
        defaultRender!(props)}
      </React.Fragment>
    ),
    [],
  );

    return (
      <React.Fragment>
      <hr />
      <DefaultButton>Open Panel</DefaultButton>
      <hr />
      </React.Fragment>
    );
}

render(<App />, document.getElementById('root'));
