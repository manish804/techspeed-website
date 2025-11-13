import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState('page-enter-active')

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage('page-exit-active')
        }
    }, [location, displayLocation])

    useEffect(() => {
        if (transitionStage === 'page-exit-active') {
            const timer = setTimeout(() => {
                setDisplayLocation(location)
                setTransitionStage('page-enter')
            }, 150)

            return () => clearTimeout(timer)
        }
    }, [transitionStage, location])

    useEffect(() => {
        if (transitionStage === 'page-enter') {
            setTransitionStage('page-enter-active')
        }
    }, [transitionStage])

    return (
        <div className={transitionStage}>
            {children}
        </div>
    )
}

