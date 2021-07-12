import React, { FC, useCallback, useEffect, SyntheticEvent } from "react"
import useModels from "react-use-models"
import useValidator from "react-joi"
import Joi from "joi"

// Styled Elements
import {
    Actions,
    Container,
    Fields,
    ErrorMessage,
    FieldControl,
    FieldLabel,
    Input,
    Submit,
    Form,
    FieldGroups,
    FieldsMerge,
} from "./index.styled"

export type TypeCheckoutFormValues = {
    email: string
    card_number: string
    card_expire: string
    cvv: string
}

export interface CheckoutFormProps {
    onSuccess: (values: TypeCheckoutFormValues) => void
    loading?: boolean
    submitText?: string
}

const defaultState = {
    email: null,
    card_number: null,
    card_expire: null,
    cvv: null,
}

const CheckoutForm: FC<CheckoutFormProps> = ({
    onSuccess,
    loading = false,
    submitText = "Submit",
}) => {
    const { models, register } = useModels({
        defaultState,
    })
    const { state, setData } = useValidator({
        initialData: defaultState,
        schema: Joi.object({
            email: Joi.string()
                .email({
                    tlds: { allow: false },
                })
                .required()
                .messages({
                    "string.empty": "Required",
                    "string.email": "Must be a valid email",
                    "any.required": "Required",
                }),
            card_number: Joi.string()
                .pattern(/^[0-9]+$/)
                .min(12)
                .max(19)
                .required()
                .messages({
                    "string.pattern.base": "Must be numeric",
                    "string.empty": "Required",
                    "string.min": "Minimum 12 digits required",
                    "string.max": "Must be 19 Maximum digits",
                    "any.required": "Required",
                }),
            card_expire: Joi.string()
                .pattern(/^[0-9]+$/)
                .length(4)
                .required()
                .messages({
                    "string.pattern.base": "Must be numeric",
                    "string.empty": "Required",
                    "string.length": "Must be 4 digits",
                    "any.required": "Required",
                }),
            cvv: Joi.string()
                .pattern(/^[0-9]+$/)
                .min(3)
                .max(4)
                .required()
                .messages({
                    "string.pattern.base": "Must be numeric",
                    "string.empty": "Required",
                    "string.min": "Minimum 3 digits",
                    "string.max": "Maximum 4 digits",
                    "any.required": "Required",
                }),
        }),
    })

    const getErrors = useCallback(
        (field) => {
            return state.$errors[field]
                .map((data: any) => data.$message)
                .join(",")
        },
        [state.$errors]
    )

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        onSuccess(state.$data)
    }

    // Sync model <-> validator
    useEffect(() => {
        setData(models)
    }, [models])

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Fields>
                    <FieldControl>
                        <FieldLabel error={!!getErrors("email")}>
                            Email
                        </FieldLabel>

                        <Input
                            {...register.input({ name: "email" })}
                            type="email"
                            placeholder="you@company.com"
                            autoComplete="current-email"
                        />
                    </FieldControl>

                    {getErrors("email") && (
                        <ErrorMessage>{getErrors("email")}</ErrorMessage>
                    )}
                </Fields>

                <FieldGroups>
                    <Fields>
                        <FieldControl>
                            <FieldLabel error={!!getErrors("card_number")}>
                                Card information
                            </FieldLabel>

                            <Input
                                {...register.input({ name: "card_number" })}
                                type="text"
                                placeholder="1234 1234 1234 1234"
                            />
                        </FieldControl>

                        {getErrors("card_number") && (
                            <ErrorMessage>
                                {getErrors("card_number")}
                            </ErrorMessage>
                        )}
                    </Fields>

                    <FieldsMerge>
                        <Fields>
                            <Input
                                {...register.input({ name: "card_expire" })}
                                type="text"
                                placeholder="MM / YY"
                            />

                            {getErrors("card_expire") && (
                                <ErrorMessage>
                                    {getErrors("card_expire")}
                                </ErrorMessage>
                            )}
                        </Fields>

                        <Fields>
                            <Input
                                {...register.input({ name: "cvv" })}
                                type="text"
                                placeholder="123"
                            />

                            {getErrors("cvv") && (
                                <ErrorMessage>{getErrors("cvv")}</ErrorMessage>
                            )}
                        </Fields>
                    </FieldsMerge>
                </FieldGroups>

                <Actions>
                    <Submit disabled={state.$auto_invalid || loading}>
                        {submitText}
                    </Submit>
                </Actions>
            </Form>
        </Container>
    )
}

export default CheckoutForm
