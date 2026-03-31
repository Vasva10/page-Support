import { z } from 'zod'


export const SupportSchema = z.object({
    name: z.string().min(3, { message: 'validation.name.min' }).max(26, { message: 'validation.name.max' }),
    email: z.string().email({ message: 'validation.email.email' }),
    message: z.string().min(10, { message: 'validation.message.min' }).max(600, { message: 'validation.message.max' }),
    accept: z.boolean().refine((v) => v === true, { message: 'validation.accept.required' }),
    reason: z.string().refine((v) => v === '1' || v === '2' || v === '3', {
        message: 'validation.reason.required',
    }),
})

export type SupportSchema = z.infer<typeof SupportSchema>
