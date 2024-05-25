import React, {Dispatch, useEffect, useState} from "react"
import {LogEntity} from "../LifecycleLogger/LifecycleLogger.tsx"

import styles from "./Counter.module.sass"

interface CounterProps {
    setLogs: Dispatch<React.SetStateAction<LogEntity[]>>
}

export default function Counter({ setLogs }: CounterProps): JSX.Element {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setLogs(prev => {
            const newLogs = [...prev]
            newLogs.push({
                date: new Date(),
                message: "Component mount!"
            })
            return newLogs
        })
    }, [setLogs])

    useEffect(() => {
        setLogs(prev => {
            const newLogs = [...prev]
            newLogs.push({
                date: new Date(),
                message: "Component changed!"
            })
            return newLogs
        })

        return () => {
            setLogs(prev => {
                const newLogs = [...prev]
                newLogs.push({
                    date: new Date(),
                    message: "Component unmount!"
                })
                return newLogs
            })
        }
    }, [count, setLogs])

    return (
        <button className={styles.button} onClick={() => setCount(prev => ++prev)}>Count: {count}</button>
    )
}