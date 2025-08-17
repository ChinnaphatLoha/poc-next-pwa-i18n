'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleLocale } from '@/store/locale-slice';
import { useTranslate } from '@/hooks/use-translate';

export default function HomePage() {
	const dispatch = useDispatch();
	const locale = useSelector((state: RootState) => state.locale.current);
	const t = useTranslate();

	return (
		<main className='min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4'>
			<div className='max-w-lg w-full text-center p-8 rounded-3xl shadow-card bg-surface border border-white/10 min-h-[420px] flex flex-col justify-between'>
				<h1 className='text-4xl font-extrabold tracking-tight'>{t('title')}</h1>
				<p className='text-lg leading-relaxed'>{t('content')}</p>
				<button
					onClick={() => dispatch(toggleLocale())}
					className='btn-futuristic mt-6'
				>
					{locale === 'en' ? '🇹🇭 ภาษาไทย' : '🇺🇸 English'}
				</button>
			</div>
		</main>
	);
}
