import React, { useState, useTransition } from 'react'

function List() {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const [isPending, startTransition] = useTransition()

    const LIST_SIZE = 25000
    function handleChange(e) {
        setInput(e.target.value)

        startTransition(() => {
            const newList = []
            for (let i = 0; i < LIST_SIZE; i++) {
                newList.push(e.target.value)
            }
            setList(newList)
        })
        
    }
    return (
        <div>
            <input type='text' value={input} onChange={handleChange}></input>
            {
                isPending? <div> Loadingg..</div> :  list.map((item) => {
                    return <div>{item}</div>
                })
            }
        </div>
    )
}

export default List