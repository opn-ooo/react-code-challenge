import React, { FC, useMemo } from "react"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"

// Store
import { RootState } from "@app/store"

// Actions
import { usePageClass } from "@hooks/actions/usePageClass"

// Components Layouts
import LayoutCenter from "@components/layouts/LayoutCenter"

// Blocks
import CheckoutForm, {
    TypeCheckoutFormValues,
} from "@app/components/blocks/CheckoutForm"

// Styled Elements
import {
    Container,
    Title,
    List,
    ProductContent,
    ProductHead,
    ProductLabel,
    Products,
    ProductPrice,
    ProductTotalPrice,
    ProductQuantity,
} from "./index.styled"

type TypeCartItems = {
    id: string | number
    name: string
    price: number
    currency: string
    qty: number
}[]

export interface InterfaceCheckoutProps {
    BlockName?: string
}

const DefaultBlockName = "PageCheckout"

const PageCheckout: FC<InterfaceCheckoutProps> = ({
    BlockName = DefaultBlockName,
}) => {
    usePageClass({ name: BlockName })

    const CartItems: TypeCartItems = useSelector(
        (state: RootState) => state.cart
    )

    const totalPrice = useMemo(
        () =>
            CartItems.filter((item) => item.qty > 0).reduce(
                (total, { qty, price }) => total + qty * price,
                0
            ),
        [CartItems]
    )

    const onSubmit = (values: TypeCheckoutFormValues) => {
        alert(JSON.stringify(values, null, 2))

        toast.success("Success")
    }

    return (
        <LayoutCenter>
            <Container>
                <Title>Checkout</Title>

                <List>
                    {CartItems.map(({ id, name, price, qty, currency }) => (
                        <Products key={id}>
                            <ProductHead />

                            <ProductContent>
                                <ProductLabel>{name}</ProductLabel>
                                <ProductPrice>
                                    {price.toLocaleString()} {currency}
                                </ProductPrice>
                            </ProductContent>

                            <ProductContent>
                                <ProductTotalPrice>
                                    {(price * qty).toLocaleString()} {currency}
                                </ProductTotalPrice>

                                <ProductQuantity>qty: {qty}</ProductQuantity>
                            </ProductContent>
                        </Products>
                    ))}
                </List>

                <CheckoutForm
                    onSuccess={onSubmit}
                    submitText={`Pay ${totalPrice.toLocaleString()} THB`}
                />
            </Container>
        </LayoutCenter>
    )
}

export default PageCheckout
