import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLocale, Locale } from '@/i18n';

interface LocaleState {
	current: Locale;
}

const initialState: LocaleState = {
	current: defaultLocale,
};

const localeSlice = createSlice({
	name: 'locale',
	initialState,
	reducers: {
		setLocale: (state, action: PayloadAction<Locale>) => {
			state.current = action.payload;
		},
		toggleLocale: (state) => {
			state.current = state.current === 'en' ? 'th' : 'en';
		},
	},
});

export const { setLocale, toggleLocale } = localeSlice.actions;
export default localeSlice.reducer;
