import { Button } from '@mui/material';

const CustomButton = ({
	children,
	onClick,
	color,
}: {
	children: any;
	onClick: any;
	color?:string;
}) => {
	return (
		<Button color={color as any ?? 'primary'} variant='contained' onClick={onClick}>
			{children}
		</Button>
	);
};

export default CustomButton;
