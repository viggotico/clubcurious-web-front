import { useMediaQuery } from 'react-responsive'

const DesktopContent = ({ children }) => {
    const isMediaQuery = useMediaQuery({ query: '(min-width: 880px)' })
    return (isMediaQuery ? <>{children}</> : <></>)
}

export default DesktopContent