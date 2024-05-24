import { useMediaQuery } from 'react-responsive'

const MobileContent = ({ children }) => {
    const isMediaQuery = useMediaQuery({ query: '(max-width: 879px)' })
    return (isMediaQuery ? <>{children}</> : <></>)
}

export default MobileContent