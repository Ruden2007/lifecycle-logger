import {useState} from 'react'
import './App.module.sass'
import LifecycleLogger, {LogEntity} from "./components/LifecycleLogger/LifecycleLogger.tsx";
import Counter from "./components/Counter/Counter.tsx";

function App() {
    const [logs, setLogs] = useState<LogEntity[]>([])

    return (
        <>
            <LifecycleLogger logs={logs}/>
            <Counter setLogs={setLogs}/>
        </>
    )
}

export default App
