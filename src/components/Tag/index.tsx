import { TagContainer } from "./styles"

interface TagProps {
    variant?: string
    children: React.ReactNode
}

export const Tag = ({variant, children}: TagProps) => {

    if(!children) return <></>;

    return (
        <TagContainer>
            {variant && <img src={`images/${variant}.svg`} alt={variant} />}
            <span>{children}</span>
        </TagContainer>
    )
}