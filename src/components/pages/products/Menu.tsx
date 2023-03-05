import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	List,
	ListItem,
	ListSubheader,
} from '@mui/material';
import '../../../styles/pages/products-page/menu.scss';

const Menu = ({
	categories,
	category,
	setCategory,
	priceSort,
	setPriceSort,
	popularity,
	setPopularity,
}: {
	categories: string[];
	category: string;
	setCategory: Function;
	priceSort: string;
	setPriceSort: Function;
	popularity: boolean;
	setPopularity: Function;
}) => {
	return (
		<Box className='menu'>
			<List className='category-list'>
				<ListSubheader className='subheader'>Categories</ListSubheader>
				{categories.map((category: string) => (
					<div key={category}>
						<ListItem
							className='category'
							onClick={() =>
								setCategory(
									categories.find((el: string) => el === category) as string
								)
							}>
							{category}
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
			<FormControlLabel
				control={
					<Checkbox
						checked={popularity}
						onChange={() => setPopularity(!popularity)}
					/>
				}
				label='Popularity'
			/>
			{(category || priceSort || popularity) && (
				<Button
					onClick={() => {
						setCategory('');
						setPriceSort('');
						setPopularity(false);
					}}
					variant='contained'
					color='error'>
					Reset
				</Button>
			)}
		</Box>
	);
};

export default Menu;
