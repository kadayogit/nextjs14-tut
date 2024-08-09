export default function ReviewDetails({params}:
    {
        params: {
            reviewId: string;
            productId: string;
        }
    }
) {
    return (
        <p>The review {params.reviewId} with product {params.productId}</p>
    )
}