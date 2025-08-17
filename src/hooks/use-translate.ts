import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import en from '@/messages/en.json';
import th from '@/messages/th.json';

type Messages = typeof en;

export function useTranslate() {
	const locale = useSelector((state: RootState) => state.locale.current);

	const messages: Messages = locale === 'en' ? en : th;

	/**
	 * Simple translation function
	 * @param key - dot-separated key, e.g. "home.title"
	 */
	function t(key: keyof Messages) {
		return messages[key] ?? key;
	}

	return t;
}
