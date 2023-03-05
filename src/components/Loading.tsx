import AutorenewIcon from '@mui/icons-material/Autorenew';
import '../styles/spinner.scss';

export function Loading({ spinnerColor }: { spinnerColor?: string }) {
	return (
		<>
			<p>Loading...</p>
			<AutorenewIcon className={`icon ${spinnerColor}`} />
		</>
	);
}
