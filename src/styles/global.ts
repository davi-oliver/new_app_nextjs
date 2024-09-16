import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',

        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    'cardPage': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    },

});