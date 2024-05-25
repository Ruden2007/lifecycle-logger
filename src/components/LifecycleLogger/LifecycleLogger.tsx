import styles from "./LifecycleLogger.module.sass"

export interface LogEntity {
    date: Date
    message: string
}

interface LifecycleLoggerProps {
    logs: LogEntity[]
}

export default function LifecycleLogger({logs}: LifecycleLoggerProps) {
    return (
        <ul className={styles.loger}>
            {logs.map((log, index) => (
                <li className={styles.log} key={index}>
                    <p className={styles.message}>{log.message}</p>
                    <a className={styles.logDate}>{log.date.toLocaleTimeString()}</a>
                </li>
            ))}
        </ul>
    )
}
