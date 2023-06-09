import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const getStyles = makeStyles({
	headerContainer: {
		minHeight: '75px',
		backgroundColor: '#f5ebd7',
		color: '#f2f2f2',
		...shorthands.padding('0', '0.5rem'),
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
		fontSize: '28px',
		fontWeight: '900',
		lineHeight: tokens.lineHeightBase500,
		color: '#000',
		backgroundImage:
			'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
	},
	userContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
	},
});
