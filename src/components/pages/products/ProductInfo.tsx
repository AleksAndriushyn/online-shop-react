import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Rating,
	Tooltip,
	Typography,
} from '@mui/material';
import '../../../styles/pages/products-page/productInfo.scss';
import { Product } from '../../../types';

const ProductInfo = ({
	product,
	productId,
}: {
	product: Product;
	productId?: any;
}) => {
	return (
		<Card raised={productId === product?.id ?? false} className='card'>
			<Tooltip title={product?.title}>
				<CardHeader title={product?.title} />
			</Tooltip>
			<Box
				className='product-image'
				style={{
					background: `url(${product?.image})`,
				}}
			/>
			<CardContent>
				<Box className='product-info'>
					<Typography fontSize={24}>{product?.price}$</Typography>
					<Box className='product-footer'>
						<Rating value={product?.rating?.rate ?? 0} />
						<Typography fontSize={'14px'}>
							({product?.rating?.count} votes)
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ProductInfo;
