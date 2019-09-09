import * as React from 'react'


interface IProps {
    /**
     * logo的地址
     */
    logo?: string
    className?: string
    alt?: string,
    // children?: React.ReactNode
}

export const _Logo = (props: IProps) => {
    const { logo, className, alt } = props

    return (
        <img src={logo} className={className} alt={alt} />
    )
}



// better
export const Logo: React.SFC<IProps> = props => {
    const { logo, className, alt } = props

    return (
        <img src={logo} className={className} alt={alt} />
    )
}
