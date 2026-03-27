export interface Ifaq {
    id: number;
    question: string;
    answer: string;
}
export interface IFormProps {
    width?: string;
    height?: string;
    children?: React.ReactNode; 
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    
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
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?: string
}