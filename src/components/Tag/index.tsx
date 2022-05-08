import { SyntheticEvent, useRef, useState } from "react"
import { TagContainer } from "./styles"

interface TagProps {
    variant?: string
    children?: React.ReactNode
    onAddTag?: (newTag: string) => void
}

export const Tag = ({variant, children, onAddTag}: TagProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const inputEl = useRef<HTMLInputElement>(null)
    const isEditable = variant === 'plus-circle'

    if(!children) return <></>;

    const handleClick = () => {
        if(!isEditable) return
        setIsEditing(true)
    }

    const handleSubmitTag = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsEditing(false)

        if(!inputEl.current?.value || !onAddTag) return 
        onAddTag(inputEl.current?.value)
    }
    return (
        <TagContainer 
            data-testid="tag-element" 
            onClick={handleClick}
            className={`${isEditable && 'editable'}`}
        >
            {
                isEditing ? (
                    <form data-testid="form-el" onSubmit={handleSubmitTag}>
                        <button type="submit">
                            <img src="images/check-circle.svg" />
                        </button>
                        <input type="text" ref={inputEl} autoFocus />
                    </form>
                ) : (
                    <>
                        {variant && <img src={`images/${variant}.svg`} alt={variant} />}
                        <span>{children}</span>
                    </>
                )
            }
        </TagContainer>
    )
}