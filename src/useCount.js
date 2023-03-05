import {useState} from 'react'


export const useCount = (initialVal = 0) => {
    const [count, setCount] = useState(initialVal)

    const increase = () => {
        setCount((prev) => ++prev)
    }

    const decrease = () => {
        setCount((prev) => --prev)
    }

    const restart = () => {
        setCount(0)
    }

    return { count, increase, decrease, restart }
}