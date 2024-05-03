import EstendioLogo from '@components/logos/estendio';
import { IWorkHistoryItem } from './types';
import MoneyDashboardLogo from '@components/logos/moneyDashboard';
import Logo from '@components/logos/app';

export const workHistoryData: IWorkHistoryItem[] = [
    {
        company: 'Estendio',
        title: 'Software Developer / Senior FE Developer',
        startDate: '2021',
        duration: '3 years',
        logo: <EstendioLogo gradient />,
    },
    {
        company: 'Money Dashboard',
        title: 'Junior FE Developer',
        startDate: '2020',
        duration: '8 months',
        logo: <MoneyDashboardLogo gradient />,
    },
    {
        company: 'Freelancer',
        title: 'Web Developer',
        startDate: '2019',
        duration: '3 years',
        logo: <Logo size={27} strokeWidth={5.8} gradient />,
    },
];
