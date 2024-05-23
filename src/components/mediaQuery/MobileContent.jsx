import { useMediaQuery } from 'react-responsive'

const MobileContent = ({ children }) => {
    const isMediaQuery = useMediaQuery({ query: '(max-width: 1049px)' })
    return (isMediaQuery ? <>{children}</> : <></>)
}

export default MobileContent