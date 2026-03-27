import {z} from "zod"

export const createTodoSchema=z.object({
    title:z.string().min(1,"title is required").max(100,"title must be less then 100 char").trim(),
    description:z.string().max(500,"Description must be less then 500 char").optional(),
    priority:z.enum(["low","medium","high"]).default("medium")
})