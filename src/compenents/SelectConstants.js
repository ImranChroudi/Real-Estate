import { memo, useEffect, useRef, useState } from "react"

 const SelectConstants =  ({menu}) => {

    

    const [selectedItem, setSelectedItem] = useState({
        item: menu[0],
        idx: 0
    })
    const [state, setState] = useState(false)
    const selectMenuRef = useRef()

    useEffect(() => {

        const handleSelectMenu = (e) => {
            if (!selectMenuRef.current.contains(e.target)) {
                setState(false)
            }
        }

        document.addEventListener('click', handleSelectMenu)

    }, [])

    return (
        <div className="relative  min-w-[100%] text-base">
            <button ref={selectMenuRef} className="flex items-center justify-between gap-2 w-full px-3 py-2 text-color_text bg-white  rounded-md cursor-default outline-none"
                aria-haspopup="true"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => setState(!state)}
            >
                <div className="flex  items-center gap-x-3">
                    <span className={`text-sm_ftext ${selectedItem.item[2]} text-color_text`}>{selectedItem.item}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {
                state ? (
                    <div className="relative w-full">
                        <ul className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                            {
                                menu.map((el, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => setSelectedItem({
                                            item: el,
                                            idx
                                        })}
                                        role="option"
                                        aria-selected={selectedItem.idx == idx ? true : false}
                                        className={`${selectedItem.idx == idx ? 'text-indigo-600 bg-indigo-50' : ''} flex items-center justify-between gap-2 px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50`}
                                    >
                                        <div className="flex items-center gap-x-3">
                                             {el}
                                        </div>
                                        {
                                            selectedItem.idx == idx ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : ''
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default memo(SelectConstants)