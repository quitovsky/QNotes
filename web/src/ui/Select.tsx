import "@/styles/ui/Select.scss";
import React, {useEffect, useRef} from "react";

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    options: string[];
    onValueChange?: (value: {index: number, value: string}) => void;
    defaultIndex?: number;
}

export default function Select({options, defaultIndex, ...props}: SelectProps) {

    const self = useRef<HTMLDivElement>();

    const [isOpened, setIsOpened] = React.useState(false);
    const [selected, setSelected] = React.useState({
        index: defaultIndex || 0,
        value: options[defaultIndex || 0] || ""
    });

    const onOptionClick = (index: number) => {
        setSelected({index, value: options[index]});
        setIsOpened(false);
        if (props.onValueChange) props.onValueChange({index, value: options[index]});
    }

    return(<>
        <div ref={self} className="select">
            <div onClick={() => setIsOpened(!isOpened)} className="select-active">
                <div className={`select-active-arrow ${isOpened ? "opened" : ""}`}><svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.5L4 3.5C4 3.5 5.82843 1.67157 7 0.5" stroke="#9B9B9B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div className="select-active-value">{selected.value}</div>
            </div>
            <div className={`select-options ${isOpened ? "active" : ""}`}>
                {options.map((option, index) => <div key={index} data-index={index} onClick={() => onOptionClick(index)} className="select-option">{option}</div>)}
                {/*<div data-index={0} onClick={() => onOptionClick(0)} className="select-option">localStorage</div>*/}
                {/*<div data-index={1} onClick={() => onOptionClick(1)} className="select-option">qnotes server</div>*/}
                {/*<div data-index={2} onClick={() => onOptionClick(2)} className="select-option">qnotes server</div>*/}
            </div>
        </div>
        </>)
}