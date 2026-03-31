import type { FormEvent, ReactNode, ChangeEvent } from 'react'

export interface Ifaq {
    id: number;
    question: string;
    answer: string;
}
export interface IFormProps {
    width?: string;
    height?: string;
    children?: ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;

}

export interface IFaqSectionProps {
    faq: Ifaq[]
}

type FieldName = 'name' | 'email' | 'message'
type FieldKind = 'input' | 'textarea'
export interface InputFrameProps {
    error?: boolean;
    label: string
    name: FieldName
    kind?: FieldKind
    type?: 'text' | 'email'
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?: string
}

export interface ISupportFormProps {
    name: string
    email: string
    message: string
    reason: string
    accept: boolean

}
export interface MainProps {
    faq: Ifaq[]
}