import './App.css';
import { Omnibar } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import { useState } from 'react';

function App() {
    const [item, setItem] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className="container" style={{ width: '30%',
            margin: '0 auto' }}>
            <button
                onClick={() => setOpen(open => !open)}
            >
                Click to show Omnibar
            </button>
            <Omnibar
                isOpen={open}
                activeItem={item}
                items={["India", "USA", "Canada"]}
                itemRenderer={(val, itemProps) => {
                    return (
                        <MenuItem
                            key={val}
                            text={val}
                            onClick={(elm) => {
                                setItem(elm.target.textContent)
                                setOpen(open => !open)
                            }}
                            active={itemProps.modifiers.active}
                        />
                    );
                }}
                onItemSelect={() => { }}
            />
        </div>
    );
}

export default App;
